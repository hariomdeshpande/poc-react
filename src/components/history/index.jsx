import { useState } from "react"
import "./history.css"
import TimeLineContentItem from "./timeline-content-item"

export default function History(){

    const[active,setActive]= useState(true);

    const timeLineData = [
        {   
            contentItem:1,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy',
            contentYear:1945,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-1.png'
        },
        {   
            contentItem:2,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy 2',
            contentYear:1955,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-2.png'
        },
        {   
            contentItem:3,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy 3',
            contentYear:1965,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-3.png'
        },
        {   
            contentItem:4,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy 4',
            contentYear:1975,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-4.png'
        },
        {   
            contentItem:5,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy 5',
            contentYear:1985,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-5.png'
        },
        {   
            contentItem:6,
            contentHeadUpper:'Who was',
            contentHeadLower:'Satyajit Roy 6',
            contentYear:1995,
            contentText:'  When a new character appears in your tale, you must describe his looks and clothes in some detail. If you don’t, your reader may imagine certain things on his own, which will probably not fit whatever you say later on.',
            contentNavImage:'images/intro-slider/slider-image-6.png'
        }
    ]

    const timelineClicked = (item) =>{
        setActive(item);
    }
    
    return(
        <div class="history">
        <div class="container-fluid h-100">
            <div class="vertical-line">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, perspiciatis eius sint maiores, possimus quos soluta autem numquam magni totam fuga architecto in minus quas vitae illo quibusdam ullam explicabo ex et. Illo laboriosam, minus repellat exercitationem ipsum dolor quae non. Explicabo, et quisquam. Doloremque natus cum expedita temporibus sunt.
            </div>
            <div class="history__inner">
                <div class="history-timeline">
                    { timeLineData && timeLineData!==undefined ? <div class="history-timeline-content">
                        { timeLineData.map((item)=>{
                            return <TimeLineContentItem  highlight ={ active && item.contentItem && active==item.contentItem ? true : false } data={item}></TimeLineContentItem>
                        })}             
                    </div> : null }
                    {  timeLineData && timeLineData!==undefined ? <div class="history-timeline-nav">
                        <ul>
                        { timeLineData.map((item)=>{
                            return ( 
                            <li className={ active && item.contentItem && active==item.contentItem ? 'active' : ''} onClick={ () => timelineClicked(item.contentItem) } >
                                <img src={item.contentNavImage} class="img-fluid" alt=""/>
                            </li> )
                        })}   
                        </ul>
                    </div> :null}
                </div>
            </div>
        </div>
    </div>
    )
}