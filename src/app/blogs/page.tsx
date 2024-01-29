import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
    <div>
      <Link href={"/blogs/create"}>create a blog</Link>
    </div>
  )
}

export default Blogs