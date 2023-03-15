import { DataProvider } from "@/context/DataContext"
import Footer from "./global/Footer"
import Header from "./global/header/Header"

const Layout = ({children}) => {
  
  return (
    <DataProvider>
    <Header/>
    <main data-nextjs-scroll-focus-boundary>
        <article>
            {children}
        </article>
    </main>
    <Footer/>
    </DataProvider>
  )
}

export default Layout