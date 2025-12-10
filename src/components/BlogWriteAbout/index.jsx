import React from 'react'
import aboutimg from "../../assets/images/services/blogwriting/aboutimg.webp";
import { Link } from 'react-router-dom';
import { FaCheckSquare } from 'react-icons/fa';
import { useModal } from '../../context/ModalContext';


const BlogWriteAbout = () => {
    const { setShowModal } = useModal();
  return (
    <section className='blogwrite-about-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blogwrite-aboutimg">
                        <img src={aboutimg} alt="img" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="blogwrite-abouttxt">
                        <h6 className='shorttop-head'>Why Choose Us</h6>
                        <h2 className='mainhead'>Content Writing that Speaks the Language of Your Brand</h2>
                        <p>In every blog we publish, we fuse our SEO blog writing services in Texas with creative strategies to craft blogs that feel natural and perform strongly.</p>
                        <button onClick={() => setShowModal(true)} className='theme-btn'>Write My Blog</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="blogwrite-about-points">
                        <ul>
                            <li><FaCheckSquare />Combining SEO skills with creative writing for maximum readability</li>
                            <li><FaCheckSquare /> Creating blogs loved by the newest algorithms and relevant in every era</li>
                            <li><FaCheckSquare /> Audience-driven storytelling built on deep research of your niche</li>
                            <li><FaCheckSquare /> Industry smart content structure that fits exactly where it needs to</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWriteAbout