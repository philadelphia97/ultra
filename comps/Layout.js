import Footer from "./Footer";
import Navbar from "./Navbar"
import Banner from "./Banner";
import DownstairsNav from "./DownstairsNav";

const Layout = ({children}) => {
    return(
    <div>
    <Banner/>
    <Navbar />
    <DownstairsNav />
    {children}
    <Footer />
    </div>
    )
}

export default Layout;