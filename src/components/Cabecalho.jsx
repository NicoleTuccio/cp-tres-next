import Link from "next/link";
import './Cabecalho.scss'


export default function Cabecalho(){
    return(
        <nav>
            <h1>Universo Nerd Store</h1>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/marvel">Marvel</Link>
                    <Link href="/dcComics">DC Comics</Link>
                    <Link href="/anime">Animes</Link>
                    <Link href="/contatos">Contatos</Link>
                    <Link href="/sobreMim">Sobre mim</Link>
                </div>
        </nav>
    )
}