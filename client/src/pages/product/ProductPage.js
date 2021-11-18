import React from 'react';
import CartIconSmall from "../../components/icons/CartIconSmall";
import BoxIcon from "../../components/icons/BoxIcon";


function ProductPage() {
    return (
        <div className="productPage">
            <div className="container">
                <div className="productPage__product">
                    <div className="productPage__product-name">
                        <h1>Apple iPhone 13 Pro Max 512 GB</h1>
                    </div>

                    <div className="productPage__product-row">
                        <div className="productPage__product-img">
                            <img src="https://assets.asaxiy.uz/product/items/desktop/8a663cfc674567241222b5d7fa290a0520210925132842804199otuDgTXto.jpg" alt="product_img"/>
                        </div>

                        <div className="productPage__product-content">
                            <div className="productPage__product-price">
                                <h3>17 325 000 UZS</h3>
                            </div>

                            <p className="productPage__product-text">Rang: Gold</p>

                            <div className="productPage__product-images">
                                <div className="productPage__product-imgWrap">
                                    <img src="https://assets.asaxiy.uz/product/items/desktop/8a663cfc674567241222b5d7fa290a0520210925132842804199otuDgTXto.jpg" alt="product_img"/>
                                </div>
                                <div className="productPage__product-imgWrap">
                                    <img src="https://assets.asaxiy.uz/product/items/desktop/8a663cfc674567241222b5d7fa290a0520210925132842804199otuDgTXto.jpg" alt="product_img"/>
                                </div>
                                <div className="productPage__product-imgWrap">
                                    <img src="https://assets.asaxiy.uz/product/items/desktop/8a663cfc674567241222b5d7fa290a0520210925132842804199otuDgTXto.jpg" alt="product_img"/>
                                </div>
                            </div>

                            <p className="productPage__product-text">Xotira: 512 Gb</p>
                            <p className="productPage__product-text">Soni: 512 Gb</p>
                            <p className="productPage__product-text">Holati: Sotuvda bor</p>

                            <div className="product__btns">
                                <button className="product__btn product__btn-add">
                                    <span className="product__btn-icon">
                                        <CartIconSmall/>
                                    </span>
                                    <span className="product__btn-text">
                                        Savatga qo’shish
                                    </span>
                                </button>

                                <button className="product__btn product__btn-order">
                                           <span className="product__btn-icon">
                                                <BoxIcon/>
                                           </span>
                                    <span className="product__btn-text">
                                               Buyurtma berish
                                           </span>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="productPage__product-info">
                        <div className="productPage__product-info-title">
                            <h3>Mahsulot haqida</h3>
                        </div>

                        <div className="productPage__product-info-texts">
                            <p className="productPage__product-info-text">
                                <span className="text_one">Тип</span>
                                -
                                <span className="text_two">Смартфон</span>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;