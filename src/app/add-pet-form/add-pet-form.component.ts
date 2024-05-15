import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PetService} from "../service/pet.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-add-pet-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-pet-form.component.html',
  styleUrl: './add-pet-form.component.css'
})
export class AddPetFormComponent {
  pet$?:Observable<void>
  readonly #petService:PetService = inject(PetService)
  readonly formBuilder:FormBuilder = inject(FormBuilder)
  addPetForm:FormGroup = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: 0
  })


  addPet(pet:Pet):void{
    this.#petService.addPet(pet).subscribe()
  }

  // onSubmit
  onSubmit() {
    this.addPetForm.value.id = Math.round(Math.random()*1000);
    this.addPet(this.addPetForm.value);
  }
}
