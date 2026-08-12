export interface NavItem {
  label: string;
  href: string;
  type: 'route' | 'anchor';
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', type: 'route' },
  { label: 'Projects', href: '/projects', type: 'route' },
  { label: 'About', href: '/#about', type: 'anchor' },
  { label: 'Experience', href: '/#experience', type: 'anchor' },
  { label: 'Education', href: '/#education', type: 'anchor' },
  { label: 'Contact', href: '/#footer', type: 'anchor' },
];

export const ANCHOR_SECTION_IDS = ['about', 'experience', 'education', 'footer'];
