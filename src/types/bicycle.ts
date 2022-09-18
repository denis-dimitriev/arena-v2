import { ColorsTypes, ConditionType, IMotor } from './general';

export type BicycleBrands =
  | 'AIST'
  | 'Author'
  | 'Azimut'
  | 'Bergamont'
  | 'Canyon'
  | 'Cannondale'
  | 'Cube'
  | 'Focus'
  | 'Giant'
  | 'Haibike'
  | 'Kona'
  | 'Kross'
  | 'Marin'
  | 'Merida'
  | 'Scott'
  | 'Santa Cruz'
  | 'Specialized'
  | 'TREK'
  | 'Десна'
  | 'Другое';

export type BicycleTypes =
  | 'Горный'
  | 'Шоссейный'
  | 'Туристический'
  | 'Гибрид'
  | 'Городской'
  | 'BMX'
  | 'Складной'
  | 'Детский'
  | 'Другое';

export type FrameSizes =
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24';

export type WheelSizes =
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '27.5'
  | '28'
  | '29'
  | 'Другое';

export type BicycleOptions = 'Женский' | 'Мужской' | 'Универсальный';
export type Materials = 'Алюминий' | 'Магний' | 'Сталь' | 'Карбон' | 'Другое';
export type BicycleBrakes = 'Барабанный' | 'Дисковый' | 'Ободной';
export type BicycleSuspension = 'Передний' | 'Двухподвес' | 'Нет';
export type BicycleComponents = 'Shimano' | 'Sram' | 'Campagnolo' | 'Другой';

export interface IBicycle {
  brand: BicycleBrands;
  options?: BicycleOptions;
  bicycleType?: BicycleTypes;
  frameSize?: FrameSizes;
  wheelSize?: WheelSizes;
  frameMaterial?: Materials;
  brakes?: BicycleBrakes;
  suspension?: BicycleSuspension;
  components?: BicycleComponents;
  color?: ColorsTypes;
  condition: ConditionType;
  weight?: string;
}
