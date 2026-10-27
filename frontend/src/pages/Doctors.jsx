import React from 'react'
import{useParams } from 'react-router-dom'

export default function Doctors() {
  const {specialty } = useParams()
  console.log(specialty)
  return (
    <div>
      This is the Doctors page
    </div>
  )
}