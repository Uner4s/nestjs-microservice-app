import { Module } from '@nestjs/common';
import { MailAppController } from './mail-app.controller';

@Module({
  imports: [],
  controllers: [MailAppController],
  providers: [],
})
export class MailAppModule {}
