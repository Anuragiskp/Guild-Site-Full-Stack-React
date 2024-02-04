import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faShield, faGem, faGavel, faGears, faUserSecret } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
    return (
        <div className="market">
          <div className="market-container">
            <div className="title">
              <h3>🌟Our Services🌟</h3>
            </div>
            <div className="market-grid">
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                    <FontAwesomeIcon icon={faGem} />
                  </div>
                  <div className="icon-right">
                    <h5>Gemruns</h5>
                    <p>Gemruns are done for every good event in the guild(if possible).</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                    <FontAwesomeIcon icon={faGavel} />
                  </div>
                  <div className="icon-right">
                    <h5>Crafting</h5>
                    <p>Any items can be crafted on demand, when materials are provided, free of charge.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                    <FontAwesomeIcon icon={faGears} />
                  </div>
                  <div className="icon-right">
                    <h5>Statting</h5>
                    <p>Members can have their items stated by guild staters for free if they provide all
                                mats.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                  <FontAwesomeIcon icon={faShield} />
                  </div>
                  <div className="icon-right">
                    <h5>Refining</h5>
                    <p>Members can have their items refined by guild refiners at discounted price.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                    <FontAwesomeIcon icon={faGamepad} />
                  </div>
                  <div className="icon-right">
                    <h5>Builds</h5>
                    <p>Custom/best builds are provided to members for every weapon if they want it.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-4 w3ls-market-grid">
                <div className="market-icon-grid">
                  <div className="icon-left">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="icon-right">
                    <h5>Information</h5>
                    <p>Every question of members are answered and each one of their queries are solved.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    );
}