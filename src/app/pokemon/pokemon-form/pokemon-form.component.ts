import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isCreated: boolean;

  constructor(
              private router: Router,
              private pokemonService: PokemonService
  ){

  }

  ngOnInit(): void {

    this.types = this.pokemonService.getPokemonTypeList();
    this.isCreated = this.router.url.includes('create');
  }


  hasType(type: string): boolean{
    
      return this.pokemon.types.includes(type);
    
  }


  lock(type: string): boolean{
    
      if((this.pokemon.types.length > 2)&&(!this.hasType(type))) return true;
      if((this.pokemon.types.length == 1)&&(this.hasType(type))) return true;

      return false;
    
  }


  selectType($event: Event, type: string){
    
      if(($event.target as HTMLInputElement).checked)
        {
          this.pokemon.types.push(type);
        }else{
          this.pokemon.types.splice(this.pokemon.types.indexOf(type),1);
        }
    
  }


  onSubmit(){
    if(this.isCreated){
      this.pokemonService.createPokemon(this.pokemon).subscribe(
        (pokemon) => this.router.navigate(['pokemon/', pokemon.id])
      )
    }else{
      this.pokemonService.updatePokemon(this.pokemon).subscribe(
        () => this.router.navigate(['pokemon/', this.pokemon.id])
      );
    }
    
  }
}
