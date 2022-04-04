$(document).ready(() => {
  ClassicEditor
    .create(document.querySelector('#text'))
    .then( editor => {
      Typecho.insertFileToEditor = (file, url, isImage) => {
        if (isImage) {
          editor.execute('insertImage', {
            source: [{src: url, alt: file}]
          })
        } else {
          editor.model.change(writer => {
            const insertPos = editor.model.document.selection.getFirstPosition();
            writer.insertText(file, {linkHref: url}, insertPos);
          })
        }
      }
    } )
    .catch(error => {
      console.error(error);
    })
})
