import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  tracks: any[] = [];
  constructor(private activateRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activateRoute.params.subscribe(params => {
      console.log(params);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  ngOnInit() {
  }
  getArtista(id: string) {
    this.spotify.getArtist(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
      console.log(artista);
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(data => {
      this.tracks = data;
      console.log(data);
      
    });
  }


}
