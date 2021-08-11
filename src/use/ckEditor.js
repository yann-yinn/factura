import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onBeforeUnmount, onMounted } from "vue";

let editors = [];

export default function useCkEditor(selector) {
  onMounted(() => {
    ckEditor
      .create(document.querySelector(selector))
      .then((editor) => {
        editors.push(editor);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  onBeforeUnmount(() => {
    //on devrait détruire les instances de ckEditor ici, mais
    // ce code créer une erreur
    editors.map((editor) => editor.destroy());
    // console.log("onBeforeUnmount", editors);
  });
}
