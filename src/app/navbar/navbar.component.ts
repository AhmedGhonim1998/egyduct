import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinks: NavLink[] = [
    { label: 'About', href: '#about', active: true },
    { label: 'Products', href: '#products' },
    { label: 'Technical Authority', href: '#technical' },
    { label: 'Contact', href: '#contact' },
  ];
}