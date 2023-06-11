import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Hela<b>&CO</b></h3>
            <div>
                <button>Inicio</button>
                <button>Sobre Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}  

export default NavBar
