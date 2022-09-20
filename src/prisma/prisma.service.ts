import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly configServer?: ConfigService) {
    super(
      configServer?.get('NODE_ENV') === 'production'
        ? {
            log: ['query'],
          }
        : {},
    );
  }
}
