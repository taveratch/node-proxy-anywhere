import pxy from './src'

const setting = {}
const { app, proxy } = pxy(setting)

app.use('/proxy', proxy)

app.listen(5000, () => {
    console.log('Server is running')
})