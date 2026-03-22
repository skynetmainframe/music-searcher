import { Component, input } from '@angular/core';
import { SongInfo } from '../songinfo';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-song-overview',
  imports: [RouterLink],
  // templateUrl: './song-overview.html',
  template: `
  <section class="listing">
    <img
      [src]="song().coverPhoto"
      alt="Album Cover of {{ song().title }}"
    />
    <h2>{{ song().title }}</h2>
    <p>{{ song().artist }}, {{ song().album }}</p>
    <a [routerLink]="['/songdetails', song().id]">Learn More</a>
  </section>  
  `,
  styleUrl: './song-overview.css',
})
export class SongOverview {
  song = input.required<SongInfo>();
}
