import { Module } from '@nestjs/common';

import { DatabaseProvider } from './database.provider';

@Module({
  imports: [],
  providers: [...DatabaseProvider],
})
export class DatabaseModule {}
