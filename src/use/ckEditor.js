import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onMounted } from "vue";

export default function useCkEditor(
  selector,
  { onEditorReady = null, onChange = null }
) {
  onMounted(() => {
    ckEditor.create(document.querySelector(selector)).then((editor) => {
      if (onEditorReady) {
        onEditorReady(editor);
      }
      editor.model.document.on("change:data", () => {
        onChange(editor.getData());
      });
    });
  });
}
