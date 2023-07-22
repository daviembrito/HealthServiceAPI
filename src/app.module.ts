import { Module } from '@nestjs/common';
import { PrismaService } from './infra/services/prisma-service';
import { ClientController } from './infra/controllers/client-controller';
import { PrismaClientRepository } from './infra/repositories/prisma-client-repository';
import { GetClient } from './core/use-cases/get-client';
import { ClientRepository } from './core/repositories/client-repository';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientRepository,
    },
    GetClient,
  ],
})
export class AppModule {}
