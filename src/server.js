import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

export const start = async () => {
  try {
    // await connect()
    app.listen(3000, () => {
      console.log(`REST API on http://localhost:3000/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
