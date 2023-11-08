import Image from "next/image"

export default function dcComics(){
    return(
        <div>
            <h1>Produtos DC Comics</h1>
            <Image
            src={`/mousepag.jpg`}
            alt="Mouse Pag"
            width={300}
            height={300}
            ></Image>
            <Image
            src={`/chaveiro1.jpg`}
            alt="Chaveiro 1"
            width={300}
            height={300}
            ></Image>
            <Image
            src={`/chaveiro2.jpg`}
            alt="Chaveiro"
            width={300}
            height={300}
            ></Image>
            <Image
            src={`/capaNote.jpg`}
            alt="Capa Notebook"
            width={300}
            height={300}
            ></Image>
        </div>
    )
}