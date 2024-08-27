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

  constructor(
              private router: Router,
              private pokemonService: PokemonService
  ){

  }

  ngOnInit(): void {

    this.types = this.pokemonService.getPokemonTypeList();
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
    this.router.navigate(['pokemon/',this.pokemon.id]);
  }
}
