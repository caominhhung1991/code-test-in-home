import {initializeApp} from 'firebase/app'

// const mode = 'test'
const mode = 'deploy'

let prodConfig
let devConfig

const osacConfig = {
  apiKey: 'AIzaSyCEHeI5B9qALgvJG1kipcWDXjFLRyZXRX4',
  authDomain: 'osac-a381e.firebaseapp.com',
  databaseURL: 'https://osac-a381e.firebaseio.com',
  projectId: 'osac-a381e',
  storageBucket: 'osac-a381e.appspot.com',
  messagingSenderId: '25505334755',
  appId: '1:25505334755:web:f68ac9e26ad98abe'
}

const osacTestConfig = {
  apiKey: 'AIzaSyAXsPGFb460jl98dTlr0VgBAxHIIh5ajCs',
  authDomain: 'mydashboard-5f063.firebaseapp.com',
  databaseURL: 'https://mydashboard-5f063.firebaseio.com',
  projectId: 'mydashboard-5f063',
  storageBucket: 'mydashboard-5f063.appspot.com',
  messagingSenderId: '208827479216',
  appId: '1:208827479216:web:f613d46581ee7ac8'
}

//@ts-ignore
if (mode === 'deploy') {
  prodConfig = osacConfig
  devConfig = osacTestConfig
} else {
  prodConfig = osacTestConfig
  devConfig = osacConfig
}

export const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export const osacApp = initializeApp(osacConfig, 'osacApp')
