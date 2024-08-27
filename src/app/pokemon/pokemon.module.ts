import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';

const PokemonRoutes: Routes = [
  {path:'pokemon/create', component: CreatePokemonComponent},
  {path:'edit/pokemon/:id', component: EditPokemonComponent},
  {path:'pokemons', component: PokemonListComponent},
  {path:'pokemon/:id', component: PokemonDetailComponent}
];

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent,
    CreatePokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PokemonRoutes),
    FormsModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
