import { Component, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CatTextService } from '../cat-text.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{
  private readonly catTextService = inject(CatTextService);
  lunaMusic() {
    this.catTextService.text$.next("Purrfectly meow-sic for your work day! ♫ ♪ ♫ ♪");
  }
  lunaTransforms() {
    this.catTextService.text$.next("Integers and floats are two different kinds of numerical data.");
  }
  lunaLists() {
    this.catTextService.text$.next("Lists are not limited to binary codes.");
  }
}
