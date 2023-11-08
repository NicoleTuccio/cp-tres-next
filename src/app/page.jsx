import Image from 'next/image';
export default function Loja(){
    return(
        <>
            <h2>Promoções Canecas Marvel&DC</h2>
            <Image
            src={`/propaganda.jpeg`}
            alt='Caneca Marvel'
            width={200}
            height={200}
            />
            <p>R$50,00 por R$37,99</p>
            <Image
            src={`/propaganda2.jpeg`}
            alt='Caneca DC'
            width={200}
            height={200}
            />
            <p>R$50,00 por R$37,99</p>

        </>
    )

}