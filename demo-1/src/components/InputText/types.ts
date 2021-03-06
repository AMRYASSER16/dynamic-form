export type types = {
  label?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  errorMsg: string;
  valid: boolean;
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};