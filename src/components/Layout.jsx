import { DataProvider } from "@/context/DataContext"
import Footer from "./global/Footer"
import Header from "./global/header/Header"
// import Navbar from "./global/header/navbar/Navbar"

const Layout = ({children}) => {
  return (
    <DataProvider>
    {/* <Navbar /> */}
    <Header/>
    <main>
        <article>
            {children}
        </article>
    </main>
    <Footer/>
    </DataProvider>
  )
}

export default Layout