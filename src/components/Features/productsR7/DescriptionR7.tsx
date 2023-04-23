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
    <div className="flex flex-row-reverse bg-white shadow-lg rounded-lg p-6">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-40 self-start ml-3"
        />
      )}

      <div className="self-start mr-auto">
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
