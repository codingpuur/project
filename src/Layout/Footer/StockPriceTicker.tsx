import './footer.css'

const StockPriceTicker = ({ stocks, speed = 15 }:any) => {
  return (
    <div className="stock-price-ticker">
      <div
        className="ticker"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {stocks.map((stock:any, index:any) => (
          <span key={index} className="ticker-item">
            <strong>{stock.ticker}</strong>: ${stock.price}{' '}
            <span
              className={
                stock.day_change > 0 ? 'stock-up' : 'stock-down'
              }
            >
              ({stock.day_change > 0 ? '+' : ''}
              {stock.day_change})
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default StockPriceTicker;
