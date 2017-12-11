import cors from 'cors'
import express from 'express'
import getOptions from './options'
import morgan from 'morgan'
import proxyMiddleware from 'http-proxy-middleware'

let app = express()
app.use(cors())
app.use(morgan('combined'))

export default (setting) => ({
    app,
    proxy: proxyMiddleware(getOptions(setting)),
    getOptions
})