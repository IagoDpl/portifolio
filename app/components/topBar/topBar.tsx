import './topBar.css'

const TopBar = () => {
    return (
        <div className='topbar' >
            <a href="/" className="logo">Iago Lacerda</a> {/* Add your name/logo here */}
            <div className='menuIcons'>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className='menuIcon'> {/* Add your LinkedIn URL */}
                    <img src="/general/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className='menuIcon'> {/* Add your GitHub URL */}
                    <img src="/general/github.svg" alt="GitHub" />
                </a>
            </div>
        </div>
    )
}

export default TopBar;