import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TransformNumberComponent } from './transform-number/transform-number.component';
import { ListComponent } from './list/list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { CatTextService } from './cat-text.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, TransformNumberComponent, ListComponent, WelcomeScreenComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  catText$ = this.catTextService.text$;
  displayScrollTop = false;
  
  constructor(private readonly contexts: ChildrenOutletContexts, private readonly catTextService: CatTextService) {
  }
  
  welcome() {
    alert("Hey there! 👋 This terminal is your playground for exploring basic algorithms. I've already solved them using JavaScript and TypeScript, ready for you to use. Enjoy the code, and best of luck with your projects! Best regards, Maria ✮");
  }
  homeText() {
    this.catTextService.text$.next("");
  }

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
