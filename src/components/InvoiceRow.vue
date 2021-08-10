<template>
  <tr class="hover:bg-gray-100">
    <td class="py-4 px-6 text-left">
      <div :id="editorId" class="prose whitespace-wrap bg-white"></div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable>edit</div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable>edit</div>
    </td>

    <td class="py-3 px-6 text-left">
      <div contenteditable>edit</div>
      <!-- <input style="width: 80px" type="number" />-->
    </td>

    <td class="py-3 px-6 text-left">
      <div></div>
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
    const editorId = computed(() => "editor-" + props.id);
    useCkEditor("#" + editorId.value);
    function handleChange() {
      alert("ok");
    }
    return { editorId, handleChange, amount };
  },
};
</script>
