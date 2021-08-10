<template>
  <tr class="hover:bg-gray-100 border-b-2">
    <td class="py-4 px-6 text-left">
      <div :id="editorId" class="prose whitespace-wrap bg-white"></div>
    </td>

    <td class="npy-3 px-6 text-left">
      <input
        type="number"
        style="width: 100px"
        class="py-3 px-2"
        v-model="amount"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="number"
        style="width: 100px"
        class="py-3 px-2"
        v-model="quantity"
      />
    </td>

    <td class="py-3 px-6 text-left">
      <input
        type="text"
        style="width: 100px"
        class="py-3 px-2"
        v-model="unit"
      />
      <!-- <input style="width: 80px" type="number" />-->
    </td>

    <td class="py-3 px-6 text-left">
      {{ totalHT }}
    </td>
  </tr>
</template>

<script>
import { computed, ref } from "vue";
import useCkEditor from "@/use/ckEditor";

export default {
  props: ["id"],
  setup(props) {
    const amount = ref(500);
    const quantity = ref(1);
    const unit = ref("jour");
    const totalHT = computed(() => amount.value * quantity.value);
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value);
    function handleChange() {
      alert("ok");
    }
    return { editorId, handleChange, amount, totalHT, quantity, unit };
  },
};
</script>
