type Days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
export interface ISystem {
  days: Days[];
  text: string;
}
