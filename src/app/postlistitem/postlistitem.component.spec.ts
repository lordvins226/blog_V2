import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistitemComponent } from './postlistitem.component';

describe('PostlistitemComponent', () => {
  let component: PostlistitemComponent;
  let fixture: ComponentFixture<PostlistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
