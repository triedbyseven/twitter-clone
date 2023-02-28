export interface PrimaryProps {
  ['data-testid']?: string;
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};