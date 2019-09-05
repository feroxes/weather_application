import React from 'react';
import './detailsScreen.scss';

function DetailsScreen() {
  return (
    <div className="blur-background">
      <div className="details-screen-wrapper">
        <section className="details-section">
          <h2 className="details-section-title">Details</h2>
          <div className="details-block">
            <div className="details-icon">
              <img src={require('../../assets/images/icons/rain.png')} alt="Weather icon" />
            </div>
            <div className="details-info">
              <div className="details-info-item">
                <p>Feels like</p>
                <span>3 °</span>
              </div>
              <div className="details-info-item">
                <p>Humidity</p>
                <span>33 %</span>
              </div>
              <div className="details-info-item">
                <p>Visibility</p>
                <span>10 km</span>
              </div>
              <div className="details-info-item">
                <p>UV Index</p>
                <span>Low 1</span>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-section-title">Precipitation</h2>
          <div className="precipitation-block">
            <div className="precipitation-item">
              <p>Morning</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Midday</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Evening</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Night</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-section-title">Wind & Pressure</h2>
          <div className="wind-and-pressure-block">
            <div className="mills">
              <img
                className="mill-big"
                src={require('../../assets/images/icons/windmill-mid.gif')}
                alt="Mill"
              />
              <img
                className="mill-small"
                src={require('../../assets/images/icons/windmill-mid.gif')}
                alt="Mill"
              />
              <p className='wind-speed'>6 mph</p>
            </div>
            <div className="pressure">
              <p>Barometer</p>
              <span>29.5 inches</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailsScreen;
