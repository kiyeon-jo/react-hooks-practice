import React, { useState, useMemo } from "react"

export const CalWrapper = () => {
  const [word, setWord] = useState("")
  const [saveWord, setSaveWord] = useState("")
  let wordLength = 0
  console.log(1)
  useMemo(() => {
    wordLength = word.length
  }, [word])

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setWord(e.target.value)
        }}
        value={word}
      />
      <button
        onClick={() => {
          setSaveWord(word)
        }}
      >
        Save
      </button>
      <div>word: {word}</div>
      <div>wordLength: {wordLength}</div>
    </div>
  )
}
