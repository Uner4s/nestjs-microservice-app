import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

interface Cat {
  name: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MAIL_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/mailing')
  async mailing(): Promise<void> {
    const cat: Cat = { name: 'Lali', age: 2 };

    this.client.emit<number>('email_cat', cat);
  }
}
