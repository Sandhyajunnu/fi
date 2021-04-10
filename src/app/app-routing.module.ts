import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { MoreComponent } from './more/more.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
{path:"categories",component:CategoriesComponent},
{path:"more",component:MoreComponent},
{path:"about",component:AboutComponent},
{path:"logo",component:LogoComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
