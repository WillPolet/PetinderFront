import { Component } from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
import {ProfileGalleryComponent} from "../profile-gallery/profile-gallery.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    ProfileGalleryComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
