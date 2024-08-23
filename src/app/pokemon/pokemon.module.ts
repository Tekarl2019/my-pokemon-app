import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';

const PokemonRoutes: Routes = [
  {path:'pokemons', component: PokemonListComponent},
  {path:'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PokemonRoutes)
  ]
})
export class PokemonModule { }
