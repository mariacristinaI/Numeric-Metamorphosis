import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformNumberComponent } from './transform-number.component';

describe('TransformNumberComponent', () => {
  let component: TransformNumberComponent;
  let fixture: ComponentFixture<TransformNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
