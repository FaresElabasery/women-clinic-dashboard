export interface Review {
  _id: string;
  review: string;
  rating: number;
  user: User;
  service: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface User {
  _id: string;
  name: string;
}
