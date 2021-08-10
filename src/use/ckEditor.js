import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onMounted } from "vue";

export default function useCkEditor(selector) {
  onMounted(() => {
    ckEditor
      .create(document.querySelector(selector))
      .then((editor) => {
        window.editor = editor;
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
