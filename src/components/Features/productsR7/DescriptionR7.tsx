import React from 'react'

interface TextEditorProps {
  id: number
  title: string
  img: string
  description: string
  advantages: string
  advantagesList: string[]
}

const DescriptionR7 = ({
  title,
  img,
  description,
  advantages,
  advantagesList,
}: TextEditorProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:flex md:flex-row md:items-center">
      <img
        src={img}
        alt={title}
        className="w-1/3 md:w-1/4 mx-auto mb-4 md:mb-0 md:mr-6"
      />
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {advantages && (
          <p className="text-gray-600 text-sm mb-4">
            <span className="font-bold">{advantages}</span>
          </p>
        )}
        <ul className="list-disc ml-6">
          {advantagesList &&
            advantagesList.length > 0 &&
            advantagesList.map((advantage, index) => (
              <li key={index} className="text-lg mb-2">
                {advantage}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default DescriptionR7
