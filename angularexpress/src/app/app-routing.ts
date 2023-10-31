import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent},{path:'home',component:HomeComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export  const routeComponents=[AboutusComponent,ContactusComponent,HomeComponent,LoginComponent];