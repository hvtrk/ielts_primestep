import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public toggleMenu: Boolean = false; 
  title = 'ielts_primestep';
  public handleClick = () => {
    this.toggleMenu = !this.toggleMenu;
  }
}
