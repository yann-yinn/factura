<template>
  <tr class="hover:bg-gray-100 border-b">
    <td class="py-4 px-6 text-left">
      <div :id="editorId" class="prose whitespace-wrap bg-white"></div>
    </td>

    <td class="npy-3 px-6 text-left">
      <input
        type="number"
        name="amount"
        style="width: 100px"
        class="py-3 px-2"
        :value="line.amount"
        @input="handleInput"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="number"
        style="width: 100px"
        class="py-3 px-2"
        name="quantity"
        :value="line.quantity"
        @input="handleInput"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="text"
        style="width: 100px"
        class="py-3 px-2"
        :value="line.unit"
        name="unit"
        @input="handleInput"
      />
    </td>

    <td class="py-3 px-6 text-left">{{ totalHT }} €</td>
  </tr>
</template>

<script>
import { computed } from "vue";
import useCkEditor from "@/use/ckEditor";
import useInvoiceState from "@/use/invoiceState";

export default {
  props: ["id", "line"],
  setup(props) {
    const totalHT = computed(() => props.line.quantity * props.line.amount);
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value);
    const { invoiceState, updateLine } = useInvoiceState();

    function handleInput(event) {
      // ex: {amount:777}
      updateLine(props.id, { [event.target.name]: event.target.value });
    }

    /*
    watch(inputs, (values) => {
      emit("inputsChange", {
        lineId: props.id,
        values: { ...values }, // remove reactivity
      });
    });
    */
    return { handleInput, editorId, invoiceState, totalHT };
  },
};
</script>
