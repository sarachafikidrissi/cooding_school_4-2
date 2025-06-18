import React from 'react'
import { DataJson } from '../constants'


export default function Comments() {
    const commentaire = DataJson.Comments.comments
    console.log(commentaire);
    
  return (
    <div>
        {
            commentaire.map((com, index)=> (
                <h1 className='border border-b-4'>{com.body}</h1>
            ))
        }
    </div>
  )
}
