"use client"
import Image from "next/image"
import { useState } from "react"

export default function Marvel(){
    
    const[produtos, setProdutos] = useState([])

    return(
        <div>
            <h1>Produtos Marvel</h1>
            
            <Image
            src={`/copo1.jpeg`}
            alt="Copo Pantera Negra"
            width={300}
            height={300}
            ></Image>
            <Image
            src={`/copo2.jpeg`}
            alt="Copo Homem de Ferro"
            width={300}
            height={300}></Image>

            <div>
                <h2>Tabela de preços</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preco</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            produtos.map(prod =>(
                                <tr key={prod.id}>
                                    <td>{prod.titulo}</td>
                                    <td>{prod.quantidade}</td>
                                    <td>R${parseFloat(prod.preco).toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

        
    )
}