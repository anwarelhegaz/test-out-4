
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import compLogo1 from '../../assets/images/fh1.png';
import compLogo2 from '../../assets/images/fh2.png';
import compLogo3 from '../../assets/images/fh3.png';
import compLogo4 from '../../assets/images/fh4.png';
import compLogo5 from '../../assets/images/fh5.png';
import "./CarouselLogo.css";

export default function CarouselLogo() {
    // Your carousel items go here
    const items = [
        // Add your carousel items here
        <div className='logo-carousel-content' key={1}><img src={compLogo1} alt="" /></div>,
        <div className='logo-carousel-content' key={2}><img src={compLogo2} alt="" /></div>,
        <div className='logo-carousel-content' key={3}><img src={compLogo3} alt="" /></div>,
        <div className='logo-carousel-content' key={4}><img src={compLogo4} alt="" /></div>,
        <div className='logo-carousel-content' key={5}><img src={compLogo5} alt="" /></div>,
        // Add more items as needed
    ];

    // Carousel configuration
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            itemClass='carousel-item-padding-40-px'
            autoPlay
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        >
            {items}
        </Carousel>
    );
}
