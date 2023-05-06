import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="nav">
            <div>
                <h1>
                <Link href="/home">Phils Music Depot</Link>
                </h1>
            </div>
            <div>
                <input className="search" type="search" placeholder="Search"></input>
            </div>
            <Link href="/call">&#128222;</Link>
            <Link href="/favorites">&#9825;</Link>
            <Link href="/account">&#128100;</Link>
            <Link href="/cart">&#128722;</Link>
        </nav>
        
    )
}

export default Navbar;