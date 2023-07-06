import React, { useState } from "react";
import Header from "../src/composant/header";
import Carrousel from "../src/composant/carrousel";
import LogementTitre from "../src/composant/logementTitre";
import LogementPropriétaire from "../src/composant/logementPropriétaire";
import Footer from "../src/composant/footer";
import CollapseLogements from "../src/composant/collapseLogement";
import Tag from "../src/composant/tag";
import Rate from "../src/composant/rate";
import ArrowCarrousel from "../src/composant/arrowcarrousel";
import { logementList } from "../src/composant/logementListe";
import { useParams } from "react-router-dom";
import Error from "../src/error"
import "../src/style/logements.css";



function Logements() {
    const { id } = useParams();
    const logement = logementList.find((logement) => logement.id === id);
    const rates = [1, 2, 3, 4, 5];
    const [activeCarrousel, setActiveBanner] = useState(0);
  
    const handleClickNextBanner = () => {
      if (activeCarrousel === logement.pictures.length - 1) {
        setActiveBanner(0);
      } else {
        setActiveBanner(activeCarrousel + 1);
      }
    };
  
    const handleClickPreviousBanner = () => {
      if (activeCarrousel === 0) {
        setActiveBanner(logement.pictures.length - 1);
      } else {
        setActiveBanner(activeCarrousel - 1);
      }
    };
  
    if (!logement) {
      return <Error />;
    }
    return (
      <div>
        <Header />
        
        <div className="logement-banner">
  <div>
    <ArrowCarrousel
      onClick={handleClickPreviousBanner}
      className={logement.pictures.length > 1 ? "gauche" : null}
      direction="left"
    />
    <ArrowCarrousel
      onClick={handleClickNextBanner}
      className={logement.pictures.length > 1 ? "droite" : null}
      direction="right"
    />
          </div>
          {logement.pictures.map((e, index) => (
            <Carrousel
              className={`img-banner ${
                index === activeCarrousel ? "active-banner" : ""
              }`}
              key={index}
              imgSrc={e}
              title={`${logement.title} - Bannière n°${activeCarrousel + 1}`}
            />
          ))}
          <span className="counter">
            {logement.pictures.length > 1
              ? `${activeCarrousel + 1}/${logement.pictures.length}`
              : null}
          </span>
        </div>
        <div className="description-zone">
          <div className="logement-title-and-description">
            <LogementTitre title={logement.title} location={logement.location} />
            <div className="tag-zone">
              {logement.tags.map((e, index) => (
                <Tag key={index} tag={e} />
              ))}
            </div>
          </div>
          
          <div className="logement-host-and-rates">
            <div>
              <LogementPropriétaire
                hostPicture={logement.host.picture}
                hostName={logement.host.name}
              />
            </div>



            <div>
              {rates.map((e, index) => (
                <Rate
                  key={index}
                  color={parseInt(logement.rating) >= e ? "colored" : ""}
                />
              ))}
            </div>
          </div>
        </div>


        <ul className="collapses">
          <CollapseLogements
            label="Description"
            description={logement.description}
            openByDefault={false}
          />
          <CollapseLogements
            label="Équipements"
            description={logement.equipments.map((e, index) => (
              <span key={index}>{e}</span>
            ))}
            openByDefault={false}
          />
        </ul>
        <Footer />
      </div>
    );
  }
  
  export default Logements;
