import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'https://backend-caf-v2-production.up.railway.app/docs';
  }
}
