import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <div>
                <h1>Phils Music Depot</h1>
            </div>
            <Link href="/"><a>Index</a></Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Stock</a></Link>
        </nav>
    )
}

export default Navbar;