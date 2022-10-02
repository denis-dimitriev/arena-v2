import { ReactNode } from 'react';

interface TitleTagProps {
  children: ReactNode;
  font?: 'bold' | 'medium';
}

export const TitleTag = ({ children, font = 'bold' }: TitleTagProps) => {
  return <h3 className={`${font} text-start mt-5 mb-5`}>{children}</h3>;
};
