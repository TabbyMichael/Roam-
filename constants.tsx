
import React from 'react';
import { Product, Metric, NavItem } from './types';

export const BRAND_COLORS = {
  primary: '#FF5C00', // Roam's signature electric orange
  secondary: '#0F0F0F',
  accent: '#1F1F1F',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Products', href: '#/products' }, // Handled as a dropdown in Navbar
  { label: 'Solutions', href: '#/' }, // Points to Home where Solutions section lives
  { label: 'Impact', href: '#/impact' },
  { label: 'About', href: '#/about' },
  { label: 'Careers', href: '#/careers' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'roam-air',
    name: 'Roam Air',
    category: 'Motorcycles',
    description: 'The electric motorcycle designed for the African continent. Robust, efficient, and cost-effective.',
    image: 'https://picsum.photos/id/10/800/600',
    features: ['Dual Battery System', '75km Range per Battery', 'High Payload Capacity'],
    specs: {
      'Top Speed': '90 km/h',
      'Payload': '220 kg',
      'Torque': '185 Nm'
    }
  },
  {
    id: 'roam-rapid',
    name: 'Roam Rapid',
    category: 'Buses',
    description: 'High-capacity mass transit solution for modern African cities. Zero emissions, maximum comfort.',
    image: 'https://picsum.photos/id/11/800/600',
    features: ['90 Passenger Capacity', 'Fast Charging', 'Low Maintenance'],
    specs: {
      'Range': '360 km',
      'Battery': '384 kWh',
      'Seats': '45+ Standing'
    }
  },
  {
    id: 'roam-hub',
    name: 'Roam Hub',
    category: 'Energy',
    description: 'Advanced charging infrastructure to keep your fleet moving 24/7.',
    image: 'https://picsum.photos/id/12/800/600',
    features: ['Battery Swapping', 'Cloud Monitoring', 'Modular Design'],
    specs: {
      'Uptime': '99.9%',
      'Connectivity': '4G/IoT',
      'Safety': 'IP67 Rated'
    }
  }
];

export const IMPACT_METRICS: Metric[] = [
  { label: 'Clean KM Driven', value: 15000000, suffix: '+', description: 'Driving the future of sustainable transport.' },
  { label: 'CO2 Saved', value: 2500, suffix: ' Tons', description: 'Equivalent to planting 40,000 trees.' },
  { label: 'Jobs Created', value: 200, suffix: '+', description: 'Empowering local communities in Kenya.' },
];
