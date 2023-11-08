"use client"

import Image from "next/image";
import { useState, useEffect} from "react";
import './page.scss';

export default function Marvel() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/produto`)
      .then(resp => resp.json())
      .then(resp => setProdutos(resp))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='produtos-marvel'>
      <h2>Produtos Marvel</h2>

      <div className='imagem'>
        <Image
          src={`/copo1.jpeg`}
          alt="Copo Pantera Negra"
          width={300}
          height={300}
        />
        <Image
          src={`/copo2.jpeg`}
          alt="Copo Homem de Ferro"
          width={300}
          height={300}
        />
      </div>

      <div className='tabela-precos'>
        <h2>Tabela de preços</h2>
        <table>
          <thead>
            <tr>
              <th>Nome do produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(prod => (
              <tr key={prod.id}>
                <td>{prod.titulo}</td>
                <td>{prod.quantidade}</td>
                <td>R${parseFloat(prod.preco).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
