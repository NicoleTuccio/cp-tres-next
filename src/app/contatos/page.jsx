import './page.scss'

export default function Contatos(){
    return(
        <>
            <h1>Nos mande uma mensagem!</h1>
            <form>
                <legend>Para enviar uma mensagem:</legend>
                <label>
                    Nome Completo:
                </label>
                <input type="text" name="nome" id="nome" />
                <br />
                <label>
                    Email:
                </label>
                <input type="email" name="email" id="email" />
                <br />
                <label>
                    Mensagem:
                </label>
                <input type="text" name="mensagem" id="mensagem" />
                <button>Enviar</button>
            </form>

            <div className='redes-socias'>
                <h2>Nossas Redes Socias</h2>
                <p>Facebook Universo Nerd Store</p>
                <p>Instagram: univers_nerd</p>
            </div>
        </>
    )
}