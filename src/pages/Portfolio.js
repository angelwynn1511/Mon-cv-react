import React from "react";
import PortfolioAllomovieAccueil from "../assets/PortfolioAllomovieAccueil.jpg";
import PortfolioAllomovieDetail from "../assets/PortfolioAllomovieDetail.jpg";
import PortfolioAllomovieRecherche from "../assets/PortfolioAllomovieRecherche.jpg";
import PortfolioBishAccueil from "../assets/PortfolioBishAccueil.jpg";
import PortfolioBishAccueilMobile from "../assets/PortfolioBishAccueilMobile.jpg";
import PortfolioBishAdminBlog from "../assets/PortfolioBishAdminBlog.jpg";
import PortfolioBishAdminCreateBlog from "../assets/PortfolioBishAdminCreateBlog.jpg";
import PortfolioBishAPI from "../assets/PortfolioBishAPI.jpg";
import PortfolioBishArticleBlogMobile from "../assets/PortfolioBishArticleBlogMobile.jpg";
import PortfolioBishArticleBlogMoi from "../assets/PortfolioBishArticleBlogMoi.jpg";
import PortfolioBishBlogs from "../assets/PortfolioBishBlogs.jpg";
import PortfolioBishBlogsMobile from "../assets/PortfolioBishBlogsMobile.jpg";
import PortfolioBishProduits from "../assets/PortfolioBishProduits.jpg";
import PortfolioBishRequete from "../assets/PortfolioBishRequete.jpg";

const Portfolio = () => {
  return <div className="main">
    <h1>Portfolio</h1>

      <div className="projet">
        <h3>Allomovie</h3>
        <img src={PortfolioAllomovieAccueil} alt="allomovie" className="portfolio"></img>
        <p>Projet solo travaillé lors de ma formation à l'incubateur d'Euratechnologies</p>
        <h4>Technologies</h4>
        <p>React</p>
        
      </div>
      <div className="projet">
        <h3>Bish</h3>
        <img src={PortfolioBishAccueil} alt="allomovie" className="portfolio"></img>
        <p>Projet en équipe travaillé lors de ma formation à l'Incubateur d'Euratechnologies</p>
        <h4>Technologies</h4>
        <p>React, Symfony</p>
      </div>

    </div>;
};

export default Portfolio;
