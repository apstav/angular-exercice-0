import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddWordComponent } from './odd-word.component';

describe('OddWordComponent', () => {
  let component: OddWordComponent;
  let fixture: ComponentFixture<OddWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
