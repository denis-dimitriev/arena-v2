import { Form } from 'react-bootstrap';
import { HTMLProps } from 'react';

interface CustomSelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  options: Array<string>;
  required?: boolean;
  onChange?: () => void;
}

export const CustomSelect = ({ label, options, onChange, required }: CustomSelectProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-semibold"> {label} </Form.Label>
      <Form.Select aria-label="Default select example" onChange={onChange} required={required}>
        <option>Выберите</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};
