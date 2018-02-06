import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../client/Routes'

export default ({path}, store) => {
    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={path} context={{}} >
                <Routes />
            </StaticRouter>
        </Provider>   
    )

    return `
        <html>
            <head></head>
            <body>
                <div id="root" >${content}</div>
            </body>
            <script src="bundle.js" ></script>
        </html>
    `
}