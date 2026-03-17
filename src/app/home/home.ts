import { Component, inject } from '@angular/core';
import { SongOverview } from '../song-overview/song-overview';
import { SongInfo } from '../songinfo';
import { SongService } from '../song.service';

@Component({
  selector: 'app-home',
  imports: [SongOverview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  songList: SongInfo[] = [];
  songService: SongService = inject(SongService);

  constructor() {
    this.songList = this.songService.getAllSongs();
  }
}
