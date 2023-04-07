import React from "react";
import style from "../card/card.module.css"

function AACard(props){
    const {aaName, imageAA, aaDep, aaLogin, aaID, aaShift,amName, imageAM, amTitle, amID} = props
  
    let amPic = `url(${props.imageAM})`
    let aaPic = `url(${props.imageAA})`
  return(
    <div className={style.bioCard}>
        <div className={style.upperContainer}>
            <div className={style.imgContainer1}>
            <img src={props.imageAA} alt="" height='150px' width="150px" />
            
            </div>
        </div>
        <div className={style.lowerContainer}>
            <div className={style.devName}>{aaName}</div>
            <div className={style.devTitle}>{aaLogin}</div>
            <div className={style.devDesc}>{aaID}</div>
            <div className={style.devDesc}>{aaShift}</div>
            <div className={style.devDesc}>{aaDep}</div>
                            
        </div>
        
        <div className={style.upperContainer}>
            <div className={style.imgContainer}>
            <img src={props.imageAM} alt="" height='100px' width="100px" />
            
        </div>
        <div className={style.lowerContainer}>
            <div className={style.devName}>{amName}</div>
            <div className={style.devTitle}>{amTitle}</div>
            <div className={style.devTitle}>{amID}</div>
           
                        
        </div>
                
        </div>
    </div>
  )  
}

export default AACard;