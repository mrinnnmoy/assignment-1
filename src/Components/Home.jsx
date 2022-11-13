import React from "react";
import { BiLogIn } from "react-icons/bi";
import BTC from "../img/BTC.png";
import ETH from "../img/ETH.png";
import SOL from "../img/SOL.jpg";
import BUSD from "../img/BUSD.png";
import SHIB from "../img/SHIB.jpg";

const Home = () => {
  return (
    <div className="home">

      <div className="header">
        <BiLogIn className="toggle-icon" />
        <p className="header-title">Trending Assets</p>
      </div>

      {/* Assets */}
      <div className="tokens">

        {/* Token-1 */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-orbe"></div>
            <img src={BTC} alt="bitcoin" className="token-img" />
          </div>
          <p className="token-name">Bitcoin (BTC)</p>
          <div className="token-price">
            <p className="current-price">$31,812.80</p>
            <p className="change-price">+30%</p>
          </div>
          <p className="price">Price</p>
          <input type="number" placeholder="Enter Amount" className="token-amount" />
          <p className="tvl">TVL</p>
          <div className="pair-img">
            <img src={SOL} alt="sol" className="pair-1" />
            <img src={ETH} alt="eth" className="pair-2" />
            <img src={BUSD} alt="binance" className="pair-3" />
          </div>
          <p className="popular">Popular pairs</p>
        </div>

        {/* Token-2 */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-orbe"></div>
            <img src={SOL} alt="solana" className="token-img" />
          </div>
          <p className="token-name">Solana (SOL)</p>
          <div className="token-price">
            <p className="current-price">$32.83</p>
            <p className="change-price-negative">-12.32%</p>
          </div>
          <p className="price">Price</p>
          <input type="number" placeholder="Enter Amount" className="token-amount" />
          <p className="tvl">TVL</p>
          <div className="pair-img">
            <img src={BTC} alt="btc" className="pair-1" />
            <img src={ETH} alt="eth" className="pair-2" />
            <img src={BUSD} alt="binance" className="pair-3" />
          </div>
          <p className="popular">Popular pairs</p>
        </div>

        {/* Token-3 */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-orbe"></div>
            <img src={ETH} alt="Eth" className="token-img" />
          </div>
          <p className="token-name">Ethereum (ETH)</p>
          <div className="token-price">
            <p className="current-price">$1466.45</p>
            <p className="change-price-negative">-11.93%</p>
          </div>
          <p className="price">Price</p>
          <input type="number" placeholder="Enter Amount" className="token-amount" />
          <p className="tvl">TVL</p>
          <div className="pair-img">
            <img src={SOL} alt="sol" className="pair-1" />
            <img src={BTC} alt="btc" className="pair-2" />
            <img src={BUSD} alt="binance" className="pair-3" />
          </div>
          <p className="popular">Popular pairs</p>
        </div>

        {/* Token-4 */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-orbe"></div>
            <img src={BUSD} alt="BUSD" className="token-img" />
          </div>
          <p className="token-name">Binance USD (BUSD)</p>
          <div className="token-price">
            <p className="current-price">$1.00</p>
            <p className="change-price">+0.26%</p>
          </div>
          <p className="price">Price</p>
          <input type="number" placeholder="Enter Amount" className="token-amount" />
          <p className="tvl">TVL</p>
          <div className="pair-img">
            <img src={SOL} alt="sol" className="pair-1" />
            <img src={ETH} alt="eth" className="pair-2" />
            <img src={BUSD} alt="binance" className="pair-3" />
          </div>
          <p className="popular">Popular pairs</p>
        </div>

        {/* Token-5 */}
        <div className="token-box">
          <div className="token-header">
            <div className="token-orbe"></div>
            <img src={SHIB} alt="SHIB" className="token-img" />
          </div>
          <p className="token-name">Shiba Inu (SHIB)</p>
          <div className="token-price">
            <p className="current-price">$0.00000001948</p>
            <p className="change-price-negative">-0.1%</p>
          </div>
          <p className="price">Price</p>
          <input type="number" placeholder="Enter Amount" className="token-amount" />
          <p className="tvl">TVL</p>
          <div className="pair-img">
            <img src={SOL} alt="sol" className="pair-1" />
            <img src={ETH} alt="eth" className="pair-2" />
            <img src={BUSD} alt="binance" className="pair-3" />
          </div>
          <p className="popular">Popular pairs</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
