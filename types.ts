
export interface Product {
  id: string;
  name: string;
  category: 'Motorcycles' | 'Buses' | 'Energy';
  description: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
