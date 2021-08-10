<template>
  <tr class="hover:bg-gray-100 border-b-2">
    <td class="py-3 px-6 text-left">
      <div :id="editorId" class="prose"></div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable="">500</div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable>jour</div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable>10</div>
    </td>
  </tr>
</template>

<script>
import { computed } from "vue";
import useCkEditor from "@/use/ckEditor";

export default {
  props: ["id"],
  setup(props) {
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value);
    return { editorId };
  },
};
</script>
