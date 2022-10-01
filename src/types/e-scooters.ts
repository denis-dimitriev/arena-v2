import { ColorsTypes, ConditionType, IMotor } from './general';

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
  condition: ConditionType;
  weight?: string;
  color?: ColorsTypes;
}
