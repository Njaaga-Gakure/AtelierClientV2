import { type ChangeEvent, type FC } from "react";
import styled from "styled-components";

type FormSelectProps = {
  name: string;
  label: string;
  options: string[];
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
const FormSelectRow: FC<FormSelectProps> = ({
  name,
  label,
  options,
  value,
  handleChange,
}) => {
  return (
    <Wrapper className="form__row">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="form__select"
        onChange={handleChange}
        value={value}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default FormSelectRow;

const Wrapper = styled.div`
  .form__label {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing-1);
    font-size: 0.8rem;
    text-transform: capitalize;
  }
  .form__select {
    margin-top: 0.25rem;
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius-2);
    background: transparent;
    border: 1px solid var(--black);
    outline-color: var(--primary-500);
  }
`;
