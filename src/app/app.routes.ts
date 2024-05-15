import { Routes } from '@angular/router';
import {ProfileGalleryComponent} from "./profile-gallery/profile-gallery.component";
import {AddPetFormComponent} from "./add-pet-form/add-pet-form.component";

// export const routes: Routes = [];
export const routes: Routes = [
  {path: '', component: ProfileGalleryComponent},
  {path:'add-pet', component:AddPetFormComponent}
];
