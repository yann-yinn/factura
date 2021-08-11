<template>
  <div class="mt-10 container max-w-screen-lg mx-auto">
    <h1 class="text-5xl text-gray-700 mb-5">Devis</h1>
    <table class="table-fixed text-left max-w-max">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-1 px-6 w-1/2">Désignation</th>
          <th class="py-1 px-6">Prix unitaire</th>
          <th class="py-1 px-6">Quantité</th>
          <th class="py-1 px-6">Unité</th>
          <th class="py-1 px-6">TVA</th>
          <th class="py-1 px-6">Montant HT</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <InvoiceLine
          v-for="(line, i) in invoiceState.lines"
          :line="line"
          :id="i"
          :key="i"
        />

        <tr>
          <td class="py-3 px-2" colspan="4"></td>
          <td class="py-6 px-6 border-b">Total HT</td>
          <td class="py-6 px-6 border-b">
            <strong>{{ totalHT }} €</strong>
          </td>
        </tr>
        <tr>
          <td class="py-3 px-2" colspan="4"></td>
          <td class="py-6 px-6 border-b">TVA</td>
          <td class="py-6 px-6 border-b">
            <strong>{{ totalTVA }} €</strong>
          </td>
        </tr>
        <tr>
          <td class="py-3 px-2" colspan="4"></td>
          <td class="py-6 px-6 text-xl">Total TTC</td>
          <td class="py-6 px-6 text-xl">
            <strong>{{ totalTTC }} €</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import InvoiceLine from "@/components/InvoiceLine";
import useInvoiceState from "@/use/invoiceState";
export default {
  components: { InvoiceLine },
  setup() {
    const { invoiceState, totalHT, totalTVA, totalTTC } = useInvoiceState();
    return { invoiceState, totalHT, totalTVA, totalTTC };
  },
};
</script>
