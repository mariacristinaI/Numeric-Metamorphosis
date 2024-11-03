import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatTextService {
  text$ = new BehaviorSubject<string>('');
}
