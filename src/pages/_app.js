import '@/styles/globals.css'
import  { Toaster } from 'react-hot-toast';
import { wrapper } from '@/Redux/stor';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { loadUserData } from '@/Redux/user/userAction';
 function MyApp({ Component, pageProps }) {
  const store=useStore();

      useEffect(()=>{
    loadUserData(store)
      },[])
  return (
    
    <>
    <Component {...pageProps} />
    <Toaster/>
    
    </>
  )
  }
  export default wrapper.withRedux(MyApp)
