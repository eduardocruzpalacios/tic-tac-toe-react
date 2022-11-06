export interface TokenInputProps {
  name: string,
  value?: string;
  action: React.ChangeEventHandler<HTMLInputElement>;
  length: number;
}
