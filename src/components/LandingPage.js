import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import pizza from '../images/pizza.jpg'
import fries from '../images/fries.jpg'
import daliya from '../images/daliya.jpg'
import iceCream from '../images/icecream.jpg'
import blueberry from '../images/blueberry.jpg'
import delivery from '../images/delivery_2000p.jpg'
import payment from '../images/payment.jpg'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-scroll'

export default function LandingPage() {
    let isHovering = false;
    useEffect(() => {
        startSection2();
        startCarousel();
    })
    function startCarousel() {
        let n = 0;
        let imgs = document.querySelectorAll('.lpCaroImg');
        let fontSize = parseFloat(window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size'));
        let pageWidth = imgs[0].offsetWidth;
        let p = (pageWidth/fontSize).toFixed(2);
        let rev = false;

        for(let i =0; i<imgs.length;i++){
            let leftAm = p * i;
            imgs[i].style.left = leftAm + 'rem';
        }
        setInterval(() => {
            if (rev) {
                for (let i = 1; i <= imgs.length; i++) {
                    let oldPos = imgs[i - 1].style.left;
                    oldPos = oldPos.split('rem')[0];
                    p = parseFloat(p);
                    oldPos = parseFloat(oldPos);
                    let newPos = oldPos + p;
                    imgs[i - 1].style.left = `${newPos}rem`;
                }
                n--;
            } else {
                for (let i = 1; i <= imgs.length; i++) {
                    let oldPos = imgs[i - 1].style.left;
                    oldPos = oldPos.split('rem')[0];
                    let newPos = oldPos - p;
                    imgs[i - 1].style.left = `${newPos}rem`;
                }
                n++;
            }
            if (n === 0) {
                rev = false;
            } else if (n >= 4) {
                rev = true;
            }
        }, 5000);
    }
    function startSection2() {
        let count = 2;
        let imgArr = [blueberry, delivery, payment];
        let section = document.querySelector('#lpS2BG');
        section.style.transform = 'scale(1)';
        let cards = document.querySelectorAll('.lpS2Card');
        for (let i = 1; i <= cards.length; i++) {
            if (i !== 1) {
                cards[i - 1].style.backgroundColor = 'transparent';
                cards[i - 1].style.border = '5px solid grey';
                cards[i - 1].style.color = 'grey';
                cards[i - 1].style.backdropFilter = 'blur(0px)';
            } else {
                cards[i - 1].style.backgroundColor = 'transparent';
                cards[i - 1].style.border = '5px solid white';
                cards[i - 1].style.color = 'white';
                cards[i - 1].style.backdropFilter = 'blur(10px)';
            }
        }
        setInterval(() => {
            if (!isHovering) {
                if (count === 4) {
                    count = 1;
                }
                let section = document.querySelector('#lpS2BG');
                section.style.backgroundImage = `url(${imgArr[count - 1]})`
                if (count === 1) {
                    section.style.backgroundImage = `url(${blueberry})`;
                    section.style.opacity = '1';
                    section.style.transform = 'scale(1)';
                    for (let i = 1; i <= cards.length; i++) {
                        if (i !== count) {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid grey';
                            cards[i - 1].style.color = 'grey';
                            cards[i - 1].style.backdropFilter = 'blur(0px)';

                        } else {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid white';
                            cards[i - 1].style.color = 'white';
                            cards[i - 1].style.backdropFilter = 'blur(10px)';

                        }
                    }
                }
                else if (count === 2) {
                    section.style.backgroundImage = `url(${delivery})`;
                    section.style.opacity = '1';
                    section.style.transform = 'scale(1)';
                    for (let i = 1; i <= cards.length; i++) {
                        if (i !== count) {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid grey';
                            cards[i - 1].style.color = 'grey';
                            cards[i - 1].style.backdropFilter = 'blur(0px)';

                        } else {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid black';
                            cards[i - 1].style.color = 'black';
                            cards[i - 1].style.backdropFilter = 'blur(10px)';

                        }
                    }
                } else if (count === 3) {
                    section.style.backgroundImage = `url(${payment})`;
                    section.style.opacity = '1';
                    section.style.transform = 'scale(1)';
                    for (let i = 1; i <= cards.length; i++) {
                        if (i !== count) {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid grey';
                            cards[i - 1].style.color = 'grey';
                            cards[i - 1].style.backdropFilter = 'blur(0px)';

                        } else {
                            cards[i - 1].style.backgroundColor = 'transparent';
                            cards[i - 1].style.border = '5px solid black';
                            cards[i - 1].style.color = 'black';
                            cards[i - 1].style.backdropFilter = 'blur(10px)';

                        }
                    }
                }
                count++;
            }
        }, 3000);
    }
    const showAbout = (code) => {
        let section = document.querySelector('#lpS2BG');
        let cards = document.querySelectorAll('.lpS2Card');
        if (code === 0) {
            isHovering = false;
        } else if (code === 1) {
            isHovering = true;
            section.style.backgroundImage = `url(${blueberry})`;
            section.style.opacity = '1';
            section.style.transform = 'scale(1)';
            for (let i = 1; i <= cards.length; i++) {
                if (i !== code) {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid grey';
                    cards[i - 1].style.color = 'grey';
                    cards[i - 1].style.backdropFilter = 'blur(0px)';
                } else {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid white';
                    cards[i - 1].style.color = 'white';
                    cards[i - 1].style.backdropFilter = 'blur(10px)';
                }
            }
        }
        else if (code === 2) {
            isHovering = true;

            section.style.backgroundImage = `url(${delivery})`;
            section.style.opacity = '1';
            section.style.transform = 'scale(1)';
            for (let i = 1; i <= cards.length; i++) {
                if (i !== code) {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid grey';
                    cards[i - 1].style.color = 'grey';
                    cards[i - 1].style.backdropFilter = 'blur(0px)';
                } else {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid black';
                    cards[i - 1].style.color = 'black';
                    cards[i - 1].style.backdropFilter = 'blur(10px)';
                }
            }
        } else if (code === 3) {
            isHovering = true;

            section.style.backgroundImage = `url(${payment})`;
            section.style.opacity = '1';
            section.style.transform = 'scale(1)';
            for (let i = 1; i <= cards.length; i++) {
                if (i !== code) {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid grey';
                    cards[i - 1].style.color = 'grey';
                    cards[i - 1].style.backdropFilter = 'blur(0px)';
                } else {
                    cards[i - 1].style.backgroundColor = 'transparent';
                    cards[i - 1].style.border = '5px solid black';
                    cards[i - 1].style.color = 'black';
                    cards[i - 1].style.backdropFilter = 'blur(10px)';
                }
            }
        }
    }
    function showMenu(code) {
        let imgs = document.querySelectorAll('.lpS3MenuImg');
        imgs.forEach(ele => {
            ele.style.opacity = 0;
            ele.style.transform = 'scale(0.9)';
        });
        if (code === 0) {
            return;
        } else {
            imgs[code - 1].style.opacity = 1;
            imgs[code - 1].style.transform = 'scale(1)';
        }
    }
    const [username, setUsername] = useState('username');
    const [message, setMessage] = useState('Post a temporary review it will be erased once you refresh this page');
    const [words, setWordCount] = useState(68);
    const changeUsername = () => {
        let val = document.querySelector('#lpS4ReviewUsernameInp').value;
        if (val.length > 20) return;
        val = val.split(' ');
        val = val.join('-');
        document.querySelector('#lpS4ReviewUsernameInp').style.borderColor = 'black';
        setUsername(val);
    }
    const changeMessage = () => {
        let val = document.querySelector('#lpS4ReviewMessageInp').value;
        let wordCount = val.length;
        document.querySelector('#lpS4ReviewMessageInp').style.borderColor = 'black';
        if (wordCount > 120) {
            return;
        }
        setWordCount(wordCount);
        setMessage(val);
    }
    function getImg() {
        let inp = document.querySelector('#imgFile');
        let url = URL.createObjectURL(inp.files[0]);
        let rev = document.querySelectorAll('.lpS4ReviewImg');
        rev[2].style.backgroundImage = `url(${url})`;
        rev[1].style.backgroundImage = `url(${url})`;
    }
    function postReview() {
        if (username.length < 3) {
            let inpField = document.querySelector('#lpS4ReviewUsernameInp');
            inpField.style.borderColor = 'red';
            inpField.classList.add('lpWrongInp');
            inpField.addEventListener('animationend', () => {
                inpField.classList.remove('lpWrongInp');
            })
            return;
        }
        if (message.length < 3) {
            let inpField = document.querySelector('#lpS4ReviewMessageInp');
            inpField.style.borderColor = 'red';
            inpField.classList.add('lpWrongInp');
            inpField.addEventListener('animationend', () => {
                inpField.classList.remove('lpWrongInp');
            });
            return;
        }
        let inpForm = document.querySelector('#lpS4ReviewInput');
        let customReview = document.querySelector('#lpS4CustomReview');
        inpForm.style.display = 'none';
        customReview.classList.remove('lphidden');
        setTimeout(() => {
            customReview.style.opacity = '1';
            customReview.style.transform = 'translateY(0)';
        }, 1);
    }
    function postLike(code) {
        let hearts = document.querySelectorAll('.lpS4ReviewHeart');
        for (let i = 0; i < hearts.length; i++) {
            if (i === (code - 1)) {

                if (hearts[i].classList.contains('lpLiked')) {
                    hearts[i].classList.remove('lpLiked');
                } else {
                    hearts[i].classList.add('lpLiked');
                }
            }
        }
    }
    function formInpClicked(code) {
        let inpFields = document.querySelectorAll('.lpS5InpField');
        let labels = document.querySelectorAll('.lpS5Label');
        for (let i = 0; i < inpFields.length; i++) {
            if (!inpFields[i].value) {
                labels[i].style.top = '0.938rem';
                labels[i].style.fontSize = '1.875rem';
            }
        }
        labels[code - 1].style.top = '-1.125rem';
        labels[code - 1].style.fontSize = '1.5rem';
    }
    function inpChange(code) {
        let label = document.querySelectorAll('.lpS5Label')[code];
        label.style.top = '-1.125rem';
        label.style.fontSize = '1.5rem';
    }
    return (
        <>
            <div className="lpSection" id='lpSection1'>
                <div className="lpGrayscale"></div>
                <div id="lpCarousel">
                    <div className="lpCaroImg" style={{ left: '0rem', backgroundImage: `url(${pizza})` }}></div>
                    <div className="lpCaroImg" style={{ left: '105.625rem', backgroundImage: `url(${fries})` }}></div>
                    <div className="lpCaroImg" style={{ left: '211.25rem', backgroundImage: `url(${daliya})` }}></div>
                    <div className="lpCaroImg" style={{ left: '316.875rem', backgroundImage: `url(${iceCream})` }}></div>
                    <div className="lpCaroImg" style={{ left: '422.5rem', backgroundImage: `url(${blueberry})` }}></div>
                </div>
                <div id='lpSection1Con'>
                    <div id="lpNavbar">
                        <div id="lpLogo">Food<span>ie</span></div>
                        <div id="lpNavBtns">
                            <ul>
                                <li><button type='button' id='lpSearchImg'></button></li>
                                <li className='lpNavBtnLi'><a href="lpSection1" id='lpNavBtn'>Home</a></li>
                                <li className='lpNavBtnLi'><Link to='lpSection2' spy={true} duration={500}>About</Link></li>
                                <li className='lpNavBtnLi'><Link to='lpSection3' spy={true} duration={500}>Menu</Link></li>
                                <li className='lpNavBtnLi'><Link to='lpSection4' spy={true} duration={500}>Review</Link></li>
                                <li className='lpNavBtnLi'><Link to='lpSection5' spy={true} duration={500}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div id="lpHead">
                        <div id="lpTitle">Food<span>ie</span><br /><span>Order Best Food Online</span></div>
                        <a href='/'><div id="lpOrderButton">Order Now</div></a>
                    </div>
                </div>
            </div>
            <div className="lpSection" id='lpSection2'>
                <div id="lpS2BG"></div>
                <div id="lpSection2Title">Welcome To Foodie<br /><span>India's One of the best Food Site</span></div>
                <div id="lpStarHolder">
                    <div className="lpStar" style={{ animationDelay: '0.2s' }}></div>
                    <div className="lpStar" style={{ animationDelay: '0.4s' }}></div>
                    <div className="lpStar" style={{ animationDelay: '0.6s' }}></div>
                    <div className="lpStar" style={{ animationDelay: '0.8s' }}></div>
                    <div className="lpStar" style={{ animationDelay: '1s' }}></div>
                </div>
                <div id="lpS2CardHolder">
                    <div className="lpS2Card" onMouseEnter={() => { showAbout(1) }} onMouseLeave={() => { showAbout(0) }}>
                        <div className="lpS2CardHead">Quality</div>
                        <div className="lpS2CardCon">Best and lossless quality food. Always fresh and same taste all the time.</div>
                    </div>
                    <div className="lpS2Card" onMouseEnter={() => { showAbout(2) }} onMouseLeave={() => { showAbout(0) }}>
                        <div className="lpS2CardHead">Delivery</div>
                        <div className="lpS2CardCon">Fast and secure delivery with no damage to the food.</div>
                    </div>
                    <div className="lpS2Card" onMouseEnter={() => { showAbout(3) }} onMouseLeave={() => { showAbout(0) }}>
                        <div className="lpS2CardHead">Payment</div>
                        <div className="lpS2CardCon">Takes all types of payment methods including UPI, Credit/Debit cards, etc.</div>
                    </div>
                </div>
            </div>
            <div className="lpSection" id='lpSection3'>
                <div className="lpGrayscale"></div>
                <div className="lpS3MenuImg" id='lpMealImg'></div>
                <div className="lpS3MenuImg" id='lpFastFoodImg'></div>
                <div className="lpS3MenuImg" id='lpDrinkImg'></div>
                <div className="lpS3MenuImg" id='lpDesertImg'></div>
                <div id="lpS3Title">MENU<span>Our Catalogue</span></div>
                <div id="lpS3Menu">
                    <a href='/' onMouseOver={() => { showMenu(1) }} onMouseOut={() => { showMenu(0) }}>
                        <div id="lpS3MenuMeal" className='lpS3MenuItem'>
                            <div id="lpMealSVG">
                                <svg viewBox="0 0 167 157" fill="none" xmlns="http://www.w3.org/2000/svg" id='lpMealRawSVG'>
                                    <g id="g5">
                                        <circle id="e10" cx="82.8843" cy="80.0134" r="47.9608" stroke="white" strokeWidth="6" />
                                        <path id="e11" d="M137.289 31.342C131.158 24.4896 123.739 18.801 115.37 14.6425C99.4829 6.74723 81.2637 4.90811 64.1187 9.46894C54.8857 11.9251 46.3046 16.1467 38.8103 21.8229M147.251 114.446C143.196 122.026 137.802 128.892 131.258 134.682C117.972 146.439 100.859 152.954 83.1173 153.011C65.3762 153.067 48.2216 146.661 34.8604 134.989C32.672 133.078 30.6099 131.046 28.6812 128.908" stroke="white" strokeWidth="6" />
                                        <path id="r25" d="M163.712 4.80879V139.493H152.184V73.1268V70.6268H149.684H143.018C140.992 70.6268 139.39 68.9124 139.526 66.8913L141.746 33.9524C142.597 21.3394 150.277 10.2015 161.765 4.92365L163.003 4.35445C163.335 4.20226 163.712 4.44426 163.712 4.80879Z" stroke="white" strokeWidth="5" />
                                        <path id="r26" d="M3 0.128906V38.6938C3 44.0185 7.31652 48.335 12.6412 48.335V48.335L13.3299 141.993H22.9711V48.335V48.335C28.2958 48.335 32.6123 44.0185 32.6123 38.6938V0.128906M12.6412 0.128906V32.4959M22.9711 0.128906V32.4959" stroke="white" strokeWidth="5" />
                                    </g>
                                </svg>
                            </div>
                            <div className="lpS3MenuText">Meals</div>
                        </div>
                    </a>
                    <a href='/' onMouseOver={() => { showMenu(2) }} onMouseOut={() => { showMenu(0) }}>
                        <div id="lpS3MenuFastFood" className='lpS3MenuItem'>
                            <div id="lpFastFoodSVG">
                                <svg viewBox="0 0 205 131" fill="none" xmlns="http://www.w3.org/2000/svg" id='lpFastFoodRawSVG'>
                                    <g id="g4">
                                        <path id="r24" d="M125.277 83.6687H19.8198V120.009C19.8198 124.703 23.6254 128.509 28.3198 128.509H177.395C182.089 128.509 185.895 124.703 185.895 120.009V83.6687H175.93" stroke="white" strokeWidth="5" />
                                        <path id="p1" d="M186.74 53.369L149.358 93.2969L111.976 53.369H186.74Z" stroke="white" strokeWidth="5" />
                                        <path id="r22" d="M22.3198 25.6312C22.3198 13.2048 32.3934 3.13123 44.8198 3.13123H160.895C173.321 3.13123 183.395 13.2048 183.395 25.6312V51.2752H22.3198V25.6312Z" stroke="white" strokeWidth="5" />
                                        <path id="r23" d="M125.277 83.6688H11.7122C7.01774 83.6688 3.21216 79.8632 3.21216 75.1688V60.6145C3.21216 55.9201 7.01774 52.1145 11.7122 52.1145H194.002C198.697 52.1145 202.502 55.9201 202.502 60.6145V75.1688C202.502 79.8632 198.697 83.6688 194.002 83.6688H175.93" stroke="white" strokeWidth="5" />
                                        <circle id="e4" cx="77.946" cy="17.2387" r="3.3215" fill="white" />
                                        <circle id="e8" cx="51.3737" cy="28.8641" r="3.3215" fill="white" />
                                        <circle id="e5" cx="102.857" cy="28.8641" r="3.3215" fill="white" />
                                        <circle id="e6" cx="129.429" cy="17.2387" r="3.3215" fill="white" />
                                        <circle id="e7" cx="154.341" cy="28.8641" r="3.3215" fill="white" />
                                    </g>
                                </svg>

                            </div>
                            <div className="lpS3MenuText">Fast Food</div>
                        </div>
                    </a>
                    <a href='/' onMouseOver={() => { showMenu(3) }} onMouseOut={() => { showMenu(0) }}>
                        <div id="lpS3MenuDrink" className='lpS3MenuItem'>
                            <div id="lpDrinkSVG">
                                <svg viewBox="0 0 132 166" fill="none" xmlns="http://www.w3.org/2000/svg" id='lpDrinkRawSVG'>
                                    <g id="g3">
                                        <path id="r19" d="M2.71216 46.6001C2.71216 42.458 6.07002 39.1001 10.2122 39.1001H111.765C115.908 39.1001 119.265 42.458 119.265 46.6001V52.8286H2.71216V46.6001Z" stroke="white" strokeWidth="5" />
                                        <path id="r21" d="M32.8418 156.777L11.556 61.2338H110.376L87.6471 156.88C86.8438 160.26 83.8244 162.646 80.3503 162.646H40.1623C36.6486 162.646 33.6059 160.206 32.8418 156.777Z" stroke="white" strokeWidth="5" />
                                        <rect id="r20" x="92.5195" y="-0.0057373" width="8.22541" height="36.6058" fill="white" />
                                    </g>
                                </svg>
                            </div>
                            <div className="lpS3MenuText">Drinks</div>
                        </div>
                    </a>
                    <a href='/' onMouseOver={() => { showMenu(4) }} onMouseOut={() => { showMenu(0) }}>
                        <div id="lpS3MenuDesert" className='lpS3MenuItem'>
                            <div id="lpDesertSVG">
                                <svg viewBox="0 0 186 169" fill="none" xmlns="http://www.w3.org/2000/svg" id='lpDesertRawSVG'>
                                    <g id="g6">
                                        <path id="r28" d="M9.7342 70.9161H176.165C177.777 70.9161 178.726 72.7248 177.811 74.0516L161.028 98.3873C152.255 111.108 137.79 118.704 122.337 118.704H121.679C120.495 118.704 119.337 119.054 118.351 119.712L115.719 121.466C103.506 129.608 103.2 147.447 115.127 156.002L129.062 166H56.8367L70.7725 156.002C82.6986 147.447 82.3927 129.608 70.1801 121.466L67.5482 119.712L65.8841 122.208L67.5482 119.712C66.5626 119.054 65.4046 118.704 64.22 118.704H63.562C48.1093 118.704 33.644 111.108 24.871 98.3873L8.08778 74.0516C7.17276 72.7248 8.12252 70.9161 9.7342 70.9161Z" stroke="white" strokeWidth="6" />
                                        <g id="e13">
                                            <mask id="path-2-inside-1_72_21" fill="white">
                                                <path d="M94.8044 72.5531C94.8044 68.047 93.9169 63.5851 92.1925 59.4221C90.4681 55.2591 87.9406 51.4765 84.7544 48.2902C81.5681 45.104 77.7855 42.5765 73.6225 40.8521C69.4595 39.1278 64.9976 38.2402 60.4915 38.2402C55.9855 38.2402 51.5236 39.1278 47.3606 40.8521C43.1976 42.5765 39.4149 45.104 36.2287 48.2902C33.0425 51.4765 30.515 55.2591 28.7906 59.4221C27.0662 63.5851 26.1787 68.047 26.1787 72.5531L60.4915 72.5531H94.8044Z" />
                                            </mask>
                                            <path d="M94.8044 72.5531C94.8044 68.047 93.9169 63.5851 92.1925 59.4221C90.4681 55.2591 87.9406 51.4765 84.7544 48.2902C81.5681 45.104 77.7855 42.5765 73.6225 40.8521C69.4595 39.1278 64.9976 38.2402 60.4915 38.2402C55.9855 38.2402 51.5236 39.1278 47.3606 40.8521C43.1976 42.5765 39.4149 45.104 36.2287 48.2902C33.0425 51.4765 30.515 55.2591 28.7906 59.4221C27.0662 63.5851 26.1787 68.047 26.1787 72.5531L60.4915 72.5531H94.8044Z" stroke="white" strokeWidth="10" mask="url(#path-2-inside-1_72_21)" />
                                        </g>
                                        <path id="e15" d="M59.8748 41.9497C59.67 40.4333 59.5642 38.8854 59.5642 37.3128C59.5642 18.3624 74.9266 3 93.877 3C112.828 3 128.19 18.3624 128.19 37.3128C128.19 38.8854 128.084 40.4333 127.879 41.9497" stroke="white" strokeWidth="5" />
                                        <g id="e14">
                                            <mask id="path-4-inside-2_72_21" fill="white">
                                                <path d="M159.72 72.5531C159.72 68.047 158.833 63.5851 157.108 59.4221C155.384 55.2591 152.857 51.4765 149.67 48.2902C146.484 45.104 142.702 42.5765 138.539 40.8521C134.375 39.1278 129.914 38.2402 125.408 38.2402C120.902 38.2402 116.44 39.1278 112.277 40.8521C108.114 42.5765 104.331 45.104 101.145 48.2902C97.9585 51.4765 95.431 55.2591 93.7066 59.4221C91.9823 63.5851 91.0947 68.047 91.0947 72.5531L125.408 72.5531H159.72Z" />
                                            </mask>
                                            <path d="M159.72 72.5531C159.72 68.047 158.833 63.5851 157.108 59.4221C155.384 55.2591 152.857 51.4765 149.67 48.2902C146.484 45.104 142.702 42.5765 138.539 40.8521C134.375 39.1278 129.914 38.2402 125.408 38.2402C120.902 38.2402 116.44 39.1278 112.277 40.8521C108.114 42.5765 104.331 45.104 101.145 48.2902C97.9585 51.4765 95.431 55.2591 93.7066 59.4221C91.9823 63.5851 91.0947 68.047 91.0947 72.5531L125.408 72.5531H159.72Z" stroke="white" strokeWidth="10" mask="url(#path-4-inside-2_72_21)" />
                                        </g>
                                        <path id="l4" d="M179.407 23.3915C180.649 21.9107 180.456 19.7031 178.975 18.4606C177.495 17.2181 175.287 17.4112 174.044 18.892L179.407 23.3915ZM174.044 18.892L147.573 50.4393L152.935 54.9388L179.407 23.3915L174.044 18.892Z" fill="white" />
                                    </g>
                                </svg>

                            </div>
                            <div className="lpS3MenuText">Deserts</div>
                        </div>
                    </a>
                </div>
                <a href='/'>
                    <div id="lpS3FullMenu">
                        Full Menu
                    </div>
                </a>
            </div>
            <div className="lpSection" id='lpSection4'>
                <div id="lpS4Title">Reviews<span>Our Top Reviews</span></div>
                <div id="lpS4Reviews">
                    <div id="lpS4ReviewHolder">
                        <div className="lpS4Review">
                            <div className="lpS4ReviewCon">
                                <div className="lpS4ReviewTop">
                                    <div className="lpS4ReviewImg"></div>
                                    <div className="lpS4ReviewHead">
                                        <div className="lpS4ReviewUsername">@prakhar</div>
                                        <div className="lpS4ReviewDay">5 million years ago</div>
                                    </div>
                                </div>
                                <div className="lpS4ReviewBot">Had fun making this project.</div>
                            </div>
                            <div className="lpS4ReviewHeart" onClick={() => {
                                postLike(1);
                            }}></div>
                        </div>
                        <div className="lpS4Review lphidden" id='lpS4CustomReview'>
                            <div className="lpS4ReviewCon">
                                <div className="lpS4ReviewTop">
                                    <div className="lpS4ReviewImg"></div>
                                    <div className="lpS4ReviewHead">
                                        <div className="lpS4ReviewUsername">@{username}</div>
                                        <div className="lpS4ReviewDay">5 days ago</div>
                                    </div>
                                </div>
                                <div className="lpS4ReviewBot">{message}</div>
                            </div>
                            <div className="lpS4ReviewHeart" onClick={() => {
                                postLike(2)
                            }}></div>
                        </div>
                    </div>
                </div>
                <div id="lpS4ReviewInput">
                    <div className="lpS4Review" id='lpS4InputReview'>
                        <div className="lpS4ReviewCon">
                            <div className="lpS4ReviewTop">
                                <div className="lpS4ReviewImg"></div>
                                <div className="lpS4ReviewHead">
                                    <div className="lpS4ReviewUsername">@{username}</div>
                                    <div className="lpS4ReviewDay">5 days ago</div>
                                </div>
                            </div>
                            <div className="lpS4ReviewBot">{message}</div>
                        </div>
                    </div>
                    <input type="text" id="lpS4ReviewUsernameInp" value={username} autoComplete='off' onChange={changeUsername} />
                    <textarea id='lpS4ReviewMessageInp' value={message} onChange={changeMessage} />
                    <div id="lpS4ReviewOptions">
                        <div id="lpS4ReviewIBtn" data-tooltip-id="my-tooltip-multiline" data-tooltip-html="Username should be 3 letters or more<br />Message should be 3 letters or more<br />The photo won't be saved, its just for temporary use" data-tooltip-place='top'>i</div>
                        <Tooltip id="my-tooltip-multiline" style={{ backgroundColor: 'var(--red)', fontSize: '1.25rem' }} border='2px solid black' opacity={1} />
                        <input type='file' id='imgFile' accept='image/*' style={{ display: 'none' }} onChange={getImg} />
                        <label htmlFor='imgFile' id='lpS4ReviewImgInp'>Add Photo</label>
                        <button type='button' id='lpS4ReviewPost' onClick={postReview}>Post</button>
                        <div id="lpS4ReviewMessageCount">{words}/120</div>
                    </div>
                </div>
            </div>
            <div className="lpSection" id='lpSection5'>
                <div id="lpS5Title">Contact Us<span>Any where on different platforms</span></div>
                <div id="lpS5Main">
                    <div id="lpS5Left">
                        <div id="lpS5CardHolder">
                            <a href='/'><div className="lpS5Card" id='lpS5Insta'>
                                <div className="lpS5CardHead" >Instagram</div>
                                <div className="lpS5CardCon">instagram.com/__prakhar.__</div>
                            </div></a>
                            <a href='/'><div className="lpS5Card" id='lpS5Twitter'>
                                <div className="lpS5CardHead" >Twitter</div>
                                <div className="lpS5CardCon">twitter.com/____Prakhar__</div>
                            </div></a>
                            <a href='/'><div className="lpS5Card" id='lpS5Youtube'>
                                <div className="lpS5CardHead" >Youtube</div>
                                <div className="lpS5CardCon">youtube.com/.../</div>
                            </div></a>
                        </div>
                    </div>
                    <div id="lpS5Right">
                        <form action="/" id="lpS5Form">
                            <div id='lpS5Name' className='lpS5InpDiv' onClick={() => { formInpClicked(1) }}>
                                <label htmlFor='lpS5FormName' className='lpS5Label'>Name</label>
                                <input type="text" id="lpS5FormName" name='name' autoComplete='off' className='lpS5InpField' onChange={() => { inpChange(0) }} />
                            </div>
                            <div id='lpS5Email' className='lpS5InpDiv' onClick={() => { formInpClicked(2) }}>
                                <label htmlFor='lpS5FormEmail' className='lpS5Label'>Email</label>
                                <input type="email" id="lpS5FormEmail" name='email' autoComplete='off' className='lpS5InpField' onChange={() => { inpChange(1) }} />
                            </div>
                            <div id='lpS5Message' className='lpS5InpDiv' onClick={() => { formInpClicked(3) }}>
                                <label htmlFor='lpS5FormMessage' className='lpS5Label'>Message</label>
                                <textarea name="message" id="lpS5FormMessage" className='lpS5InpField' onChange={() => { inpChange(2) }}></textarea>
                            </div>

                            <input type="submit" value="Send" id='lpS5Submit' />
                        </form>
                    </div>
                </div>
            </div>
            <footer id="lpFooter"></footer>
        </>
    )
}
