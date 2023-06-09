import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
{path:'home', component: MainPageComponent},
{path:'user', component: UserPageComponent},
{path:'', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
