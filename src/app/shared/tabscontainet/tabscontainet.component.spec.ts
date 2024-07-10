import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabscontainetComponent } from './tabscontainet.component';

describe('TabscontainetComponent', () => {
  let component: TabscontainetComponent;
  let fixture: ComponentFixture<TabscontainetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabscontainetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabscontainetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
