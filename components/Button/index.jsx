import React from 'react'
import { ContentButton } from './styles'

export default function Button({ title, color, onClick}) {
  return (
    <ContentButton className={`c-${color}`} onClick={onClick}>
      {title}
    </ContentButton>
  )
}
