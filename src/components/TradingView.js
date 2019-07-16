import React, { Component } from 'react';
import "./TradingView.scss";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class TradingView extends Component {

    render(){

    return (
      
      <div className="grid-test">

        <div className="row">
              <div className="col-1-of-3">
              <TradingViewWidget id="widget"
              symbol="NASDAQ:AAPL" theme={Themes.DARK} />
              </div>
              <div className="col-1-of-3">
               2nd
              </div>
              <div className="col-1-of-3">
                3rd
              </div>
        </div>
      

      </div>
      
      
      

    );
  }
}

export default TradingView;




                // <div className="col-1-of-3" style={{marginTop:"5em"}}>
                // <TradingViewWidget 
                // symbol="NASDAQ:AAPL" theme={Themes.DARK} />
                // </div>


