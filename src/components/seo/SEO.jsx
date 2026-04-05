import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  name = 'S-SQAnata Interior Design', 
  type = 'website' 
}) => {
  const fullTitle = `${title} | ${name}`;
  
  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={window.location.href} />
      
      {/* Open Graph Meta Tags for Social Media & iMessage Previews */}
      <meta property="og:image" content="https://ssqananta.com/og-image.jpg" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
