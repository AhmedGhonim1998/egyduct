import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-bar.component.html',
  styleUrl: './partners-bar.component.css'
})
export class PartnersBarComponent {
  // Real clients from PDF page 5
  clients: string[] = [
    'ORASCOM CONSTRUCTION',
    'EGYPT POST',
    'GUC',
    'CARREFOUR',
    'FARM FRITES',
    'EL SOADAA GROUP',
    'NICOTRA GEBHARDT',
  ];
}