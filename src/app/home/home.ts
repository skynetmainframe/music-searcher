import { Component } from '@angular/core';
import { SongOverview } from '../song-overview/song-overview';
import { SongInfo } from '../songinfo';

@Component({
  selector: 'app-home',
  imports: [SongOverview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  songList: SongInfo[] = [
    {
      id: 0,
      title: "Never Gonna Give You Up",
      artist: "Rick Astley",
      album: "Whenever You Need Somebody",
      coverPhoto: "/public/album.png",
    },
    {
      id: 1,
      title: "Eintagsfliege",
      artist: "Dominik Eulberg",
      album: "Mannigfaltig",
      coverPhoto: "/public/album.png",
    },
  ];
}
