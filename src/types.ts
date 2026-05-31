import { ElementType } from 'react';

export interface Facility {
  id: string;
  name: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}
