<template>
  <tr class="hover:bg-gray-100 border-b">
    <td class="text-left py-2 px-2">
      <div :id="editorId" class="prose whitespace-wrap bg-white"></div>
    </td>

    <td class="text-left py-2">
      <input
        type="number"
        name="amount"
        style="width: 70px"
        class="py-3 px-2"
        :value="line.amount"
        @input="handleInput"
      />
    </td>

    <td class="py-2 px-1 text-left">
      <input
        type="number"
        style="width: 70px"
        class="py-3 px-2"
        name="quantity"
        :value="line.quantity"
        @input="handleInput"
      />
    </td>

    <td class="py-2 px-1 text-left">
      <input
        type="text"
        style="width: 70px"
        class="py-3 px-2"
        :value="line.unit"
        name="unit"
        @input="handleInput"
      />
    </td>

    <td class="py-2 px-1 text-left">
      <div class="flex items-center">
        <input
          type="number"
          style="width: 60px"
          class="py-3 px-2"
          :value="line.tva"
          name="tva"
          @input="handleInput"
        />
        %
      </div>
    </td>

    <td class="py-2 px-2 text-right">{{ totalHT }}</td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import useCkEditor from "@/use/ckEditor";
import useInvoiceState from "@/use/invoiceState";
import { Line } from "@/use/invoiceState.types";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    line: {
      type: Object as PropType<Line>,
      required: true,
    },
  },
  setup(props) {
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value, { onChange: onEditorChange });
    const { invoiceState, updateLine } = useInvoiceState();

    function onEditorChange(value: string) {
      updateLine(props.id, { description: value });
    }

    function handleInput(event) {
      updateLine(props.id, { [event.target.name]: event.target.value });
    }

    const totalHT = computed(() => props.line.quantity * props.line.amount);

    return { handleInput, editorId, invoiceState, totalHT };
  },
});
</script>
