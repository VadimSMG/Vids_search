import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Class for Observable (response from YT)
export class YT_response {
  items: object = {
  id: {
    videoId: ""
  },
  snippet: {
    title: "",
    thumbnails: {
      medium: {
        url: "",
      }
    },
    description: ""
  }
}
constructor(){
}
}

@Injectable({
  providedIn: 'root'
})

export class VidsService {

  constructor(private http: HttpClient) { }
  getData(usrInput: string): Observable<YT_response> {
    const API_KEY = "AIzaSyBgqRlks8oWSbGycf7rIXSDxEYV8lObbfI"
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=" + usrInput + "&key=" + API_KEY
    console.log(this.http.get<any>(url))
    return this.http.get<any>(url);
  }
}

// AIzaSyDRmk778Jf_h8Nbzy_Tp0f3lIzR59BVIvs
// AIzaSyBLSaZGN9GvNAINGvdqifCzOF3qdcmId50
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
