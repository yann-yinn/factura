import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onMounted } from "vue";

export default function useCkEditor(selector) {
  onMounted(() => {
    ckEditor.create(document.querySelector(selector)).catch((error) => {
      console.error(error);
    });
  });
}
