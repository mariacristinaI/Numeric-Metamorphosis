import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transform-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transform-number.component.html',
  styleUrl: './transform-number.component.scss',
})
export class TransformNumberComponent {
  value = '';
  parity = '';
  result?: number[] | number | string;

  exercise = {
    name: '',
    description: '',
    inputType: '',
    function: '',
  };

  updateParity() {
    if (this.result) {
      if (+this.result % 2 === 0) {
        this.parity = 'EVEN';
      } else {
        this.parity = 'ODD';
      }
    } else {
      this.parity = '';
    }
  }

  switchLastDigits() {
    let inputNumber = +this.value;
    if (!inputNumber) {
      return;
    }
    const a = inputNumber % 10;
    inputNumber = Math.floor(inputNumber / 10);
    const b = inputNumber % 10;
    inputNumber = Math.floor(inputNumber / 10);
    inputNumber = inputNumber * 100 + a * 10 + b;

    this.result = inputNumber;
    this.updateParity();
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Displayed the number formed by interchanging the last two digits, the digit of tens and that of units.</p>';
  }

  mirrorNumbers() {
    let inputNumber = this.value;
    if (!inputNumber) {
      return;
    }
    let c: number[] = Array.from(String(inputNumber), Number);

    let reversedNumber = 0;
    for (let i = c.length - 1; i >= 0; i--) {
      reversedNumber = reversedNumber * 10 + c[i];
    }

    this.result = reversedNumber;
    this.updateParity();
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Reversed a given number from the last digit to the first.</p>';
  }

  fibonacci() {
    let inputNumber = this.value;
    if (!inputNumber) {
      return;
    }
    let sequence: number[] = [];
    let x = 0,
      y = 1;

    if (typeof inputNumber === 'number') {
      sequence.push(x);
      for (let i = 1; i < inputNumber; i++) {
        sequence.push(y);
        let sum = y;
        y = x + y;
        x = sum;
      }
    }

    this.result = sequence;
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Calculated and displayed the Fibonacci sequence up to the given number.<br>The Fibonacci sequence is when each number is equal to the sum of the preceding two numbers. </p>';
  }

  pyramid() {
    let inputNumber: number = +this.value;
    if (!inputNumber) {
      return;
    }
    let result = '';
    for (let i = 1; i <= inputNumber; i++) {
      for (let k = 1; k <= i; k++) {
        result += k;
      }
      result += '<br>';
    }
    this.result = result;
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Displayed a pyramid pattern constructed of ascending numbers.</p>';
  }

  pyramidReverse() {
    let inputNumber: number = +this.value;
    if (!inputNumber) {
      return;
    }
    let result = '';
    for (let i = inputNumber; i >= 1; i--) {
      let row = '';
      for (let k = 1; k <= i; k++) {
        row += k;
      }
      result += row + '<br>';
    }
    this.result = result;
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Constructed a pyramid pattern comprised of numbers in descending order.</p>';
  }
  column() {
    let inputNumber: number = +this.value;
    if (!inputNumber) {
      return;
    }
    let result = '';
    for (let i = 0; i < inputNumber; i++) {
      for (let j = 0; j < inputNumber; j++) {
        result += '*';
      }
      result += '<br>';
    }
    this.result = result;
    (document.getElementById('cat-text') as HTMLElement).innerHTML =
      '<p>Print the specified number of asterisks to form a column pattern.</p>';
  }
}
