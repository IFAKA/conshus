export interface IDay {
  date: Date;
  systems: ISystem[];
}

export interface ISystem {
  text: string;
  times: number;
}
