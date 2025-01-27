import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Res() res): void {
  //   const url = this.appService.getURL();
  //   res.redirect(url);
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
