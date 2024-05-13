import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root' // visible in all the application
})
export class PetService {
  private _petList: string;
  constructor(private http: HttpClient) {
    this._petList = `${environment.backendUrl}/pets`
  }

  getPets() :Observable<any>{
    return this.http.get(this._petList)
  }
}
