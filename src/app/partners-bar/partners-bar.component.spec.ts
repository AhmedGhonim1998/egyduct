import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersBarComponent } from './partners-bar.component';

describe('PartnersBarComponent', () => {
  let component: PartnersBarComponent;
  let fixture: ComponentFixture<PartnersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
