import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongOverview } from './song-overview';

describe('SongOverview', () => {
  let component: SongOverview;
  let fixture: ComponentFixture<SongOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(SongOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
