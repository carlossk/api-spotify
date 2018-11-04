import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lanzamientos: any[] = [];
  loading: boolean;
  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.lanzamientos = data;
      this.loading = false;

    });
  }

  ngOnInit() {
  }

}
