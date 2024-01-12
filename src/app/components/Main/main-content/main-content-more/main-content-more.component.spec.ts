import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentMoreComponent } from './main-content-more.component';

describe('MainContentMoreComponent', () => {
  let component: MainContentMoreComponent;
  let fixture: ComponentFixture<MainContentMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContentMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
