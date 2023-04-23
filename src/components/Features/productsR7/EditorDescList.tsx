import React from 'react'
import DescriptionR7 from './DescriptionR7'

interface EditorDescList {
  id: number
  title: string
  img: string
  description: string
  advantages: string
  advantagesList: string[]
}

interface Props {
  list: EditorDescList[]
}

const EditorDescLists = ({ list }: Props) => {
  return (
    <div className="">
      {list.map((feature) => (
        <DescriptionR7 key={feature.id} {...feature} />
      ))}
    </div>
  )
}

export default EditorDescLists
