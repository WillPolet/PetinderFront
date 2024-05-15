import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root' // visible in all the application
})
export class PetService {
  private petUrlBack: string;
  constructor(private http: HttpClient) {
    this.petUrlBack = `${environment.backendUrl}/pets`
  }

  getPets() :Observable<Pet[]>{
    return this.http.get<Pet[]>(this.petUrlBack)
  }

  getPetsByAscName() :Observable<Pet[]>{
    return this.http.get<Pet[]>(this.petUrlBack).pipe(
      map(result => result.sort((a,b) => a.name.localeCompare(b.name)) )
    )
  }

  addPet(pet:Pet) :Observable<void>{
    return this.http.post<void>(this.petUrlBack, pet)
  }


}
