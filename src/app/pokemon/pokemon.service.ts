import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable(/*{
  providedIn: 'root' //no longer disponible from root, only from pokemon.module...see pokemon.module.ts
}*/)
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == id);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
