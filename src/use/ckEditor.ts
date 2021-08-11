import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onMounted } from "vue";

interface useOptions {
  onEditorReady?: Function;
  onChange?: Function;
}

export default function useCkEditor(selector, options: useOptions) {
  onMounted(() => {
    ckEditor.create(document.querySelector(selector)).then((editor) => {
      if (options.onEditorReady) {
        options.onEditorReady(editor);
      }

      editor.model.document.on("change:data", () => {
        if (options.onChange) {
          options.onChange(editor.getData());
        }
      });
    });
  });
}
