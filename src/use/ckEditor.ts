import ckEditor from "@ckeditor/ckeditor5-build-balloon";
import { onMounted } from "vue";

interface onEditorReady {
  (editor): void;
}

interface onChange {
  (content: string): void;
}

interface useOptions {
  onEditorReady?: onEditorReady;
  onChange?: onChange;
}

export default function useCkEditor(
  selector: string,
  options: useOptions
): void {
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
