import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token !== undefined) {
      // verificando se a variável é diferente de undefined
      context
        .switchToHttp()
        .getResponse()
        .header('Authorization', `Bearer ${token}`);
    }
    return next.handle().pipe(
      tap(() => {
        // some logic here after the handler has been executed
      }),
    );
  }
}
