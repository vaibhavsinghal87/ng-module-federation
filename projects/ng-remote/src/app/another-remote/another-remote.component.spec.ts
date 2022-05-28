import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherRemoteComponent } from './another-remote.component';

describe('AnotherRemoteComponent', () => {
  let component: AnotherRemoteComponent;
  let fixture: ComponentFixture<AnotherRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
