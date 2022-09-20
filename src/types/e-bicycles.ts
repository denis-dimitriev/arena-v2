import { ColorsTypes, ConditionType, IMotor } from './general';
import {
  BicycleBrakes,
  BicycleComponents,
  BicycleOptions,
  BicycleSuspension,
  BicycleTypes,
  FrameSizes,
  FrameMaterials,
  WheelSizes
} from './bicycle';

export type EBicycleBrands =
  | 'Ancheer'
  | 'Aventon'
  | 'Bakcou'
  | 'BUZZ Bikes'
  | 'Engwe eBikes'
  | 'EVELO'
  | 'Gazelle'
  | 'HaiBike'
  | 'Himiway'
  | 'Juiced Bikes'
  | 'Lectric'
  | 'Pedego Electric Bikes'
  | 'Rambo Bikes'
  | 'Ride1UP Bikes'
  | 'Rad Power Bikes'
  | 'QuietKat Bikes'
  | 'VVolt'
  | 'Wing Bikes'
  | 'Другой';

export interface IEBicycleSpecs extends IMotor {
  brand: EBicycleBrands;
  options?: BicycleOptions;
  bicycleType?: BicycleTypes;
  frameSize?: FrameSizes;
  wheelSize?: WheelSizes;
  frameMaterial?: FrameMaterials;
  brakes?: BicycleBrakes;
  suspension?: BicycleSuspension;
  components?: BicycleComponents;
  color?: ColorsTypes;
  condition: ConditionType;
  weight?: string;
}
