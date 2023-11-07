import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'project1.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'project2.jpg',
      link: 'https://example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-list">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
