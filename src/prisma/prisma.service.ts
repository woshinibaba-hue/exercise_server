import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  constructor(private readonly configServer: ConfigService) {}
}
