import React from 'react'
import Body from './components/Body'
import Head from './components/Head'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincontainer from './components/Maincontainer'
import Watchpage from './components/Watchpage'



const appRouter = createBrowserRouter([{
path:"/",
element:<Body />,
children:[
  {
    path:'/',
    element:<Maincontainer />
  },

  {
    path:'watch',
    element: <Watchpage />
  }
]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
     <Head />
    <RouterProvider router={appRouter} />
     
    </div>
    </Provider>
  )
}

export default App