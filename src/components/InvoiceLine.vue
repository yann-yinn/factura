<template>
  <tr class="hover:bg-gray-100 border-b">
    <td class="py-4 px-6 text-left">
      <div :id="editorId" class="prose whitespace-wrap bg-white"></div>
    </td>

    <td class="npy-3 px-6 text-left">
      <input
        type="number"
        style="width: 100px"
        class="py-3 px-2"
        v-model="inputs.amount"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="number"
        style="width: 100px"
        class="py-3 px-2"
        v-model="inputs.quantity"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="text"
        style="width: 100px"
        class="py-3 px-2"
        v-model="inputs.unit"
      />
      <!-- <input style="width: 80px" type="number" />-->
    </td>

    <td class="py-3 px-6 text-left">
      {{ totalHT }}
    </td>
  </tr>
</template>

<script>
import { computed, reactive, watch } from "vue";
import useCkEditor from "@/use/ckEditor";

export default {
  props: ["id"],
  setup(props, { emit }) {
    const inputs = reactive({
      amount: 500,
      quantity: 1,
      unit: "jour",
    });
    const totalHT = computed(() => inputs.amount * inputs.quantity);
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value);
    watch(inputs, (values) => {
      emit("inputsChange", {
        lineId: props.id,
        values: { ...values }, // remove reactivity
      });
    });
    return { editorId, inputs, totalHT };
  },
};
</script>
