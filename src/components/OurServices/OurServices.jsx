import './OurServices.css'

import { FaEye } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function OurServices() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';
    return (
        <div className="our-services">
            <div className="main-top-title-section py-4">
                <h2 className='text-center'>{t('ourServices.ourServies')}</h2>
            </div>
            <div className="container">
                <div className={` row ${isArabic ? 'arabic-dir' : ''}`}>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageSuppliers} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.suppliers')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageContractors} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.contractors')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageEngineeringOffices} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.engineeringOffices')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageTraining} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.training')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imagejobs} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.jobs')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageEquipment} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.equipment')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageAuction} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.auction')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4">
                        <div className="box-content">
                            <div className="box-head">
                                <div className="icone">
                                    {/* <img src={imageAdministrativeServices} alt="" /> */}
                                </div>
                                <h3 className='title'>{t('navBar.AdministrativeServices')}</h3>
                            </div>
                            <div className="box-body">
                            <ul className= {`  ${isArabic ? 'arabic' : ''}`}>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                        {/* <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Kladeng')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-El3zl')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Dekorat')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                        <li className= {`  ${isArabic ? 'arabic-dir' : ''}`}><span><FaEye /></span><a className="" href="#">{t('navBar.page-Mtb5W7mam')}</a></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>




















                </div>
            </div>
        </div>
    )
}
