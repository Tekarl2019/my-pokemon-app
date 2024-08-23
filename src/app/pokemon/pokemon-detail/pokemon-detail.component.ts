import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: ``
})
export class PokemonDetailComponent implements OnInit {
  selected_pokemon: Pokemon|undefined;
  pokemon_list: Pokemon[] = POKEMONS;

  constructor(private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const selected_pokemon_id: string|null = this.route.snapshot.paramMap.get('id');
    if(selected_pokemon_id){
      this.selected_pokemon = this.pokemon_list.find(element => element.id == +selected_pokemon_id);
    }
  }
  showList(){
    this.router.navigate(['pokemons']);
  }

}
