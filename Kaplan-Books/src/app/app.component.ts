import { Component, Inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatListModule} from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BooksComponent } from "./books/books.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSidenav,
    CommonModule,
    BooksComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  // isExpanded = true;
  // showSubmenu: boolean = false;
  // isShowing = false;
  // showSubSubMenu: boolean = false;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }



  title = 'Kaplan-Books';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = true;
  // observer = Inject(BreakpointObserver);
  isCollapsed = true;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(){
    this.observer.observe(['(max-width: 360px)']).subscribe((screenSize: any) => {
      if(screenSize.matches){
        this.isMobile = true;
      }
      else{
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
