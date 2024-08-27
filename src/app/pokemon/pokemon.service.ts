import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  updatePokemon(pokemon: Pokemon):Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({'conten-Type': 'application/json'})
    };
   return this.http.put('api/pokemons', pokemon, httpOptions) ;
  }


  deletePokemonById(id: number):Observable<Object>{
   
   return this.http.delete(`api/pokemons/${id}`) ;
  }


  createPokemon(pokemon: Pokemon):Observable<Pokemon>{

    const httpOptions = {
      headers: new HttpHeaders({'conten-Type': 'application/json'})
    };
   return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions) ;
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
