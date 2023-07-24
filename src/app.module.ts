import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/services/prisma-service';
import { ClientController } from './infra/controllers/client-controller';
import { PrismaClientRepository } from './infra/database/prisma/repositories/prisma-client-repository';
import { ListClients } from './core/use-cases/list-clients';
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
    ListClients,
  ],
})
export class AppModule {}
