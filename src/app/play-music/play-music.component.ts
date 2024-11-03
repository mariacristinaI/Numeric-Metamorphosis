import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-play-music',
  standalone: true,
  imports: [],
  templateUrl: './play-music.component.html',
  styleUrl: './play-music.component.scss',
})
export class PlayMusicComponent {
  // private readonly images = [
  //   'url("/assets/images/albums/musicforprogramming.png")',
  //   'url("/assets/images/albums/Tycho-Dive.jpg")'
  // ];
  // currentIndex = 0;
  // isAnimating = false;

  constructor(private readonly renderer: Renderer2) {}

  // changeBackground(div: HTMLDivElement) {
  //   this.isAnimating = true;
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;

  //   this.renderer.setStyle(div, 'background-image', this.images[this.currentIndex]);
  //   this.renderer.addClass(div, 'rotate');

  //   setTimeout(() => {
  //     this.isAnimating = false;
  //     this.renderer.removeClass(div, 'rotate');
  //   }, 10000000);
  // }

  updateMusicText() {
    document.getElementById('cat-text')!.innerHTML = 
      '<p>Purrfectly meow-sic for your work day! ♫ ♪ ♫ ♪</p>';
  }  
}
