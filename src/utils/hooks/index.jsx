import { useEffect, useState } from 'react'

export function useFetch(url) {
  //init states for data and loader
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) throw new Error('You must specify an url')

    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    setLoading(true)
    fetchData()
  }, [url])

  return { isLoading, data }
}
