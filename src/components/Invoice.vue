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
      </tbody>
    </table>

    <div class="flex justify-end">
      <table class="">
        <tbody>
          <tr>
            <td class="py-3 px-6 border-b text-right">Total HT</td>
            <td class="py-3 px-6 border-b text-right">{{ totals.HT }}</td>
          </tr>
          <tr>
            <td class="py-3 px-6 border-b text-right">TVA</td>
            <td class="py-3 px-6 border-b text-right">{{ totals.TVA }}</td>
          </tr>
          <tr>
            <td class="py-3 px-6 text-2xl text-right">Total TTC</td>
            <td class="py-3 px-6 text-2xl text-right">
              <strong>{{ totals.TTC }}€</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end mt-5">
      <AppButton @click="onSaveClick" color="indigo"> Sauvegarder </AppButton>
    </div>
  </div>
</template>

<script>
import InvoiceLine from "@/components/InvoiceLine";
import useInvoiceState from "@/use/invoiceState";
import AppButton from "@/components/AppButton";

export default {
  components: { InvoiceLine, AppButton },
  setup() {
    const { invoiceState, totals } = useInvoiceState();
    function onSaveClick() {
      alert(
        JSON.stringify({
          invoiceState,
          totals: {
            HT: totals.value.HT,
            TVA: totals.value.TVA,
            TTC: totals.value.TTC,
          },
        })
      );
    }
    return { invoiceState, totals, onSaveClick };
  },
};
</script>
