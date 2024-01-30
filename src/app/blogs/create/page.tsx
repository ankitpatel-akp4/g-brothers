import { TinyEditor } from '@/components/editors/tinyMCE'
import  InputTag  from '@/components/editors/inputTag'
import React from 'react';


const CreateBlog = () => {

  return (
    <div>
        <div className='flex justify-between'>
          <input type="text" placeholder='title' />
          <select name="" id="">
            <option value="">category</option>
            <option value="">food</option>
            <option value="">travel</option>
            <option value="">category</option>
          </select>
          
          <InputTag />
          <button>publish</button>
        </div>
        <div>
          <TinyEditor/>
        </div>
    </div>
  )
}

export default CreateBlog