import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'list',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  value = '';
  result?: number[] | number | string;

  FizzBuzz() {
    let inputNumber: number = +this.value;
    if (!inputNumber) {
      return;
    }
    let result = '';
    for (let i = 1; i <= inputNumber; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'FizzBuzz ';
      } else if (i % 3 === 0) {
        result += 'Fizz ';
      } else if (i % 5 === 0) {
        result += 'Buzz ';
      } else {
        result += i + ' ';
      }
    }
    this.result = result;
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Multiples of three are printed Fizz, multiples of five are printed Buzz, and multiples of both are Fizz Buzz.</p>';
  }

  even() {
    // let numbers: number[] = this.value.split(',').map((n) => +n);
    // if (!numbers.length) {
    //   return;
    // }
    // let result = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   if (numbers[i] % 2 === 0) {
    //     result++;
    //   }
    //   this.result = result;
    // }
    let inputNumber: number = +this.value;
    if (!inputNumber) {
      return;
    }
    let result = [];
    for (let i = 1; i <= inputNumber; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
      this.result = result;
    }
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Displayed only the even numbers from the list.</p>';
  }
}
