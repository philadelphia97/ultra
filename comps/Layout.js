import Footer from "./Footer";
import Navbar from "./Navbar"
import Banner from "./Banner";

const Layout = ({children}) => {
    return(
    <div>
    <Banner/>
    <Navbar />
    {children}
    <Footer />
    </div>
    )
}

export default Layout;