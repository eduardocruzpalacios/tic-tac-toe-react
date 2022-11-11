export interface InputTextProps {
  name: string,
  value?: string;
  action: React.ChangeEventHandler<HTMLInputElement>;
  length: number;
}
