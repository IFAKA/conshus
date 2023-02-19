type Days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
export interface IFlowAction {
  days: Days[];
  text: string;
}
