import Image from "next/image"

export default function dcComics(){
    return(
        <div>
            <h1>Produtos DC Comics</h1>
            <Image
            src={`/mousepag.jpeg`}
            alt="Mouse Pag"
            width={200}
            height={200}
            ></Image>
            <Image
            src={`/chaveiro1.jpeg`}
            alt="Chaveiro 1"
            width={200}
            height={200}
            ></Image>
            <Image
            src={`/chaveiro2.jpeg`}
            alt="Chaveiro"
            width={200}
            height={200}
            ></Image>
            <Image
            src={`/capaNote.jpeg`}
            alt="Capa Notebook"
            width={200}
            height={200}
            ></Image>
        </div>
    )
}