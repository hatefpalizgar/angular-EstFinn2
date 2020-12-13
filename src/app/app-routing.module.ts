import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertiesListComponent} from "./properties-list/properties-list.component";
import {PropertyDetailsComponent} from "./property-details/property-details.component";

const routes: Routes = [
  {path:'properties',component: PropertiesListComponent},
  {path:'properties/:id', component: PropertyDetailsComponent},
  {path:'',redirectTo:'/properties', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
