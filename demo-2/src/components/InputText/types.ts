export type types = {
  key?: number,
  label?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  errorMsg: string;
  valid?: boolean;
  classes?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};