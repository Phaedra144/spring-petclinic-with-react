import { Pet } from "src/types/pet";

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Owner extends Person {
  id: number;
  address: string;
  city: string;
  pets: Pet[];
}