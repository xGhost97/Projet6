import React from "react";
import Card from "../composant/card";
import { logementList } from "../composant/logementListe";
import "../style/gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      {logementList.map((e) => (
        <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
      ))}
    </div>
  );
}

export default Gallery;