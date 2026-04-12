export interface CoreValue {
  name: string;
  description: string;
}

export interface CoreValuesData {
  values: {
    [key: string]: CoreValue;
  };
}
