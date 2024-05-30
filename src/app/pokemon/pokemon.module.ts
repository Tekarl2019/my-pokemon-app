import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';

const pokemonRoutes: Routes = [
  {path:'pokemons', component: PokemonListComponent},
  {path:'pokemon/:id', component: PokemonDetailComponent}
];
@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    PokemonDetailComponent,
    PokemonListComponent,
    BorderCardDirective
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
