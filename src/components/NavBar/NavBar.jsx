import './NavBar.css';
import logoImage from '../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function NavBar() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleClick = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (

        <>
            <nav className={`navbar navbar-expand-lg my-nav ${isArabic ? 'arabic-dir' : ''}`} >
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src={logoImage} alt="" />
                    </a>
                    <button
                        className={`navbar-toggler custom-toggler ${isNavOpen ? 'active' : ''}`}
                        type="button"
                        onClick={handleToggleClick}
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=" "><FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} /></span>
                        {/* <FontAwesomeIcon icon={faBars} /> */}
                        
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className={`navbar-nav mb-2 mb-lg-0 ${isArabic ? 'arabic-dir' : ''}`}>      
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{t('navBar.home')}</a>
                            </li>       
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('navBar.page-About')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('navBar.page-Team')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('navBar.page-Gallery')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('navBar.page-Contact')}</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}