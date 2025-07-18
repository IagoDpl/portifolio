import './topBar.css'

const TopBar = () => {
    return (
        <div className='topbar' >
            <div className='menuIcons'>
                <a href="/" className='menuIcon'>
                <img src="/general/linkedin.svg" alt="" />
                </a>
                <a href="/" className='menuIcon'>
                <img src="/general/github.svg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default TopBar