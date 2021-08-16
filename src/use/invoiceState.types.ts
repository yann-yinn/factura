export interface State {
  lines: Line[];
}

export interface Totals {
  HT: number;
  TVA: number;
  TTC: number;
}

export interface Line {
  description: string;
  quantity: number;
  amount: number;
  unit: string;
  tva: number;
}

export interface LineUpdate {
  description?: string;
  quantity?: number;
  amount?: number;
  unit?: string;
  tva?: number;
}
