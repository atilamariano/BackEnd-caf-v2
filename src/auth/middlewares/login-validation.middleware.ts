import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (authorization && authorization.startsWith('Bearer ')) {
      const token = authorization.slice(7, authorization.length);
      const decoded = this.authService.verifyToken(token);
      req.user = decoded;
    }

    next();
  }
}
