import React from 'react'
import ReactDOM from 'react-dom'
import {initializeApp} from 'firebase/app'
import {config as firebaseConfig} from 'services/firebase'
import 'antd/dist/antd.less'
import './styles/index.less'
import 'components/core/image/image.less'
import 'antd-table-infinity/index.css'
import store from './stores'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './mock'

initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// hmr enable
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept()
}

reportWebVitals()
