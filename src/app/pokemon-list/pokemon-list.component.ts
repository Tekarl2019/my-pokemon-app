import { Component } from '@angular/core';

import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
  pokemon_list: Pokemon[] = POKEMONS;
}
