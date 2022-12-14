import express from 'express';
import * as dotenv from 'dotenv'
import { authRouter } from './routes/auth.route';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
dotenv.config()
const port = process.env.PORT;

app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
  }
))
app.use(express.json())
app.use(cookieParser())
app.use('/', authRouter)

app.get('/test', (req, res)=> {
  res.send({
    message: 'haha'
  })
})

app.listen(port, () => {
  console.log(`Server Started at port: ${port}`);
});
