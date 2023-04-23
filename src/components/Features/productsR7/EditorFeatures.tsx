import { ReactNode } from 'react'

interface EditorFeature {
  id: number
  feature: string
  description: string
}

interface Props {
  features: EditorFeature[]
  advantages: string | ReactNode
}

const EditorFeatures = ({ features, advantages }: Props) => {
  console.log('features', features)
  return (
    <>
      {advantages && <p className="pb-6 text-xl">{advantages}</p>}

      {features.length && features.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-bold mb-2">{feature.feature}</h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

export default EditorFeatures
