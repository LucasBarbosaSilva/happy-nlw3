import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mapLogoMaker from '../image/local.svg';
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import '../styles/pages/opharnages.css'

function OpharnagesMap (){
    return (
        <div className="page-map">
            <aside>
                <header>
                    <img src={mapLogoMaker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando pela sua visita :)</p>
                </header>

                <footer>
                    <strong>Alagoas</strong>
                    <span>Arapiraca</span>
                </footer>
            </aside>

            <Map
                center={[-9.7452032,-36.6444544]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`} 
                /> */}
            </Map>

            <Link to="" id="create-opharnage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OpharnagesMap;