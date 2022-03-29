import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./bibilography.css"

export default function Bibiography(){

    const bibilographyCarousel =[
        {
            itemNumber:1,
            itemImage:"images/bibilography/bibilography-1.png",
            itemText:"A Vision of Cinema"
        },
        {
            itemNumber:2,
            itemImage:"images/bibilography/bibilography-2.png",
            itemText:"A Vision of Cinema"
        },
        {
            itemNumber:3,
            itemImage:"images/bibilography/bibilography-3.png",
            itemText:"A Vision of Cinema"
        },
        {
            itemNumber:4,
            itemImage:"images/bibilography/bibilography-4.png",
            itemText:"A Vision of Cinema"
        },
        {
            itemNumber:5,
            itemImage:"images/bibilography/bibilography-5.png",
            itemText:"A Vision of Cinema"
        },

    ]

    return(
        <div class="bibilography">
            <div class="bibilography__content">
                <h3>Browse Bibliography</h3>
               { bibilographyCarousel && bibilographyCarousel!=undefined ?<OwlCarousel className='bibilography__carousel' loop margin={10} nav dots={false} items={4.5} navText={[`<svg xmlns='http://www.w3.org/2000/svg' width='15' height='21' viewBox='0 0 15 21'><text id='_' data-name='' transform='translate(0 18)' fill='#1a1915' font-size='20'font-family='Material-Design-Iconic-Font'><tspan x='0' y='0'></tspan></text> </svg>`,`<svg xmlns='http://www.w3.org/2000/svg' width='15' height='21' viewBox='0 0 15 21'><text id='_' data-name='' transform='translate(0 18)' fill='#1a1915' font-size='20'font-family='Material-Design-Iconic-Font'><tspan x='0' y='0'></tspan></text></svg>`]}>
                   { bibilographyCarousel.map((item)=>{
                       return(
                        <div key={item.itemNumber}>
                            <div class="item">
                            <div class="item__image">
                                <img src={item.itemImage} class="img-fluid" alt=""/>
                            </div>
                            <p>
                                {item.itemText}
                            </p>
                            <button type="button" class="btn play-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21">
                                    <text id="_" data-name="" transform="translate(0 18)" fill="#fefefe" font-size="20"
                                        font-family="Material-Design-Iconic-Font">
                                        <tspan x="0" y="0"></tspan>
                                    </text>
                                </svg>
                            </button>
                            </div>
                        </div>
                       )
                   }) }
                    
                </OwlCarousel> :null }
            </div>
        </div>
    )
}