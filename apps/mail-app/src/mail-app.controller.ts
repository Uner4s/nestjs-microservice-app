import { Controller, Get } from '@nestjs/common';
import { MailAppService } from './mail-app.service';
import { EventPattern } from '@nestjs/microservices';

interface Cat {
  name: string;
  age: number;
}

@Controller()
export class MailAppController {
  constructor(private readonly mailAppService: MailAppService) {}

  @Get()
  getHello(): string {
    return this.mailAppService.getHello();
  }

  @EventPattern('email_cat')
  handleUserCreated(data: Cat): { success: boolean } {
    const { name, age } = data;

    console.log(`Name: ${name} Age: ${age}`);

    return { success: true };
  }
}
