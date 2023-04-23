import Typography from '../../Shared/Typography'
import EditorDescLists from './EditorDescList'
import EditorFeatures from './EditorFeatures'
import { ReactNode } from 'react';

interface EditorDescList {
  id: number
  title: string
  img: string
  description: string
  advantages: string
  advantagesList: string[]
}

interface FeaturesEditor {
  id: number
  feature: string
  description: string
}

interface Props {
  title: string
  description: string | ReactNode
  advantages: string | ReactNode
  features: FeaturesEditor[]
  list: EditorDescList[]
}

const BodyProducts = ({ title, description, advantages,  features, list }: Props) => {
  return (
    <div>
      <Typography
        variant="subheading"
        className="text-4xl sm:text-2xl text-black mb-2 text-center py-14"
      >
        {title}
      </Typography>
      <Typography
        variant="subheading"
        className="text-xl sm:text-2xl text-black mb-2 text-start"
      >
        {description}
      </Typography>
      <div className="container py-8">
        <EditorFeatures features={features} advantages={advantages} />
      </div>
      <EditorDescLists list={list} />
    </div>
  )
}

export default BodyProducts
