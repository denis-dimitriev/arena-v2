import { Form } from 'react-bootstrap';
import { HTMLProps } from 'react';

interface CustomInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export const CustomInputText = ({
  label,
  onChange,
  ref,
  placeholder,
  required,
  maxLength,
  className,
  disabled
}: CustomInputProps) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-semibold">{label}</Form.Label>
      <input
        type="text"
        className={`form-control ${className}`}
        ref={ref}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
      />
    </Form.Group>
  );
};
