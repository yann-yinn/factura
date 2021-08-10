import { computed, reactive } from "vue";

function defaultLine() {
  return {
    quantity: 1,
    amount: 500,
    unit: "jour",
  };
}

const state = reactive({
  lines: [defaultLine(), defaultLine()],
});

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

  return { invoiceState: { ...state }, updateLine, totalHT };
}
