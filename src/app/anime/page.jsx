import Image from "next/image"

export default function Anime(){
    return(

        <div className="produtos-anime">
            <h1>Produtos Animes</h1>
            <Image className="produto"
            src={`/funko1.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
            <Image className="produto"
            src={`/funko2.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
            <Image className="produto"
            src={`/funko3.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
            <Image className="produto"
            src={`/funko4.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
            <Image className="produto"
            src={`/funko5.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
            <Image className="produto"
            src={`/funko6.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <p>Funko Pop R$ 250,00</p>
        </div>
    )
}