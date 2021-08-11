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

  const totalHT = computed(() => {
    const result = state.lines.reduce((accumulator, line) => {
      return accumulator + parseFloat(line.amount) * parseFloat(line.quantity);
    }, 0);
    return result;
  });

  const totalTVA = computed(() => {
    const result = state.lines.reduce((accumulator, line) => {
      const totalLine = parseFloat(line.amount) * parseFloat(line.quantity);
      const tva = totalLine * (line.tva / 100);
      return accumulator + tva;
    }, 0);
    console.log("result");
    return result;
  });

  const totalTTC = computed(() => {
    return totalHT.value + totalTVA.value;
  });

  return {
    invoiceState: { ...state },
    updateLine,
    totalHT,
    totalTVA,
    totalTTC,
  };
}
