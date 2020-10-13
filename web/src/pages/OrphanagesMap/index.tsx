import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './orphanagesMap.scss';

import mapMarkerImg from '../../assets/map-marker.svg';
import plusIcon from '../../assets/icons/plus.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Traipu</strong>
          <span>Alagoas</span>
        </footer>
      </aside>

      <Map 
        center={[-9.970165, -37.003063]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer 
          url={
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />
      </Map>

      <Link to="/" className="create-orphanage">
        <img src={plusIcon} alt="Criar Orfanato"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;