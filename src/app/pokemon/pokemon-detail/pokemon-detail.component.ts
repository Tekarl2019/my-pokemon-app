import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: ``
})
export class PokemonDetailComponent implements OnInit {
  selected_pokemon: Pokemon|undefined;

  constructor( private route: ActivatedRoute, 
               private router: Router,
               private pokemonService: PokemonService
  ){

  }

  ngOnInit(): void {
    const selected_pokemon_id: string|null = this.route.snapshot.paramMap.get('id');
    if(selected_pokemon_id){
      this.pokemonService.getPokemonById(+selected_pokemon_id).subscribe(
        pokemon => this.selected_pokemon = pokemon
      );
    }
  }
  showList(){
    this.router.navigate(['pokemons']);
  }
  edit(){
    if(this.selected_pokemon)
    this.router.navigate(['edit/pokemon', this.selected_pokemon.id]);
  }
}
