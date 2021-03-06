import React from 'react';
import imgBc from './img/blockchain-3446557_1920.jpg';
import imgStop from './img/james-lee-y15-SmlLTe8-unsplash.jpg';
import imgWant from './img/michael-browning-LmxoicGTLDQ-unsplash.jpg';
import imgIdea from './img/mark-fletcher-brown-nN5L5GXKFz8-unsplash.jpg';
import imgNFT from './img/chain-5842371_1920.jpg';

function Service() {
    return (
        <div className="service-container">
        <div className="service">
            <h2>SERVICE</h2>
        </div>
        <div className="service-card1">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgNFT} alt=""/>
            <div className="service-explain1">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                        <h1>NFT技術を用いた『作品管理プラットフォーム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>NFTにより唯一性を保証、所有者情報を明確に保持します。つまり作品に対しNFTを発行することで所有権・唯一性の主張が可能になります。</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card2">
            <div className="gray-box"></div>
            <img className="service-img2" src={imgBc} alt=""/>
            <div className="service-explain2">
                <div className="explain-inner">
                    <div className="explanation-inner-title">
                        <h1>NFTと暗号通貨の切り離し</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>既存のNFTの発行には暗号通貨が必要であり参入ハードルが高まる原因になりがち。そこで我々はあえて切り離すというNFTへの新しいアプローチを提案します。</p>
                        <p>"非Crptpo的なNFTの活用"と位置付け、NFTに触れたことのないユーザーへNFTに触れる体験を提供することが私たちの目的です。</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card3">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgIdea} alt=""/>
            <div className="service-explain1">
                <div className="eplanation-inner">
                    <div className="explanation-inner-title">
                        <h1>『俺が先だがシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>トークンのタイムスタンプを根拠に「俺が先だが?」ができるシステム。「全く同じ画像」の発行を拒否する仕組みにより偽物の発行は不可になります。</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card4">
            <div className="gray-box"></div>
            <img className="service-img2" src={imgWant} alt=""/>
            <div className="service-explain2">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                    <h1>『それ欲しいシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>アカウント名を指定してトークンを移転することが可能になるシステム。Tap!のプラットフォーム上での金銭的なやりとりは一切発生させません。</p>
                        <p>Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-card5">
            <div className="gray-box"></div>
            <img className="service-img1" src={imgStop} alt=""/>
            <div className="service-explain1">
                <div className="explanation-inner">
                    <div className="explanation-inner-title">
                        <h1>『ちょっと待てシステム』</h1>
                    </div>
                    <div className="explanation-inner-sentence">
                        <p>ブロックチェーンを活用し、参加者による認証システムを用意します。不正なトークンが発行された場合はトークンに対して「ちょっと待て」することが可能で、対象のトークンにはフラグが建てられ参加者による検証が始まります。期間内に所定数以上の不正報告があればトークンは焼却orブロックが破棄されるシステムです。</p>
                        <p>Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

  export default Service;