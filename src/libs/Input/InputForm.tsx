import type { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputTypeProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  isRequired?: boolean;
  formik?: {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    values: {
      [field: string]: string | undefined;
    };
    errors: {
      [field: string]: string | undefined;
    };
    touched: {
      [field: string]: boolean | undefined;
    };
  };
}

function InputForm({ id, type, label, className, isRequired, formik, ...props }: InputTypeProps) {
  const { container, labelInput, contentInput, textError } = styles;
  const error = formik?.touched[id] && formik?.errors[id];
  const errorMessage = formik?.errors[id];

  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={contentInput}>
        <input
          {...props}
          id={id}
          type={type}
          className={className}
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values[id]}
        />
      </div>

      {error && <span className={textError}>{errorMessage}</span>}
    </div>
  );
}

export default InputForm;
