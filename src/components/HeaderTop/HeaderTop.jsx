import './HeaderTop.css'
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

export default function HeaderTop() {

    const [t, i18n] = useTranslation('global');
    // const isArabic = i18n.language === 'ar';

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    
    return (
        <>
            <header className="header-top">
                <div className="container">
                    <div className="header-contant d-flex justify-content-between align-items-center">

                        <div  className="dash d-flex  align-items-center ">
                            <div className="language d-flex align-content-center">
                                <a className="pe-2"><FaGlobeAmericas /></a>
                                <select
                                    className="language-select"
                                    value={i18n.language}
                                    onChange={(e) => handleChangeLanguage(e.target.value)}
                                    >
                                    <option value="en">En</option>
                                    <option value="ar">Ar</option>
                                </select>
                            </div>
                            <ul className="social-header-top  m-0 d-flex text-white">
                                <li className="mx-2 "><a href="#" ><AiFillFacebook /></a></li>
                                <li className="mx-2"><a href="#"><AiOutlineTwitter /></a></li>
                                <li className="mx-2"><a href="#"><AiFillInstagram /></a></li>
                            </ul>
                        </div>

                        <div className=" ">
                            <div className="contact-ph">
                                <span>{t("headerTop.number")}<AiFillPhone /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
