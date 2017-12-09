import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import opt from './options'
import proxy from 'http-proxy-middleware'

const PORT = process.env.PORT || 5000

let app = express()
app.use(cors())
app.use(morgan('combined'))
app.use('/proxy', proxy(opt))

app.listen(PORT, () => {
    console.log(`Proxy server is running on port = ${PORT}`)
})


export default app
export const options = opt