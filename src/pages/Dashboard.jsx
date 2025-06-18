import React, { useContext } from 'react'
import { Mycontext } from '../context'

export default function Dashboard() {

  const {user} = useContext(Mycontext)
  return (
    <div>
      <h1>hello {user}</h1>
    </div>
  )
}
