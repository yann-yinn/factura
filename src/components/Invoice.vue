<template>
  <div class="mt-10 container max-w-screen-lg mx-auto">
    <h1 class="text-5xl text-gray-800 mb-5">Devis</h1>
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
        <InvoiceRow :id="1" />
        <InvoiceRow :id="2" />
        <InvoiceRow :id="3" />
      </tbody>
    </table>
  </div>
</template>

<script>
import InvoiceRow from "@/components/InvoiceRow";
export default {
  components: { InvoiceRow },
};
</script>
