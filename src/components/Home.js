import HomeImg1 from '../assets/v9.avif'
import HomeImg2 from '../assets/v7.jpg'
import HomeImg3 from '../assets/v3.jpg'
import HomeImg4 from '../assets/v5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <section id='Home'>
        <div className='w-full'>
       <Slider {...settings}>   
    <img className='h-[600px]'src={HomeImg1} />
    <img className='h-[600px]'src={HomeImg2}/>
    <img className='h-[600px]'src={HomeImg3}/>
    <img className='h-[600px]'src={HomeImg4}/>
    </Slider>   
    </div>
    

    </section>
}
