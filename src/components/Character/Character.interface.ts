import { Interface } from "readline";

export interface ICharacter{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
  openModal: (data:number)=> void;
  closeModal: ()=> void;
}

export interface IOrigin{
  name: string;
  url: string
}
export interface ILocation{
  name: string;
  url: string
}
