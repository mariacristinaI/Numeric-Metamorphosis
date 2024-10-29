import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TransformNumberComponent } from './transform-number/transform-number.component';
import { ListComponent } from './list/list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, TransformNumberComponent, ListComponent, WelcomeScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  welcome() {
    alert("Hey there! 👋 This terminal is your playground for exploring basic algorithms. I've solved them using JavaScript and TypeScript, ready for you to use. Enjoy the code, and best of luck with your projects! From, Maria ✮");
  };
  
  displayScrollTop = false;

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const position = event.target.documentElement?.scrollTop;
    if (position >= 20) {
      this.displayScrollTop = true;
    } else {
      this.displayScrollTop = false;
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}
