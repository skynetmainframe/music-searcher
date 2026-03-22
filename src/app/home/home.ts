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
        <input type="text" placeholder="Filter by song title" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <section class="results">
        @for (song of filteredSongList; track $index) {
          <app-song-overview [song]="song" />
        }
      </section>
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  songList: SongInfo[] = [];
  filteredSongList: SongInfo[] = [];
  songService: SongService = inject(SongService);

  constructor() {
    this.songList = this.songService.getAllSongs();
    this.filteredSongList = this.songList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredSongList = this.songList;
      return;
    }
    this.filteredSongList = this.songList.filter((song) =>
      song?.title.toLowerCase().includes(text.toLowerCase()),
    );
  }  
}
