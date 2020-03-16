import { useState, useEffect } from "react"
import axios from "axios"

export const useList = listType => {
  const [list, setList] = useState([])

  useEffect(() => {
    ;(async listType => {
      setList([])
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/${listType}`
      )
      setList(res.data)
      return () => {
        console.log("unmount")
      }
    })(listType)
  }, [listType])
  return list
}
