import { computed, reactive } from "vue";
import { State, Line, Totals, LineUpdate } from "./invoiceState.types";

function defaultLine(): Line {
  return {
    description: "",
    quantity: 1,
    amount: 500,
    unit: "jour",
    tva: 0,
  };
}

const state: State = reactive({
  lines: [defaultLine(), defaultLine()],
});

function updateLine(id: number, update: LineUpdate): void {
  state.lines[id] = {
    ...state.lines[id],
    ...update,
  };
}

const totals = computed((): Totals => {
  let totalHT = 0;
  let totalTVA = 0;
  let totalTTC = 0;
  state.lines.forEach((line: Line) => {
    const lineAmount: number = line.amount * line.quantity;
    const lineTVA = lineAmount * (line.tva / 100);
    totalHT += lineAmount;
    totalTVA += lineTVA;
  });
  totalTTC = totalHT + totalTVA;
  return { HT: totalHT, TVA: totalTVA, TTC: totalTTC };
});

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function useInvoiceState() {
  return {
    invoiceState: state,
    updateLine,
    totals,
  };
}
