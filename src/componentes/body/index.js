import './Body.css'

const Body = () => {
    return (
        <>
            <section className='secao__principal'>
                <div>
                    <h1>Balle Bot</h1>
                    <h3>Deixe a sua comunidade segura de um jeito fácil</h3>
                    <button className='botao'>Me adicione!</button>
                </div>
                <img src='./imagens/imagem-principal.png' alt='imagem principal do site, um robô'></img>
            </section>

            <section className='secao__texto'>
                <h2>O que ela faz por você?</h2>
                <p>1. Cria um sistema de verificação capcha para novos membros garantirem que não são robôs</p>
                <p>2. Possui um sistema de banimento automático para links suspeitos que forem enviados na comunidade</p>
                <p>3. Sistema de avisos e banimento manual, para pessoas administradoras utilizarem</p>
            </section>
        </>
    )
}

export default Body;