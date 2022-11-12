import React from "react";
import { BiLogIn } from "react-icons/bi";
import BTC from "../img/BTC.png";
import ETH from "../img/ETH.png";
import SOL from "../img/SOL.png";
import BUSD from "../img/BUSD.png";
import SHIB from "../img/SHIB.png";

const Home = () => {
  return (
    <div className="home">

      <div className="header">
        <BiLogIn className="toggle-icon" />
        <p className="header-title">Trending Assets</p>
      </div>

      {/* Assets */}
      <div className="tokens">

        {/* Asset-1 */}
        <div className="token-1">
          <img src="" alt="bitcoin" className="token-img" />
          <p className="token-name">Bitcoin (BTC)</p>
          <div className="token-price">
            <p className="current-price">$31,812.80</p>
            <p className="change-price">+30%</p>
          </div>
          <p>Price</p>
          <input type="number" className="token-amount" />
          <p>TVL</p>
          <div className="pair-img">
            <img src="" alt="sol" className="pair-1" />
            <img src="" alt="eth" className="pair-2" />
            <img src="" alt="binance" className="pair-3" />
          </div>
          <p>Popular pairs</p>
        </div>

        {/* Asset-2 */}
        {/* <div className="token-2">
          <img src="" alt="solana" className="token-img" />
          <p className="token-name">Solana (SOL)</p>
          <div className="token-price">
            <p className="current-price">$32.83</p>
            <p className="change-price">-12.32%</p>
          </div>
          <p>Price</p>
          <input type="number" className="token-amount" />
          <p>TVL</p>
          <div className="pair-img">
            <img src="" alt="btc" className="pair-1" />
            <img src="" alt="eth" className="pair-2" />
            <img src="" alt="binance" className="pair-3" />
          </div>
          <p>Popular pairs</p>
        </div> */}

        {/* Asset-3 */}
        {/* <div className="token-3">
          <img src="" alt="Eth" className="token-img" />
          <p className="token-name">ETHEREUM (ETH)</p>
          <div className="token-price">
            <p className="current-price">$1466.45</p>
            <p className="change-price">-11.93%</p>
          </div>
          <p>Price</p>
          <input type="number" className="token-amount" />
          <p>TVL</p>
          <div className="pair-img">
            <img src="" alt="sol" className="pair-1" />
            <img src="" alt="btc" className="pair-2" />
            <img src="" alt="binance" className="pair-3" />
          </div>
          <p>Popular pairs</p>
        </div> */}

        {/* Asset-4 */}
        {/* <div className="token-4">
          <img src="" alt="BUSD" className="token-img" />
          <p className="token-name">Binance USD (BUSD)</p>
          <div className="token-price">
            <p className="current-price">$1.00</p>
            <p className="change-price">+0.26%</p>
          </div>
          <p>Price</p>
          <input type="number" className="token-amount" />
          <p>TVL</p>
          <div className="pair-img">
            <img src="" alt="sol" className="pair-1" />
            <img src="" alt="eth" className="pair-2" />
            <img src="" alt="binance" className="pair-3" />
          </div>
          <p>Popular pairs</p>
        </div> */}

        {/* Asset-5 */}
        {/* <div className="token-5">
          <img src="" alt="SHIB" className="token-img" />
          <p className="token-name">Shiba Inu (SHIB)</p>
          <div className="token-price">
            <p className="current-price">$0.00000001948</p>
            <p className="change-price">-0.1%</p>
          </div>
          <p>Price</p>
          <input type="number" className="token-amount" />
          <p>TVL</p>
          <div className="pair-img">
            <img src="" alt="sol" className="pair-1" />
            <img src="" alt="eth" className="pair-2" />
            <img src="" alt="binance" className="pair-3" />
          </div>
          <p>Popular pairs</p>
        </div> */}

      </div>
    </div>
  );
};

export default Home;
