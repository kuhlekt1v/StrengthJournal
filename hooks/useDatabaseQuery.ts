import { useState, useEffect } from 'react'
import { GET_ALL } from '../utils/apiService'

const useDatabaseQuery = (type: 'GET_ALL', table: string) => {
  const [data, setData] = useState<Array<Record<string, any>>>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result

        switch (type) {
          case 'GET_ALL':
            result = await GET_ALL(table)
            break
          default:
            // eslint-disable-next-line
            throw new Error(`Unsupported request type: ${type}`)
        }

        const { _array } = result.rows
        setData(_array)
      } catch (error: any) {
        const errMsg: string = error.message
        setError(new Error(`Database query failed.\n${errMsg}`))
      }
    }

    fetchData()
  }, [table, type])

  return { data, error }
}

export default useDatabaseQuery
