import { useTranslation } from 'react-i18next'
import './WellcomeBanner.css'
import imageBanner from '../../assets/images/output-onlinegiftools.gif'
import ChangeWord from '../ChangeWords/ChangeWords';

export default function WellcomeBanner() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';

    
    return (
        // <div className={`content-container ${isArabic ? 'arabic' : ''}`}>{t("header.message")}</div>
        <>
            
            <div className="welcome-banner align-content-center">
                <div className="container">
                    <div className={`row d-flex align-items-center ${isArabic ? 'arabic-dir' : ''} `}>
                        <div className="col-xs-12 col-md-6">
                            <div className="welcome-text-content">
                                <h2 className={`welcome-title ${isArabic ? 'arabic' : ''}`}>{t("welcomeBanner.welcomeTitle")}</h2>
                                <p className='welcome-hint'>{t("welcomeBanner.hint")}</p>
                                <ChangeWord />
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <div className={`welcome-image-content `}>
                                <img src={imageBanner} alt="" />
                                {/* <div className='logoDiv'></div> */}
                                {/* <video className="video-background" autoPlay loop muted>
                                    <source src={imageBanner} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}
