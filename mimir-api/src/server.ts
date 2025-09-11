import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { StreamChat } from 'stream-chat'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const chatClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY!,
  process.env.STREAM_API_SECRET!
)

app.post(
  '/register-user', 
  async (req: Request, res: Response): Promise<any> => {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({error: 'Name and email are required.'})
    }

    try {
      res.status(200).json({message: 'Success'})
    } catch (error) {
      res.status(500).json({error: 'Internal Server Error.'})
    }
  }
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

