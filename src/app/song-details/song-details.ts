import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SongService } from '../song.service';
import { SongInfo } from '../songinfo';

@Component({
  selector: 'app-song-details',
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="song?.coverPhoto"
        alt="Photo Cover of {{ song?.title }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ song?.title }}</h2>
        <p class="listing-location">{{ song?.album }}, {{ song?.artist }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this song</h2>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './song-details.css',
})
export class SongDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  songService = inject(SongService);
  song : SongInfo | undefined;
  constructor() {
    const songId = Number(this.route.snapshot.params['id']);
    this.song = this.songService.getSongById(songId);
  }
}
