import type { SQLResultSet } from 'expo-sqlite'
import { database } from './dbService'

// GET: All records from one table.
export const GET_ALL = async (tableName: string): Promise<SQLResultSet> => {
  return await new Promise((resolve, reject) => {
    const db = database()

    if (db instanceof Error) return db

    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName}`,
        [],
        (_, results) => {
          resolve(results)
        },
        (_, error) => {
          reject(error)
          return false
        }
      )
    })
  })
}
