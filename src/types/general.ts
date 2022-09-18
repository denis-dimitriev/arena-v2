export type Region =
  | 'Кишинёв мун.'
  | 'Бельцы мун.'
  | 'Тирасполь мун'
  | 'Кагул'
  | 'Комрат'
  | 'Тараклия'
  | 'Чимишлия'
  | 'Дрокия'
  | 'Унгены'
  | 'Другое';

export type ColorsTypes =
  | 'Бежевый'
  | 'Белый'
  | 'Бордовый'
  | 'Голубой'
  | 'Желтый'
  | 'Зелёный'
  | 'Золотой'
  | 'Коричневый'
  | 'Красный'
  | 'Малины'
  | 'Оранжевый'
  | 'Розовый'
  | 'Салатовый'
  | 'Серебряный'
  | 'Серый'
  | 'Синий'
  | 'Тёмно-зелёный'
  | 'Фиолетовый'
  | 'Хамелеон'
  | 'Черный'
  | 'Другое';

export type ConditionType = 'На запчасти' | 'Б/у' | 'Новый';

export type CurrencyType = 'лей' | 'eur' | 'usd';

export type Rating = {
  rating: '1' | '2' | '3' | '4' | '5';
};

export interface IMotor {
  maxSpeed?: string; // rm per hour
  MotorPower?: string; // 350watt
  distancePerCharge?: string;
  batteryCapacity?: string; // 10A
  rechargingTime?: string;
}
