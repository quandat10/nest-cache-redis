import {
  CacheInterceptor, CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    console.log("hello")
    return await this.service.getPokemon(+id);
  }
}
