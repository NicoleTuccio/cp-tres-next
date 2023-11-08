import Image from "next/image"

export default function Anime(){
    return(

        <div>
            <h1>Produtos Animes</h1>
            <Image
            src={`/funko1.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <Image
            src={`/funko2.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <Image
            src={`/funko3.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <Image
            src={`/funko4.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <Image
            src={`/funko5.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
            <Image
            src={`/funko6.jpeg`}
            alt="Funko Pop"
            width={200}
            height={200}
            />
        </div>
    )
}