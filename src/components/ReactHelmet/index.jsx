import React from "react";
import { Helmet } from "react-helmet";

const webUrl = import.meta.env.VITE_WEB_URL;
const wpUrl = import.meta.env.VITE_WP_BASE_URL;


const ReactHelmet = ({
  title = "Texas Web Studios || Custom Web Design and Development that drives results",
  description = "Custom Web Design and Development that drives results. Get a stunning, fast, and user-friendly website tailored to your brand. Let’s build success!",
  keywords = "web development, custom website, react development, logo design, digital marketing, social media marketing, web design",
  url = { webUrl },
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} data-react-helmet="true" />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

export default ReactHelmet;
