import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { StreamChat } from 'stream-chat'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.post(
  '/register-user', 
  async (req: Request, res: Response): Promise<any> => {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({error: 'Name and email are required.'})
    }

    res.status(200).json({message: 'Success'})
  }
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

