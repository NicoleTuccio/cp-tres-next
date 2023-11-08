import Image from "next/image"
import './page.scss'

export default function dcComics(){
    return(
        <div className="produtos-dc">
            <h1>Produtos DC Comics</h1>
            <Image className="produto"
            src={`/mousepag.jpeg`}
            alt="Mouse Pag"
            width={200}
            height={200}
            />
            <p>Mouse Pag R$ 82,99</p>
            <Image className="produto"
            src={`/chaveiro1.jpeg`}
            alt="Chaveiro 1"
            width={200}
            height={200}
            />
            <p>Chaveiro Arlequina R$ 42,99</p>
            <Image className="produto"
            src={`/chaveiro2.jpeg`}
            alt="Chaveiro"
            width={200}
            height={200}
            />
            <p>Chaveiro Mulher Maravilha R$ 42,99</p>
            <Image className="produto"
            src={`/capaNote.jpeg`}
            alt="Capa Notebook"
            width={200}
            height={200}
            />
            <p>Capa Notebook Batmam R$ 120,99</p>
        </div>
    )
}