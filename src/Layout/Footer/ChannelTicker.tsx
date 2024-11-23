"use client"

import './footer.css'
const ChannelTicker = ({ items, speed = 15 }:any) => {
  return (
    <div className="footer-ticker">
      <div
        className="ticker"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((item:any, index:any) => (
          <span key={index} className="ticker-item">
            {item.title}
          </span>
        ))}
      </div>
    </div>
  )
};

export default ChannelTicker;
