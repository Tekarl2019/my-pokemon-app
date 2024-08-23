import { Component, OnInit } from '@angular/core';

import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent implements OnInit{
  pokemon_list: Pokemon[];
  
  constructor( private router: Router,
               private pokemonService: PokemonService
            ){}

  ngOnInit(){
    this.pokemon_list = this.pokemonService.getPokemonList();
  }

  showDetails(id:number){ 
    this.router.navigate([`pokemon/${id}`]);
  }
}
