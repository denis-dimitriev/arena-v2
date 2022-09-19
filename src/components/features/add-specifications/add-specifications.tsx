import { CategoryType } from '../../../types/general';

interface AddSpecificationsProps {
  category: CategoryType | string | null;
}

export const AddSpecifications = ({ category }: AddSpecificationsProps) => {
  switch (category) {
    case 'Велосипеды':
      return <h1>{category}</h1>;
    case 'Электровелосипеды':
      return <h1>{category}</h1>;
    case 'Электросамокаты':
      return <h1>{category}</h1>;
    case 'Аксессуары':
      return <h1>{category}</h1>;
    default:
      return <p>Не выбран ни один из разделов</p>;
  }
};
