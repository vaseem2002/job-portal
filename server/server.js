import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectdb from './config/db.js'
import CompanyRouter from './routes/CompanyRoute.js'
import JobRouter from './routes/JobRoute.js'
import UserRouter from './routes/UserRoute.js'
import { clerkWebhooks } from './controller/Webhook.js'

const app = express();

await connectdb()


app.use(cors())
app.use(express.json())

app.post('/webhooks',clerkWebhooks)


app.use('/api/company',CompanyRouter)
app.use('/api/Job',JobRouter)
app.use('/api/user',UserRouter)

app.get('/',(req,res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server is runing at port ${PORT}`)
})