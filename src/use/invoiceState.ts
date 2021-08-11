import { computed, reactive } from "vue";

const state = reactive({
  lines: [defaultLine(), defaultLine()],
});

interface Line {
  description: string;
  quantity: number;
  amount: number;
  unit: string;
  tva: number;
}

function defaultLine(): Line {
  return {
    description: "",
    quantity: 1,
    amount: 500,
    unit: "jour",
    tva: 0,
  };
}

export default function useInvoiceState() {
  function updateLine(id, update) {
    state.lines[id] = {
      ...state.lines[id],
      ...update,
    };
  }

  const totals = computed(() => {
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

  return {
    invoiceState: { ...state },
    updateLine,
    totals,
  };
}
