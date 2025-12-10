import React from 'react'
import { Link } from 'react-router-dom'
import creativewriting from "../../assets/images/services/blogwriting/creativewriting.svg";
import power2 from "../../assets/images/services/blogwriting/power2.svg";
import power3 from "../../assets/images/services/blogwriting/power3.svg";
import power4 from "../../assets/images/services/blogwriting/power4.svg";
import { useModal } from '../../context/ModalContext';

const BlogWritingPower = () => {

    const { setShowModal } = useModal();

  return (
    <section className='blogwriting-power-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blogwriting-power-txt">
                        <h2 className='mainhead text-white'>The Word Play that Gets You Far & Beyond</h2>
                        <p>Strong content blends creativity with strategy. Our writing adapts to your audience while staying optimized for modern search engines.</p>
                        <button onClick={() => setShowModal(true)} className='theme-btn'>Start Now</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-power-box">
                        <img src={creativewriting} alt="image" />
                        <h4>Creative Thinking</h4>
                        <p>We shape ideas into compelling narratives using fresh angles that reflect modern online behavior. Every blog is written to spark curiosity and keep readers scrolling with ease.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-power-box">
                        <img src={power2} alt="image" />
                        <h4>SEO Implementation</h4>
                        <p>We optimize your blog for ranking without compromising readability. Keywords fit naturally into the flow so your content feels smart, organic, and aligned with search engine expectations.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-power-box">
                        <img src={power3} alt="image" />
                        <h4>Effective CTAs</h4>
                        <p>We write calls to action that guide readers toward conversions. Whether it is signing up, buying, or exploring more, our CTAs strike a perfect balance between clarity and persuasion.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-power-box">
                        <img src={power4} alt="image" />
                        <h4>Reader’s Tone</h4>
                        <p>Your audience gets content written in a tone they instantly relate to. We tailor each blog to match their mindset, preferences, and level of understanding</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWritingPower