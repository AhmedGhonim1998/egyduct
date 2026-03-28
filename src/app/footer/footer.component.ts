import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Technical Authority', href: '#technical' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
  ];

  certifications = [
    'AMCA 210 – Air, Sound & FEG Certified',
    'BS EN 12101-3:2015 – Smoke Fans (BSRIA)',
    'TÜV India – 300°C / 2hrs (ADTA-F Series)',
    'MPA Braunschweig CPR F400 – RER 13 Series',
    'Nicotra Gebhardt Authorized Partner',
  ];
}