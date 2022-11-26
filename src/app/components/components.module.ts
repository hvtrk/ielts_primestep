import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LandingPageComponent
  ]
})
export class ComponentsModule { }
