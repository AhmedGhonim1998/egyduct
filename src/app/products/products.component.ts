import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  axialImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBnEdjEnToM8NcHIonZsEM9pJo_Pv8U3kWPtOxMOKAtNLdfaJmF6ENnBzVd8at_ee0Yis21UwXAXIwLzwLKBwAAV4ZC7pwT-3v_eQeRjx3msMVaHKLnYLaYNGD7ng0RvhgBPCSjoZjoKbNT2LeypTcaZXik3CMc0r0qR24SOQt5PZ7ACLrUMYpAxy26bp9DW9OWrwS_gafcfezOL2POIczz91hJz071T4tEzKostkUO7CQs2t5F6wJCQPml9OpDHRl-NAupxhn4U9x';
  smokeImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMhhay0KTba6YJjt6qOQ1dOIIiQ2UmfVsIhQcBF6WijfL2PUnu2-mtvwFVSItVr1Yq3wgjZnN-NIu1RFPNJUpu8NlAiWHXUMl6oceGfCHDvpLfLlAkfug4qEKuN8Pjz6_qQaT8LPg3N24HO5wsRrxiiOV8oM_3wYPjXF7cYntD923mur3k4lyzBxl4lEc18resFMS6TtPV8ksWBhy5WG7bve6YTXqk5rBn_4ZsIztlGchohexiZwcA5Rwr8JJksYOsXOyzwQHHJbE5';

  // Real products from PDF
  extraProducts = [
    { title: 'Inline Fans (Circular & Rectangular)', specs: 'N-CF · CD · CRIOF · Volume flow up to 5,100 m³/h · 400 Pa' },
    { title: 'Roof Fans', specs: 'RDA 31 · RDM 31 · RGA 31 · RVM evo · RHM · Up to 55,000 m³/h' },
    { title: 'Jet / Impulse Smoke Fans', specs: 'AGM 01/11 · AGM 02/12 · RGM 91 · Thrust up to 75 N · 300°C/2hrs' },
    { title: 'Kitchen Exhaust Fans', specs: 'Volume flow up to 55,000 m³/h · Pressure up to 900 Pa' },
    { title: 'HVAC Ductwork & Sheet Metal', specs: 'Custom fabricated galvanized steel ducts, dampers, diffusers, grills & louvers' },
    { title: 'Air Conditioners & Accessories', specs: 'Complete HVAC solutions including diffusers, grills, dampers, and all accessories' },
  ];
}