import { CategoryType, CurrencyType, Region } from './general';
import { IBicycle } from './bicycle';
import { IEBicycleSpecs } from './e-bicycles';
import { IEScooter } from './e-scooters';
import { IAccessories } from './accessories';

export interface IAdvertisement {
  id: number;
  authorId: number;
  title: string;
  category: CategoryType;
  description: string;
  region: Region;
  createdAt: Date;
  updatedAt: Date;
  offer: 'Продам' | 'Куплю';
  images: string[];
  price: number | 'договорная';
  currency?: CurrencyType;
  contact: string;
  state: 'off' | 'visible' | 'hidden';
  isFavorite: boolean;
}

export interface IBicycleAdvertisement extends IAdvertisement, IBicycle {}

export interface IEBicycleAdvertisement extends IAdvertisement, IEBicycleSpecs {}

export interface IEScootersAdvertisement extends IAdvertisement, IEScooter {}

export interface IAccessoriesAdvertisement extends IAdvertisement, IAccessories {}
