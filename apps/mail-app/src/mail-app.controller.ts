import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

interface Cat {
  name: string;
  age: number;
}

@Controller()
export class MailAppController {
  constructor() {}

  @EventPattern('email_cat')
  handleUserCreated(data: Cat): { success: boolean } {
    const { name, age } = data;

    console.log(`Name: ${name} Age: ${age}`);

    return { success: true };
  }
}
