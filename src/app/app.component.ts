import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { PartnersBarComponent } from './partners-bar/partners-bar.component';
import { ProductsComponent } from './products/products.component';
import { TechnicalComponent } from './technical/technical.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, HeroComponent, PartnersBarComponent, ProductsComponent, TechnicalComponent, CtaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // بيانات الشركة من الملف الرسمي
categories = ['All', 'Axial Fans', 'Centrifugal Fans', 'Fan Sections', 'Jet Fans', 'Smoke Extraction Fans', 'Rooftop Extraction', 'Cleanroom Solutions', 'ATEX Fans'];
selectedCategory = 'All';

 isScrolled = false;
 @HostListener('window:scroll', [])
onWindowScroll() {
  this.isScrolled = window.scrollY > 50;
}

isMenuOpen = false;
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('nav')) {
    this.isMenuOpen = false;
  }
}

scrollToSection(event: Event, href: string) {
  // 1. امنع السلوك الافتراضي عشان نتحكم في الحركة
  event.preventDefault();
  
  // 2. اقفل المنيو فوراً
  this.isMenuOpen = false;

  // 3. شيل الـ # من الـ href عشان نجيب الـ ID
  const id = href.replace('#', '');
  const element = document.getElementById(id);

  if (element) {
    // 4. انزل للسيكشن بنعومة مع مراعاة ارتفاع الـ Navbar
    const offset = 80; // ارتفاع النوفبار بتاعك تقريبا
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

companyInfo = {
  founded: 2017, // [cite: 6, 120]
  headOffice: '16th El Khartoum St., B-HUB Building, Heliopolis, Cairo', // [cite: 2, 11]
  factory: 'Industrial Zone, Qalyubia - Cairo', // [cite: 1, 110]
  phones: ['02 27752807', '012 8534 3418'], // [cite: 2, 112]
  emails: {
    info: 'info@egyduct.com',
    tender: 'tender@egyduct.com'
  },
  vision: 'To be a leader in the HVAC industry, known for innovation, quality, and customer satisfaction.', // [cite: 7, 125]
  mission: 'To provide the latest technologies and high-quality products tailored to unique customer needs while prioritizing value and energy efficiency.' // [cite: 9, 128]
};

// الشركاء والعملاء الكبار
partners = ['Orascom Construction', 'Egypt Post', 'Carrefour', 'Farm Frites', 'GUC', 'El Soadaa Group']; // [cite: 10, 134, 139]


 heroMainImage = '../../images/hero1.png';
  heroSecondaryImage = '../../images/hero2.png';
 

  openWhatsApp() {
  const phone = '201285343418';
  // رسالة احترافية تتبعت تلقائياً
  const message = 'Hello Egy Duct, I visited your website and would like to inquire about your ventilation solutions.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}







navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' }, // هينزل لسكشن الـ About اللي عملناه
  { label: 'Products', href: '#products' },
  { label: 'Major Clients', href: '#clients' },
  { label: 'Contact Us', href: '#contact' },

];
  // Clients / partners list
  clients = [
    'Nicotra Gebhardt',
    'Rosenberg',
    'TROX GmbH',
    'Systemair',
    'El Sewedy',
    'Orascom Construction'
  ];

  // Extra products
  extraProducts = [
    { title: 'Silencers & Attenuators', specs: 'Acoustic solutions for low noise emission' },
    { title: 'Fire & Smoke Dampers', specs: 'BS EN 1366-2 certified, safety first' },
    { title: 'Diffusers & Louvers', specs: 'Precision air distribution & architectural grilles' }
  ];

  // Certifications data
 certifications = [
  { 
    label: 'AMCA Certified', 
    value: 'Air & Sound', 
    sub: 'Certified for Sound, Air Performance and FEG by AMCA International.' 
  },
  { 
    label: 'High Temp Class', 
    value: 'F400 120', 
    sub: 'Certified to withstand 400°C for 120 minutes as per EN 12101-3.' 
  },
  { 
    label: 'TÜV NORD', 
    value: 'Compliance', 
    sub: 'Axial Fans ADTA-F series complies with BS EN 12101-3:2015.' 
  },
  { 
    label: 'BSRIA Tested', 
    value: '250°C / 2 Hrs', 
    sub: 'Smoke extract fans tested for high temperature performance.' 
  }
];

  // Authorization letters
 authorizations = [
  {
    title: 'Nicotra Gebhardt Official Partner',
    date: 'Since 2017',
    body: 'Authorized distributor and partner for high-performance German ventilation systems including Axial, Jet, and Centrifugal fans.',
    source: 'Nicotra Gebhardt GmbH'
  },
  {
    title: 'Smoke Management Experts',
    date: '2024 Updated',
    body: 'Specialized in axial and centrifugal smoke extract fans (F200, F300, F400) compliant with international safety standards.',
    source: 'iBMB MPA Certified'
  }
];
majorClients = [
  { name: 'Orascom', logo: './images/orascom.png' },
  { name: 'Egypt Post', logo: './images/post.png' },
  { name: 'Carrefour', logo: './images/carrefour.png' },
  { name: 'Farm Frites', logo: './images/farm.png' },
  { name: 'GUC', logo: './images/guc.png' },
  { name: 'El Soadaa', logo: './images/1630570399540-removebg-preview.png' },
  { name: 'Minstry of communication', logo: './images/20231126120517_وزارة_الاتصالات_وتكنولوجيا_المعلومات-removebg-preview.png' },
  { name: 'EL Hayaa El Handasya', logo: './images/الهيئة_الهندسية-removebg-preview.png' }
];

  // Contact details
  contacts = [
    { icon: 'call', label: 'Phone', value: '02 27752807<br/>012 8534 3418' },
    { icon: 'mail', label: 'Email', value: 'info@egyduct.com<br/>tender@egyduct.com' },
    { icon: 'location_on', label: 'Address', value: '16th Al Khartoum St., Masr Al Gadida, Cairo<br/>Industrial Zone, Qalyubia – Cairo' }
  ];

  // Quick links for footer
  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Certifications', href: '#technical' },
    { label: 'Contact', href: '#contact' }
  ];

 
  currentYear = new Date().getFullYear();


 products = [
  // ───────────── AXIAL FANS ─────────────
  {
    name: 'Axial Fan (Wall Mounted)',
    series: 'Axial Fans',
    category: 'Axial Fans',
    image: './productImages/1.png',
    specs: ['Wall Mounted', 'High Airflow'],
    description: 'Wall mounted axial fan solutions for commercial and industrial ventilation.'
  },
  {
    name: 'Circular inline',
    series: 'Axial Fans',
    category: 'Axial Fans',
    image: './productImages/cam.png',
    specs: ['Circular Inline', 'Compact Design'],
    description: 'Circular inline axial fans for duct-integrated ventilation systems.'
  },
   {
    name: 'Short/Long Casing',
    series: 'Axial Fans',
    category: 'Axial Fans',
    image: './productImages/5.png',
    specs: ['Backward Blades', 'High Efficiency'],
    description: 'Backward-blade centrifugal fans offering high static efficiency for demanding applications.'
  },

  // ───────────── CENTRIFUGAL FANS ─────────────
  
 
  {
    name: 'Centrifugal Fan – Single Inlet Single Width (SISW)',
    series: 'Single Inlet Single Width',
    category: 'Centrifugal Fans',
    image: './productImages/6.png',
    specs: ['Single Inlet', 'Single Width (SISW)'],
    description: 'Single inlet single width centrifugal fans for space-efficient ducted systems.'
  },
  {
    name: 'Double inlet Double Width ',
    series: 'Centrifugal Fans',
    category: 'Centrifugal Fans',
    image: './productImages/2.png',
    specs: ['Circular Inline', 'Compact Design'],
    description: 'Circular inline axial fans for duct-integrated ventilation systems.'
  },
  {
    name: 'Single inlet single Width (SISW)',
    series: 'Centrifugal Fans',
    category: 'Centrifugal Fans',
    image: './productImages/Picture6.png',
    specs: ['Circular Inline', 'Compact Design'],
    description: 'Circular inline axial fans for duct-integrated ventilation systems.'
  },

  // ───────────── FAN SECTIONS ─────────────
  {
    name: 'Fan Sections',
    series: 'Centrifugal Fans',
    category: 'Fan Sections',
    image: './productImages/7.png',
    specs: ['Modular Design', 'Custom Configurations'],
    description: 'Modular fan sections for integration into air handling units and HVAC systems.'
  },

  // ───────────── JET FANS ─────────────
  {
    name: 'Jet Fans',
    series: 'Jet Fans',
    category: 'Jet Fans',
    image: './productImages/8.png',
    specs: ['High Velocity', 'Tunnel Ventilation'],
    description: 'Jet fans designed for car parks, tunnels, and large open-space ventilation.'
  },

  // ───────────── SMOKE EXTRACTION FANS ─────────────
  
  {
    name: 'Axial inline (300°/400°)',
    series: 'Axial Inline',
    category: 'Smoke Extraction Fans',
    image: './productImages/5.png',
    specs: ['400°C Rated', 'Axial Inline', 'EN 12101-3'],
    description: 'High-temperature axial inline smoke extract fan rated for 400°C continuous operation.'
  },
  {
    name: 'Smoke Extraction Fan – Centrifugal Fire-Rated (Direct Driven)',
    series: 'Centrifugal Fire-Rated',
    category: 'Smoke Extraction Fans',
    image: './productImages/6.png',
    specs: ['Direct Driven', 'Fire Rated', 'EN 12101-3'],
    description: 'Direct driven centrifugal fire-rated smoke extraction fan for high-rise and industrial buildings.'
  },
  {
    name: 'Smoke Extraction Fan – Centrifugal Fire-Rated (Belt Driven)',
    series: 'Centrifugal Fire-Rated',
    category: 'Smoke Extraction Fans',
    image: './productImages/Picture7.png',
    specs: ['Belt Driven', 'Fire Rated', 'EN 12101-3'],
    description: 'Belt driven centrifugal fire-rated smoke extraction fan offering flexible speed adjustment.'
  },

  // ───────────── ROOFTOP EXTRACTION ─────────────
  
  {
    name: 'Rooftop Extraction Fan',
    series: 'Rooftop Extraction',
    category: 'Rooftop Extraction',
    image: './productImages/3.png',
    specs: ['Short Casing', 'Long Casing'],
    description: 'Available in short and long casing configurations for flexible installation.'
  },
  

  // ───────────── CLEANROOM SOLUTIONS ─────────────
  
  {
    name: 'Pharmaceutical',
    series: 'Cleanroom Solutions',
    category: 'Cleanroom Solutions',
    image: './productImages/15.png',
    specs: ['GMP Compliant', 'Pharmaceutical Grade'],
    description: 'Pharmaceutical-grade cleanroom ventilation systems meeting strict GMP requirements.'
  },
  {
    name: 'Food and Beverage',
    series: 'Cleanroom Solutions',
    category: 'Cleanroom Solutions',
    image: './productImages/4.png',
    specs: ['Forward Blades', 'Double Inlet Double Width (DIDW)'],
    description: 'High-capacity forward-blade centrifugal fans with double inlet double width design.'
  },
  
  

  // ───────────── ATEX FANS ─────────────
  {
    name: 'ATEX Certified Fan',
    series: 'ATEX Approved',
    category: 'ATEX Fans',
    image: './productImages/17.png',
    specs: ['ATEX Approved', 'Gas & Dust Environments', 'Ex-rated'],
    description: 'ATEX approved and certified fans engineered for safe operation in explosive gas and dusty environments.'
  },
];

get filteredProducts() {
  if (this.selectedCategory === 'All') return this.products;
  return this.products.filter(p => p.category === this.selectedCategory);
}

setCategory(cat: string) {
  this.selectedCategory = cat;
}



}
