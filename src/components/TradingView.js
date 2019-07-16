import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class TradingView extends Component {

    render(){

    return (
        <div style={{marginTop:"5em"}}>
          <TradingViewWidget 
            symbol="NASDAQ:AAPL" theme={Themes.DARK} />
        </div>

    );
  }
}

export default TradingView;