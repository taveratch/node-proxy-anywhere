Proxy Anywhere
-------
node.js application acts like proxy server. It handles http request from frontend. Because when fetch APIs from frontend it will violate Cross-Origin Policy.

Requirements
-----
- Node.js

Installation
----
```
npm install --save node-proxy-http
```

Usage
----
```
import nodeProxy from 'node-proxy-http'
const setting = {...}
const { app, proxy } = nodeProxy(setting)

app.use('/proxy', proxy)
app.listen(5000)
```

Usage in frontend:
```
fetch(http://localhost:5000/proxy?q=https://myApi)
```

**setting**

***key*** Params's key (Example, `/proxy?param=`) ***key*** is `param` | (Default is `q`)