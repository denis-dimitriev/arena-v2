import { HTMLProps } from 'react';

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, onChange }: CheckboxProps) => {
  return (
    <span className="form-check">
      <input id="custom" className="form-check-input" type="checkbox" onChange={onChange} />
      <label className="form-check-label" htmlFor="custom">
        {label}
      </label>
    </span>
  );
};
