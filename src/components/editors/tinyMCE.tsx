"use client"
import {Editor} from '@tinymce/tinymce-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export const TinyEditor = ({...props}) => {
    const editorRef = useRef<any>(null);
    const { theme } = useTheme()

    
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
  return (
    <div>
        <Editor
        
        tinymceScriptSrc={process.env.NEXT_PUBLIC_APP_URL +'/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=''
        onEditorChange={(e)=>console.log(e)}
        
        init={{
          
            skin: theme === 'dark'
            ? "oxide-dark"
            : "oxide",
            content_css: theme === 'dark'
            ? "dark"
            : "default",
            placeholder: "start writing ...",
            branding: false,
            height: "80vh",

            themes: "modern",
            // menubar: false,
            resize: 'both',
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
            // images_file_types: 'jpg,svg,webp',
            file_picker_types: 'file image media',
            block_unsupported_drop: false,
            file_picker_callback: (callback, value, meta) => {
              // Provide file and text for the link dialog
              if (meta.filetype == 'file') {
                callback('mypage.html', { text: 'My text' });
              }
          
              // Provide image and alt text for the image dialog
              if (meta.filetype == 'image') {
                callback('myimage.jpg', { alt: 'My alt text' });
              }
          
              // Provide alternative source and posted for the media dialog
              if (meta.filetype == 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
              }
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
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            
          }}
      />
      <button onClick={log}>Log editor content</button>

    </div>
  )
}
