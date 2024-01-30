'use client'
import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
export default function InputTag() {

    const [tags, setTags] = React.useState([
        { id: 'Thailand', text: 'Thailand' },
        { id: 'India', text: 'India' },
        { id: 'Vietnam', text: 'Vietnam' },
        { id: 'Turkey', text: 'Turkey' }
      ]);
    
    
      const handleDelete = (i:any) => {
        setTags(tags.filter((tag, index) => index !== i));
      };
    
      const handleAddition = (tag:any) => {
        setTags([...tags, tag]);
      };
    
      const handleDrag = (tag:any, currPos:any, newPos:any) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };
    
      const handleTagClick = (index:any) => {
        console.log('The tag at index ' + index + ' was clicked');
      };
      const COUNTRIES:any = ['india', 'us','uk','uae']
    
      const suggestions = COUNTRIES.map((country :any)=> {
        return {
          id: country,
          text: country
        };
      });
      
      const KeyCodes = {
        comma: 188,
        enter: 13
      };
      
      const delimiters = [KeyCodes.comma, KeyCodes.enter];
    
  return (
    <div className=''>
         <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />

    </div>
  )
}

