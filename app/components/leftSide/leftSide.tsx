import './leftSide.css'

const leftSide = () => {
    return (
        <div className='leftSide'> 
        <h1>IAGO</h1>
        <h2>FrontEnd <br /> Developer</h2>
        <h3>Criando produtos frontend sólidos e escaláveis focado em ui/ux</h3>
        <div className='menuIconsLeft'>
            <a href="/" className='menuIconLeft'>
             <img src="/general/react.svg" alt="" />
            </a>
            <a href="/" className='menuIconLeft'>
             <img src="/general/javascript.svg" alt="" />
            </a>
            <a href="/" className='menuIconLeft'>
             <img src="/general/node.svg" alt="" />
            </a>
            <a href="/" className='menuIconLeft'>
             <img src="/general/tailwind.svg" alt="" />
            </a>
        </div>
        </div>
    )
}

export default leftSide