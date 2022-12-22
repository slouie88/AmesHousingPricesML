import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataFormComponent } from './data-form.component';

describe('DataFormComponent', () => {
  let component: DataFormComponent;
  let fixture: ComponentFixture<DataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('#getForm() should return #dataForm', () => {
    expect(component.getForm()).toEqual(component.dataForm);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
