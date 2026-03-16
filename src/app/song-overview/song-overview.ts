import { Component, input } from '@angular/core';
import { SongInfo } from '../songinfo';

@Component({
  selector: 'app-song-overview',
  imports: [],
  templateUrl: './song-overview.html',
  styleUrl: './song-overview.css',
})
export class SongOverview {
  song = input.required<SongInfo>();
}
