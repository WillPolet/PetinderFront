import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit{
  constructor(private petService: PetService) {
  }

  ngOnInit() {
    getPets()
  }
}
