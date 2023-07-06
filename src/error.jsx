import '../src/style/error.css';
import React from 'react';
import Header from '../src/composant/header';
import Footer from './composant/footer'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div>
        
        <Header />

        <div className='error'>
            

            <h1>404</h1>
            
            <h2>Oups! La page que vous demandez n'existe pas.</h2>

            <li><Link to="/">Retourner sur la page d'acceuil</Link></li>
        </div>
            <Footer />
        </div>
    )
}
 
export default Error