import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#toggleNavBarDropDown should toggle #navbarCollapsed', () => {
    expect(component.navbarCollapsed)
      .withContext('true at first')
      .toBe(true);
    component.toggleNavBarDropDown();
    expect(component.navbarCollapsed)
      .withContext('false after first invocation of #toggleNavBarDropDown')
      .toBe(false);
    component.toggleNavBarDropDown();
    expect(component.navbarCollapsed)
      .withContext('true after second invocation of #toggleNavBarDropDown')
      .toBe(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <ul> with more than one entry', () => {
    const navigationElement: HTMLElement = fixture.nativeElement;
    const ul = navigationElement.querySelectorAll('ul');
    expect(ul).toBeTruthy();
    expect(ul.length).toBeGreaterThan(0);
  });

  it('should have .navbar-brand element', () => {
    const navigationElement: HTMLElement = fixture.nativeElement;
    const brandElement = navigationElement.querySelector(".navbar-brand");
    expect(brandElement).toBeTruthy();
    expect(brandElement?.textContent?.length).toBeGreaterThan(0);
  });
});
