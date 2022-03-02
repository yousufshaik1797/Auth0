import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Profilecomponent } from './Components/profile/profile.component';

const routes: Routes = [
  {
    path:'Home',component:HomeComponent
  },
  {
    path:'profile',component:Profilecomponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
