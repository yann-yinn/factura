<template>
  <div class="mt-5">
    <table class="table-fixed w-full">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 w-3/4">Description</th>
          <th class="py-3 px-6">Prix unitaire</th>
          <th class="py-3 px-6">unité</th>
          <th class="py-3 px-6">quantité</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <InvoiceRow />
        <InvoiceRow />
        <InvoiceRow />
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
