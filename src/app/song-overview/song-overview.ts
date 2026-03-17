import { Component, input } from '@angular/core';
import { SongInfo } from '../songinfo';

@Component({
  selector: 'app-song-overview',
  imports: [],
  // templateUrl: './song-overview.html',
  template: `
  <section class="listing">
    <img
      [src]="song().coverPhoto"
      alt="Album Cover of {{ song().title }}"
    />
    <h2>{{ song().title }}</h2>
    <p>{{ song().artist }}, {{ song().album }}</p>
  </section>  
  `,
  styleUrl: './song-overview.css',
})
export class SongOverview {
  song = input.required<SongInfo>();
}
