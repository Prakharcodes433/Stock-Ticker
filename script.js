 import {getStockData}  from './fakeStockAPi.js'

setInterval(function(){
  const stockData = getStockData()
  renderStockTicker(stockData)
},1000)

let prevprice = null

function renderStockTicker(stockData){
  const stockDislayName = document.getElementById("name")
  const stockDislaySymbol = document.getElementById("symbol")
  const stockDislayPrice = document.getElementById("Price")
  const stockDislayTime = document.getElementById("time")
  const stockDislayPriceIcon = document.getElementById("price-icon")
  const {name ,sym ,Price ,time} = stockData 
  const priceDirectionicon = Price > prevprice ? '🟢' : '🔴';
  
  prevprice = Price

  stockDislayPriceIcon.innerText = ''
  stockDislayName.innerText = name
  stockDislaySymbol.innerText = sym
  stockDislayPrice.innerText = Price
  stockDislayTime.innerText = time
  stockDislayPriceIcon.innerText = priceDirectionicon
}