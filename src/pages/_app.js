import '@/styles/globals.css'
import  { Toaster } from 'react-hot-toast';
import AuthProvider from '@/context/AuthContext';
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
    <Component {...pageProps} />
    <Toaster/>
    </AuthProvider>
  )

}
