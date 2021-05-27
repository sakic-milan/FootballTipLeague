import React, {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";

import styles from "./styles.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  placeholder?: string;
  name?: string;
  onChange?: (event: ChangeEvent) => void;
}

const InputField: FunctionComponent<InputFieldProps> = () => {
  return (
    <div className={styles.inputFieldWrapper}>
      <label className={styles.label}>Home team</label>
      <input className={styles.inputField} />
      <span className={styles.errorMessage}></span>
    </div>
  );
};

export default InputField;
