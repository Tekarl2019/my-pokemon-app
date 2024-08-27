import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root' //no longer disponible from root, only from pokemon.module...see pokemon.module.ts
}*/)
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons');
  }

  getPokemonById(id: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${id}`);
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
