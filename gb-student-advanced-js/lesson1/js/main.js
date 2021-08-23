"use strict"

const goods = [
    {id: 1, title: 'Вобла', price: 900 },
    {id: 2, title: 'Чехонь', price: 900},
    {id: 3, title: 'Лещ', price: 550},
    {id: 4, title: 'Сопа', price: 700},
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item">
                <img src="img/ryba.jpg" alt="ryba">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить рыбки</button>           
            </div>`;
};
  
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(",");
}
  
renderGoodsList(goods);