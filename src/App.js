import React from 'react';
import Gallery from '../src/composant/gallery';
import Header from '../src/composant/header';
import Banner from './composant/banner'
import Footer from '../src/composant/footer'
import logo1 from '../src/assets/Background.png';



function App() {
  return (
    <div>
       <Header />

       <Banner image={logo1} text="Chez vous, partout et ailleurs" />
       

       <Gallery />
       <Footer />
    </div>
  );
}

export default App;



