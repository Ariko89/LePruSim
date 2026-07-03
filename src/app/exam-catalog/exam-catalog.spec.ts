import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCatalog } from './exam-catalog';

describe('ExamCatalog', () => {
  let component: ExamCatalog;
  let fixture: ComponentFixture<ExamCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(ExamCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
