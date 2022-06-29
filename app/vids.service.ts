import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VidsService {

  constructor(private http: HttpClient) { }
  getData(usrInput:string):Observable<any> {
    const API_KEY = "AIzaSyAOIZXBA_JfpcnDuIly-_3XMUmap-sYONo"
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q="+usrInput+"&key="+API_KEY
    return this.http.get<any>(url);
  }
}

// AIzaSyDRmk778Jf_h8Nbzy_Tp0f3lIzR59BVIvs
// AIzaSyBLSaZGN9GvNAINGvdqifCzOF3qdcmId50