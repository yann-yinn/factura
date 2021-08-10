<template>
  <div class="mt-10 container max-w-screen-md mx-auto">
    <h1 class="text-5xl text-gray-700 mb-5">Devis</h1>
    <table class="table-fixed text-left max-w-max">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 w-1/2">Désignation</th>
          <th class="py-3 px-6">Prix unitaire</th>
          <th class="py-3 px-6">Quantité</th>
          <th class="py-3 px-6">Unité</th>
          <th class="py-3 px-6">Montant HT</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <InvoiceLine :id="1" @inputsChange="inputsChange" />
        <InvoiceLine :id="2" @inputsChange="inputsChange" />
        <InvoiceLine :id="3" @inputsChange="inputsChange" />
        <tr>
          <td colspan="3"></td>
          <td class="py-3 px-6">Total</td>
          <td class="py-3 px-6">xxx</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive } from "vue";
import InvoiceLine from "@/components/InvoiceLine";
export default {
  components: { InvoiceLine },
  setup() {
    const invoiceState = reactive({
      lines: [],
      metaLines: [],
    });
    function inputsChange({ lineId, values }) {
      // console.log("invoice: lineId ${lineId } changed: ", { lineId, values });
      const existingLine = invoiceState.lines.filter((v) => {
        console.log("v", v);
        return v.lineId == lineId;
      });

      console.log("existingLine", existingLine);
      if (existingLine.length > 0) {
        invoiceState.lines.push({ lineId, values });
      }
    }
    return { inputsChange, invoiceState };
  },
};
</script>
