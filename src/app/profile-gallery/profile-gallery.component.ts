import {Component, inject, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {NameFilterPipe} from "../pipe/name-filter.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    NameFilterPipe,
    FormsModule
  ],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit{
  readonly #petService:PetService = inject(PetService)

  pets$?: Observable<Pet[]>
  selectedPet? :Pet
  // searchText?: string
  searchText!: string;

  getPets(){
    // this.#petService.getPets().subscribe((data: Pet[]) => {
    //   this.pets = data
    // })
    this.pets$ = this.#petService.getPetsByAscName()
  }

  onSelect(pet:Pet):void{
    if (pet == this.selectedPet){
      this.selectedPet = undefined;
    }else {
      this.selectedPet = pet
    }
  }

  ngOnInit() {
    this.getPets()
  }

  onSearchText() {
    this.selectedPet = undefined
  }
}
