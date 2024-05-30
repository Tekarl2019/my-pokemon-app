import { Component } from '@angular/core';

import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
  pokemon_list: Pokemon[] = POKEMONS;
  
  constructor(private router: Router){}

  showDetails(id:number){ 
    this.router.navigate([`pokemon/${id}`]);
  }
}
