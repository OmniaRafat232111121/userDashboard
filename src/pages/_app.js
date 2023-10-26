import store from '@/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return(
<>
<Provider store={store} >
    <Component {...pageProps} />
  </Provider>
   <ToastContainer className="toast-position"
   position="bottom-right"></ToastContainer>
</>
        )
}
