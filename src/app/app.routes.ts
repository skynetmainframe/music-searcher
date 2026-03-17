import { Routes } from '@angular/router';
import {Home} from './home/home';
import { SongDetails } from './song-details/song-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'songdetails/:id',
    component: SongDetails,
    title: 'Song details',
  },
];
export default routes;