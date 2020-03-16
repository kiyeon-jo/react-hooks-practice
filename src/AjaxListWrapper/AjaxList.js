import React from "react"
import { useList } from "./useList"

export const AjaxList = ({ listType }) => {
  const list = useList(listType)
  return (
    <ul>
      {list.map((obj, idx) => {
        return <li key={idx}>{obj.title}</li>
      })}
    </ul>
  )
}
