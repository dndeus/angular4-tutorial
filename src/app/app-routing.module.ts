import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { RouteTransition } from "./route-transition.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canDeactivate: [] },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canActivate: []},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}