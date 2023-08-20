import { Module } from '@nestjs/common';
import { PokemonController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [AppService],
})
export class AppModule {}
