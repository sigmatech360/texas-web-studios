import React from 'react'

const BlogWritingWork = () => {
  return (
    <section className='blogwriting-work-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blogwriting-work-head">
                        <h6 className='shorttop-head'>How It Works</h6>
                        <h2 className='mainhead'>The Process of Creating a Polished Blog</h2>
                        <p>A well-written blog is never a coincidence; we plan each of our blogs with a process that ensures your words connect. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-one">
                        <h5>01</h5>
                        <h4>Outline Planning</h4>
                        <p>We map out your blog with a strong structure that identifies key talking points, user intent, flow, and the value your audience should take from the content.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-two">
                        <h5>02</h5>
                        <h4>SEO Strategy</h4>
                        <p>We integrate targeted keywords, internal links, competitive analysis, and search intent to shape a blog that performs in today’s fast-evolving ranking environment.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blogwriting-work-card wordcard-blog-three">
                        <h5>03</h5>
                        <h4>Creative Writing</h4>
                        <p>Your blog comes to life with storytelling, clarity, brand personality, and engaging pacing that keeps readers hooked from the first sentence to the last.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogWritingWork