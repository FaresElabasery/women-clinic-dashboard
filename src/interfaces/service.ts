import type { Review } from "./Review";

export interface Service {
  _id: string;
  name: string;
  description: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
  review?: Review[];
  options: Option[];
  id: string;
  __v?: number
}

export interface Option {
  _id: string;
  service: string;
  optionName: string;
  price: number;
  type: string;
  notes: string;
  stock: null | number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
