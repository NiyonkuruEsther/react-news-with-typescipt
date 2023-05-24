export type Item = {
  readonly id: number;
  name: string;
  icon: JSX.Element;
  color: String;
};

export interface StateType {
  status: string;
  error: null;
}
