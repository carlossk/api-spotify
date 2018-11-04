import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) {  }

  ngOnInit() {
  }

  buscar(busqueda) {
    this.loading = true;

    this.spotifyService.getFindArtist(busqueda).subscribe((data: any) => {
      console.log(data);

      this.artistas = data;
    this.loading = false;

    });
  }

}
