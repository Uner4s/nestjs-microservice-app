import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MailAppModule } from './mail-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailAppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
