import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  selected_pokemon: string = "";
  title = 'ng_pokemon_app';
  pokemon_list: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    
    
  }

  selectPokemon( pokemon_name: string){
    this.selected_pokemon += `<p>Vous avez sélectionné ${pokemon_name}</p>`;
  }

}
