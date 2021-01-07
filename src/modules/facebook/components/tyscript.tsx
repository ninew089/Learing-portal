export interface facebookProps {
  loading: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  error: boolean;
  data: object;
}
