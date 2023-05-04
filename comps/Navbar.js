import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="nav">
            <div>
                <h1>Phils Music Depot</h1>
            </div>
            <Link href="/">Main</Link>
            <Link href="/home">Home</Link>
            <Link href="/stock">Stock</Link>
        </nav>
    )
}

export default Navbar;