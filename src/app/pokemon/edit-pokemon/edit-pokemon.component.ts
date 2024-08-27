import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Éditer {{pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService
){

}
ngOnInit(): void {
  let id: string|null = this.route.snapshot.paramMap.get('id');
  if(id)
  this.pokemonService.getPokemonById(+id).subscribe(
    pokemon => this.pokemon = pokemon
  );
}
}
