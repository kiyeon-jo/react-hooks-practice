import React, { useState } from "react"
import { AjaxList } from "./AjaxList"

export const AjaxListWrapper = () => {
  const [listType, setListType] = useState("albums")

  return (
    <div>
      <button
        onClick={() => {
          setListType("albums")
        }}
      >
        albums
      </button>
      <button
        onClick={() => {
          setListType("posts")
        }}
      >
        posts
      </button>
      <div className="title">
        Type : <span>{listType}</span>
      </div>
      <div className="content">
        <AjaxList listType={listType} />
      </div>
    </div>
  )
}
