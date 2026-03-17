import { Injectable } from '@angular/core';
import { SongInfo } from './songinfo';

@Injectable({
  providedIn: 'root',
})
export class SongService {
    protected songList: SongInfo[] = [
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
  getAllSongs(): SongInfo[] {
    return this.songList;
  }
  getSongById(id: number): SongInfo | undefined {
    return this.songList.find((song) => song.id === id);
  }  
}
