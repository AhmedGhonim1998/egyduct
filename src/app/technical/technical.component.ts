import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cert {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}

interface Authorization {
  title: string;
  body: string;
  source: string;
  date: string;
}

@Component({
  selector: 'app-technical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical.component.html',
  styleUrl: './technical.component.css'
})
export class TechnicalComponent {

  certifications: Cert[] = [
    {
      label: 'Air Performance Certification',
      value: 'AMCA 210',
      sub: 'Air, Sound & FEG certified for Axial, Centrifugal & Jet fans',
    },
    {
      label: 'Smoke Fan Standard',
      value: 'BS EN 12101-3',
      sub: '250°C / 300°C / 400°C / 600°C for 2 hrs — BSRIA & TÜV tested',
    },
    {
      label: 'European Smoke Standard',
      value: 'CPR F400',
      sub: 'Certificate 0761-CPR-240031-2.1 — valid until 2029, MPA Braunschweig',
    },
    {
      label: 'Nicotra Gebhardt Partner',
      value: 'Authorized Distributor',
      sub: 'Official Nicotra Products Sales Channel in Egypt — Regal Rexnord, Dubai (Sep 2025)',
      accent: true,
    },
  ];

  // Real authorization letters from PDF
  authorizations: Authorization[] = [
    {
      title: 'Nicotra Products Sales Channel Authorization',
      body: 'M/s. Egy Duct is confirmed as one of the channels of Regal Rexnord to supply and install Nicotra brand products in Egypt. Valid for 2 years.',
      source: 'Regal Beloit FZE · JAFZA ONE, Dubai UAE',
      date: '8 Sep 2025',
    },
    {
      title: 'Nicotra Axial Fan Product Range Confirmation',
      body: 'Nicotra Gebhardt offers a comprehensive range of axial fan solutions — ADTA/ADTAF, Wall-Mounted, Circular Inline, Jet, Cabinet, Rectangular — AMCA and BSRIA certified.',
      source: 'Regal Beloit FZE · JAFZA ONE, Dubai UAE',
      date: '23 Sep 2025',
    },
    {
      title: 'Consultant Approval — Zaha Park Project',
      body: 'Nicotra Axial Fans (Italy/India) accepted in principle for Zaha Park project. All HVAC equipment shall comply with technical specs and IFC MEP package BOQ.',
      source: 'Hany Tawfik Consulting Office (HTCO) · Egypt & Qatar',
      date: '10 May 2025',
    },
  ];

  contacts = [
    {
      icon: 'factory',
      label: 'Factory',
      value: 'Industrial Zone<br>Qalyubia – Cairo, Egypt',
    },
    {
      icon: 'apartment',
      label: 'Head Office',
      value: '16th Al Khartoum St., Masr Al Gadida<br>B-Hub Building, 4th Floor, Cairo',
    },
    {
      icon: 'call',
      label: 'Contact',
      value: '02 27752807<br>012 8534 3418<br>info@egyduct.com · tender@egyduct.com',
    },
  ];
}