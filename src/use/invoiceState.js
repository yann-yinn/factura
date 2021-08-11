import { computed, reactive } from "vue";

const state = reactive({
  lines: [defaultLine(), defaultLine()],
});

function defaultLine() {
  return {
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
    state.lines.forEach((line) => {
      const lineAmount = parseFloat(line.amount) * parseFloat(line.quantity);
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
