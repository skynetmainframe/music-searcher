import { Component, inject } from '@angular/core';
import { SongOverview } from '../song-overview/song-overview';
import { SongInfo } from '../songinfo';
import { SongService } from '../song.service';

@Component({
  selector: 'app-home',
  imports: [SongOverview],
  // templateUrl: './home.html',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search for a song" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        @for (song of songList; track $index) {
          <app-song-overview [song]="song" />
        }
      </section>
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  songList: SongInfo[] = [];
  songService: SongService = inject(SongService);

  constructor() {
    this.songList = this.songService.getAllSongs();
  }
}
