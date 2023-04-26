import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getURL(): string {
  //   return 'https://backend-caf-v2-production.up.railway.app/docs';
  // }

  getHello(): string {
    return 'Hi, Hello World!';
  }
}
