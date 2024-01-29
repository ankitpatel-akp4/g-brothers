"use client"
import {Editor} from '@tinymce/tinymce-react';
import { useRef } from 'react';

export const TinyEditor = ({...props}) => {
    const editorRef = useRef<any>(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
  return (
    <div>
        <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=''
        onEditorChange={(e)=>console.log(e)}
        init={{
            placeholder: "start writing ...",
            branding: false,
            height: 500,
            skin: "oxide-dark",
            content_css: "dark",
            themes: "modern",
            // menubar: false,
            promotion: false,
            menubar: 'favs file edit view insert format tools table help',
            menu: {
              file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
              edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
              view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
              insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
              format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
              tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
              table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
              help: { title: 'Help', items: 'help' }
            },
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount','preview'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' + 
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help | preview',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
      />
      <button onClick={log}>Log editor content</button>

    </div>
  )
}
