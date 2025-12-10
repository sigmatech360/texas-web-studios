import { useRef } from 'react'
import portfolio1 from "../../assets/images/services/webdesign/portfolio1.webp";
import portfolio2 from "../../assets/images/services/webdesign/portfolio2.webp";
import portfolio3 from "../../assets/images/services/webdesign/portfolio3.webp";
import portfolio4 from "../../assets/images/services/webdesign/portfolio4.webp";
import portfolio5 from "../../assets/images/services/webdesign/portfolio5.webp";
import portfolio6 from "../../assets/images/services/webdesign/portfolio6.webp";


const WebDesignPortfolio = () => {

      const imgRef = useRef(null);
 
  const handleEnter = (e) => {
    const img = e.currentTarget;
    const scroll = img.scrollHeight - img.parentElement.clientHeight;
    img.style.transform = `translateY(-${scroll}px)`;
    };

    const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    };
    


  return (
    <section className="webdesign-portfolio-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="webdesign-portfolio-head">
                        <h6 className='shorttop-head'>Our portfolio</h6>
                        <h2 className='mainhead'>Recent Creative Project Highlights</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-one">
                        <img src={portfolio1}  onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-two">
                        <img src={portfolio2} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-three">
                        <img src={portfolio3}  onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-four">
                        <img src={portfolio4} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-five">
                        <img src={portfolio5}  onMouseEnter={handleEnter} onMouseLeave={handleLeave}  alt="portfolio image" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="webdesign-portfolio-img portfolio-img-six">
                        <img src={portfolio6} onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt="portfolio image" />
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesignPortfolio