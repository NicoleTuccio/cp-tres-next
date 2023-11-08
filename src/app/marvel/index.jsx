import Image from "next/image"

export default function Marvel(){
    return(
        <div>
            <h1>Produtos Marvel</h1>
            <Image
            src={copo1.jpeg}
            alt="Copo Pantera Negra"
            width={300}
            height={300}
            ></Image>
            <Image
            src={copo2.jpeg}
            alt="Copo Homem de Ferro"
            width={300}
            height={300}></Image>
        </div>
    )
}