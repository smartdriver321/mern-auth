import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectToDB } from './db/connectToDB.js'
import authRoute from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.get('/health', (req, res) => {
	res.send('App is healthy')
})

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json()) // allows us to parse incoming requests:req.body
app.use(cookieParser()) // allows us to parse incoming cookies

app.use('/api/auth', authRoute)

app.listen(PORT, async () => {
	await connectToDB()
	console.log('Server is running on port:', PORT)
})
