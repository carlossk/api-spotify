import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPPpoeesGKYKo2Fe9cWdci9HTIOclW46gLn60D9Ce_8gabfuTCvgj8kIC0CRxNTr3qPYSChXn_lfotRZE' // paste your access token
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }
  getFindArtist(busqueda) {
    return this.getQuery(`search?q=${busqueda}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artists'].items));

  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
    .pipe(map(data => data['tracks']));

  }
}
