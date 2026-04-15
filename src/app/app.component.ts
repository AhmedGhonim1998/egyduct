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


  products: any[] = [
  {
    name: 'Axial Fan',
    series: 'ABE',
    image: './productImages/1.png',
    description: 'High-performance airflow. Certified for Sound & Air performance by AMCA.'
  },
  {
    name: 'Centrifugal Fans',
    series: 'AFK / AFQ',
     image: './productImages/2.png',
    description: 'Safety-critical: Certified 400°C for 120 minutes (BS EN 12101-3).'
  },
  {
    name: 'Rooftop Extraction',
    series: 'RDM 56/57',
     image: './productImages/3.png',
    description: 'Specialized for Car Parks and Tunnels with high thrust performance.'
  },
  {
    name: 'Cleanrooms Solutions for',
    series: 'REM BU',
     image: './productImages/4.png',
    description: 'Volume flow up to 125,000 m³/h with low noise enclosure.'
  },
  {
    name: 'Axial inline (300°/400°)',
    series: 'Smoke Extract Fan RDM 56/57',
     image: './productImages/5.png',
    description: 'Weather-proof vertical and horizontal discharge units.'
  },
  {
    name: 'Centrifugal Fire-rated (Direct Driven / Belt Driven)',
    series: 'Smoke Extract Fan RER 13/17 400 C',
     image: './productImages/6.png',
    description: 'High pressure up to 8,000 Pa for industrial manufacturing.'
  },
  {
    name: 'Smoke Extract Fan',
    series: 'CP-s',
    image: './productImages/7.png',
    description: 'High-efficiency fans with aerofoil blades for HVAC systems.'
  }
];



}
