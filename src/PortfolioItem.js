import React from 'react';

const PortfolioItem = ({ title, description, imageUrl, link }) => (
  <div className="portfolio-item">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

export default PortfolioItem;
