import config from './config.json'
import url from 'url'

const getQuery = (originalUrl, primaryParamKey = 'q') => {
    let index = originalUrl.indexOf(`${primaryParamKey}=`)
    return originalUrl.substring(index + 2)
}

export default (setting = {}) => ({
    target: config.host,
    router: (req) => {
        let q = getQuery(req.originalUrl)
        let parsedUrl = url.parse(q)
        let target = `${parsedUrl.protocol}//${parsedUrl.host}`
        console.log('Target: ' + target)
        return target
    },
    pathRewrite: (path, req) => {
        let q = getQuery(req.originalUrl, setting.key)
        let parsedUrl = url.parse(q)
        let urlPath = parsedUrl.path
        console.log('Path: ' + urlPath)
        return urlPath
    },
    onProxyRes: (proxyRes, req, res) => {
        let q = getQuery(req.originalUrl)
        console.log('Proxying to ' + q)
        console.log('------')
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.headers = req.headers
    },
    changeOrigin: true
})