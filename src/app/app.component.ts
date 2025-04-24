import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmenitiesComponent,FooterComponent,HeroComponent,NavbarComponent,RoomsComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-ui';
}
