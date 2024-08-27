import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-create-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="default_pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class CreatePokemonComponent implements OnInit {
  default_pokemon: Pokemon;

  ngOnInit() {
    this.default_pokemon = new Pokemon();
  }
}
