$(document).ready(() => {
  ClassicEditor.create(document.querySelector("#text"), {
    codeBlock: {
      languages: [
        { language: "plaintext", label: "Plain text" },
        { language: "apache", label: "Apache" },
        { language: "bash", label: "Bash" },
        { language: "c", label: "C" },
        { language: "cmake", label: "CMake" },
        { language: "clojure", label: "Clojure" },
        { language: "console", label: "Shell session" },
        { language: "cs", label: "C#" },
        { language: "cpp", label: "C++" },
        { language: "css", label: "CSS" },
        { language: "dart", label: "Dart" },
        { language: "diff", label: "Diff" },
        { language: "dockerfile", label: "Dockerfile" },
        { language: "elisp", label: "Emacs Lisp" },
        { language: "elixir", label: "Elixir" },
        { language: "erlang", label: "Erlang" },
        { language: "go", label: "Go" },
        { language: "html", label: "HTML" },
        { language: "java", label: "Java" },
        { language: "javascript", label: "JavaScript" },
        { language: "json", label: "JSON" },
        { language: "json5", label: "JSON5" },
        { language: "kotlin", label: "Kotlin" },
        { language: "nginx", label: "Nginx" },
        { language: "php", label: "PHP" },
        { language: "python", label: "Python" },
        { language: "ruby", label: "Ruby" },
        { language: "scala", label: "Scala" },
        { language: "typescript", label: "TypeScript" },
        { language: "xml", label: "XML" },
        { language: "yaml", label: "YAML" },
      ],
    },
  })
    .then((editor) => {
      Typecho.insertFileToEditor = (file, url, isImage) => {
        if (isImage) {
          editor.execute("insertImage", {
            source: [{ src: url, alt: file }],
          });
        } else {
          editor.model.change((writer) => {
            const insertPos =
              editor.model.document.selection.getFirstPosition();
            writer.insertText(file, { linkHref: url }, insertPos);
          });
        }
      };
    })
    .catch((error) => {
      console.error(error);
    });
});
