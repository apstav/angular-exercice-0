import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenWordComponent } from './even-word.component';

describe('EvenWordComponent', () => {
  let component: EvenWordComponent;
  let fixture: ComponentFixture<EvenWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
