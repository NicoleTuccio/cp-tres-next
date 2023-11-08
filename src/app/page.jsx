import Image from 'next/image';
import './page.scss'

export default function Loja(){
    return(
        
        <div className='conteiner'>
            <h2>Promoções Canecas Marvel&DC</h2>
                <div className='imagem'>
                    <Image
                    src={`/propaganda.jpeg`}
                    alt='Caneca Marvel'
                    width={200}
                    height={200}
                    />
                    <p className='preco'> R$50,00 por R$37,99</p>
                </div>

                <div className='imagem'>
                    <Image
                    src={`/propaganda2.jpeg`}
                    alt='Caneca DC'
                    width={200}
                    height={200}
                    />
                    <p className='preco'>R$50,00 por R$37,99</p>
                </div>
            </div>
    )

}