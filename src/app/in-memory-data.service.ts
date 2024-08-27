import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
   createDb() {
    const pokemons: Pokemon[]= POKEMONS;
    return {pokemons};
  }
}
