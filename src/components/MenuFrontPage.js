import React from 'react'
import './MainPage.css'
import pizza from '../images/Main page/menuPizza.jpg'
import burger from '../images/Main page/brugerMenu.jpg'
import meals from '../images/Main page/thaliMenu.jpg'
import desert from '../images/Main page/icecreamMenu.jpg'
import drinks from '../images/Main page/drinkMenu.jpg'
import poha from '../images/Main page/poha.jpg'
import cholabhatura from '../images/Main page/cholabhatura.jpg'
import vegThali from '../images/Main page/vegthali.jpg'


export default function MenuFrontPage() {

    const dishSelect = (code)=>{
        let dishes = document.querySelectorAll('.fpS2Card');
        let ratings = document.querySelectorAll('.fpS2CardDishRate');
        let dish = dishes[code];
        let rating = ratings[code];
        if(dish.classList.contains('fpS2dishSelected')){
            dish.classList.remove('fpS2dishSelected');
            rating.classList.remove('fpS2RateSelected');
        }else{
            dish.classList.add('fpS2dishSelected');
            rating.classList.add('fpS2RateSelected');

        }
    }

    return (
        <div id='fpMenu'>
            <div id="fpSection1">
                <div id="fpS1CardHolder">
                    <div className="fpS1Card">
                        <img src={pizza} alt="Pizzaimg" className="fpS1CardImg" />
                        <div className="fpS1CardText">Pizza</div>
                    </div>
                    <div className="fpS1Card">
                        <img src={burger} alt="Burgerimg" className="fpS1CardImg" style={{ objectPosition: '0px -30px' }} />
                        <div className="fpS1CardText">Burger</div>
                    </div>
                    <div className="fpS1Card">
                        <img src={meals} alt="MealImg" className="fpS1CardImg" />
                        <div className="fpS1CardText">Meal</div>
                    </div>
                    <div className="fpS1Card">
                        <img src={desert} alt="DesertImg" className="fpS1CardImg" />
                        <div className="fpS1CardText">Desert</div>
                    </div>
                    <div className="fpS1Card">
                        <img src={drinks} alt="DrinksImg" className="fpS1CardImg" />
                        <div className="fpS1CardText">Drinks</div>
                    </div>
                </div>
            </div>
            <div id="fpSection2">
                <div id="fpS2Breakfast" className='fpS2Sections'>
                    <div className="fpS2Title">Breakfast :</div>
                    <div className="fpS2CardHolder">
                        <div className="fpS2Card" onClick={()=>{dishSelect(0)}}>
                            <img src={poha} alt="" className="fpS2CardImg" />
                            <div className="fpS2CardBottom">
                                <div className="fpS2CardLeft">
                                    <div className="fpS2CardDishName">Indore Special Poha</div>
                                    <div className="fpS2CardDishPrice">40Rs</div>
                                </div>
                                <div className="fpS2CardRight">
                                    <div className="fpS2CardDishRate">4.5</div>
                                    <div className="fpS2CardDishReview">99+ Reviews</div>
                                </div>
                            </div>
                        </div>
                        <div className="fpS2Card" onClick={()=>{dishSelect(1)}}>
                            <img src={cholabhatura} alt="" className="fpS2CardImg" />
                            <div className="fpS2CardBottom">
                                <div className="fpS2CardLeft">
                                    <div className="fpS2CardDishName">Delhi Special Chola Bhatura</div>
                                    <div className="fpS2CardDishPrice">90Rs</div>
                                </div>
                                <div className="fpS2CardRight">
                                    <div className="fpS2CardDishRate">4.5</div>
                                    <div className="fpS2CardDishReview">99+ Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fpS2Lunch" className='fpS2Sections'>
                    <div className="fpS2Title">Lunch/Dinner :</div>
                    <div className="fpS2CardHolder">
                        <div className="fpS2Card" onClick={()=>{dishSelect(2)}}>
                            <img src={meals} alt="" className="fpS2CardImg" />
                            <div className="fpS2CardBottom">
                                <div className="fpS2CardLeft">
                                    <div className="fpS2CardDishName">Special Indian Thali</div>
                                    <div className="fpS2CardDishPrice">200Rs</div>
                                </div>
                                <div className="fpS2CardRight">
                                    <div className="fpS2CardDishRate">4.5</div>
                                    <div className="fpS2CardDishReview">99+ Reviews</div>
                                </div>
                            </div>
                        </div>
                        <div className="fpS2Card" onClick={()=>{dishSelect(3)}}>
                            <img src={vegThali} alt="" className="fpS2CardImg" />
                            <div className="fpS2CardBottom">
                                <div className="fpS2CardLeft">
                                    <div className="fpS2CardDishName">Veg Thali</div>
                                    <div className="fpS2CardDishPrice">160Rs</div>
                                </div>
                                <div className="fpS2CardRight">
                                    <div className="fpS2CardDishRate">4.5</div>
                                    <div className="fpS2CardDishReview">99+ Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
