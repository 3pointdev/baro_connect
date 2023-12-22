import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  value: string;
  onChange: ChangeEventHandler;
  placeholder: string;
  id: string;
  label: string;
  valid: string;
  validMessage: string;
  type: HTMLInputTypeAttribute;
}

export interface CheckBoxProps {
  checked: boolean;
  onChange: ChangeEventHandler;
  id: string;
  label: string;
}
