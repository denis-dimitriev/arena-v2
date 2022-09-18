import { ConditionType } from './general';

export type Parts =
  | 'Покрышки и Камеры'
  | 'Колеса'
  | 'Амортизаторы и Вилки'
  | 'Переключатели'
  | 'Седла'
  | 'Тормоза'
  | 'Рули и выносы'
  | 'Звезды, шатуны и цепи'
  | 'Педали'
  | 'Рамы'
  | 'Другое';

export type AccessoriesTypes =
  | 'Шлемы, защита, очки'
  | 'Фонари'
  | 'Сумки и багажники'
  | 'Инструменты и смазки'
  | 'Замки и сигнализации'
  | 'Компьютеры и GPS'
  | 'Детские велокресла'
  | 'Другое';

export interface IAccessories {
  parts: Parts;
  accessoriesType: AccessoriesTypes;
  condition: ConditionType;
}
