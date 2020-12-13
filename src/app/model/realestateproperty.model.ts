import {IRealEstatePropertyFacility} from "./realestatepropertyfacility.model";

export interface IRealEstateProperty
{
  id: string
  name: string
  price: string
  imageUrl?: string
  builtUpArea: string
  carpetArea: string
  configuration: string
  facing?: string
  age: string
  type: string
  location: {
    address: string
    city: string
    country: string
  }
  facilities: IRealEstatePropertyFacility[]
}
