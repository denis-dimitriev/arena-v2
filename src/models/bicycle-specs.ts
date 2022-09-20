import {
  BicycleBrakes,
  BicycleBrands,
  BicycleComponents,
  BicycleOptions,
  BicycleSuspension,
  BicycleTypes,
  FrameMaterials,
  FrameSizes,
  WheelSizes
} from '../types/bicycle';
import { ColorsTypes, ConditionType } from '../types/general';

export const bicycleTypes: BicycleTypes[] = [
  'Горный',
  'Шоссейный',
  'Туристический',
  'Гибрид',
  'Городской',
  'BMX',
  'Складной',
  'Детский',
  'Фэтбайк',
  'Другое'
];

export const bicycleBrands: BicycleBrands[] = [
  'AIST',
  'Author',
  'Azimut',
  'Bergamont',
  'Canyon',
  'Cannondale',
  'Cube',
  'Focus',
  'Giant',
  'Haibike',
  'Kona',
  'Kross',
  'Marin',
  'Merida',
  'Scott',
  'Santa Cruz',
  'Specialized',
  'TREK',
  'Десна',
  'Другое'
];

export const frameMaterials: FrameMaterials[] = ['Алюминий', 'Магний', 'Сталь', 'Карбон', 'Другой'];

export const frameSizes: FrameSizes[] = [
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24'
];

export const wheelSizes: WheelSizes[] = [
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '27.5',
  '28',
  '29',
  'Другое'
];

export const brakes: BicycleBrakes[] = ['Барабанный', 'Дисковый', 'Ободной', 'Другой'];
export const suspension: BicycleSuspension[] = ['Передний', 'Двухподвес', 'Нет'];
export const components: BicycleComponents[] = ['Shimano', 'Sram', 'Campagnolo', 'Другой'];
export const options: BicycleOptions[] = ['Женский', 'Мужской', 'Универсальный'];
