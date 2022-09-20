import { ColorsTypes, IMotor } from './general';

export type EScooterBrands =
  | 'Xiaomi'
  | 'Ninebot'
  | 'Kugoo'
  | 'Yamato'
  | 'Minimotors'
  | 'Halten'
  | 'iconBIT'
  | 'Ultron'
  | 'Razor'
  | 'Joyor'
  | 'Другой`';

export interface IEScooter extends IMotor {
  brand: EScooterBrands;
  weight: string;
  color: ColorsTypes;
}
