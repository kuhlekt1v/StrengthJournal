import type {
  SQLTransaction,
  SQLError,
  SQLResultSet,
  SQLiteDatabase
} from 'expo-sqlite'
import { openDatabase } from 'expo-sqlite'
import type { IExercise } from '../types/IExercise'

const seedData: IExercise[] = [
  { id: 1, description: 'Exercise One' },
  { id: 2, description: 'Exercise Two' },
  { id: 3, description: 'Exercise Three' }
]

export const databaseName: string = 'strengthJournal'

// Add error handling view - Issue #50.
export const database = (): SQLiteDatabase | Error => {
  try {
    const db = openDatabase(databaseName)
    return db
  } catch (error) {
    return new Error('Failed to initialize database')
  }
}

const seedDatabase = (): void => {
  const db = openDatabase(databaseName)
  const placeholders = seedData.map(() => '(?)').join(', ')
  const values = seedData.map((exercise) => [exercise.description]).flat()

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM exercise',
      [],
      (_: SQLTransaction, { rows: { length } }: SQLResultSet) => {
        // Only add seed data if no data currently exists.
        if (length === 0) {
          tx.executeSql(
            `INSERT INTO exercise (description) VALUES ${placeholders}`,
            values,
            undefined,
            (_: SQLTransaction, error: SQLError) => {
              console.log(error)
              return false
            }
          )
        }
      }
    )
  })
}

export const initializeDatabase = (): void => {
  const db = openDatabase(databaseName)

  db.transaction((tx) => {
    tx.executeSql(
      'create table if not exists exercise (id INTEGER PRIMARY KEY AUtOINCREMENT, description TEXT);',
      [],
      () => {
        seedDatabase()
      },
      (_: SQLTransaction, error: SQLError) => {
        console.log(error.message)
        return false
      }
    )
  })
}
