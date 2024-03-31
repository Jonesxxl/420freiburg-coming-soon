import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bud3dComponent } from './bud3d.component';

describe('Bud3dComponent', () => {
  let component: Bud3dComponent;
  let fixture: ComponentFixture<Bud3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bud3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bud3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
