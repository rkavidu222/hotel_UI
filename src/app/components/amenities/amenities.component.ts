import { Component } from '@angular/core';

@Component({
  selector: 'app-amenities',
  standalone: true, // Optional: for standalone component, remove if using module-based approach
  imports: [],
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {

  amenities = [
    {
      id: 1,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the hotel',
      icon: 'wifi'  // You can later use icon libraries like FontAwesome, Lucide, etc.
    },
    {
      id: 2,
      title: 'Restaurant',
      description: 'Fine dining with international and local cuisine',
      icon: 'restaurant'
    },
    {
      id: 3,
      title: 'Fitness Center',
      description: 'State-of-the-art equipment and personal trainers',
      icon: 'dumbbell'
    },
    {
      id: 4,
      title: 'Swimming Pool',
      description: 'Indoor and outdoor pools with lounge area',
      icon: 'pool'  // Add icon name for pool or replace with an appropriate icon
    },
    {
      id: 5,
      title: 'Smart TVs',
      description: 'Flat-screen TVs with streaming capabilities',
      icon: 'tv'
    },
    {
      id: 6,
      title: 'Free Parking',
      description: 'Secure on-site parking for hotel guests',
      icon: 'car'
    }
  ];
}
