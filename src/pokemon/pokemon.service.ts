import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import {Cache, caching} from 'cache-manager';
import redisStore from'cache-manager-redis-store';
@Injectable()
export class PokemonService {
  redis: Cache
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {
    this.redis = caching({
      store: redisStore,
      host: process.env.REDIS_HOST, // default value
      port: process.env.REDIS_PORT, // default value
      auth_pass: '',
      db: 0,
      ttl: 600
    })
  }

  async getPokemon(id: number): Promise<string> {
    // check if data is in cache:
    const cachedData = await this.cacheService.get<{ name: string }>(
      id.toString(),
    );
    if (cachedData) {
      console.log(`Getting data from cache!`);
      return `${cachedData.name}`;
    }

    // if not, call API and set the cache:
    const { data } = await this.httpService.axiosRef.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    await this.cacheService.set(id.toString(), data);
    return await `${data.name}`;
  }
}
