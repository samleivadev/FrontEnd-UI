import AACard from '../../components/card/card.js';
import React from 'react';
import style from '../kiosk/kiosk.module.css'

const KioskPage = () => {
    return(
        <div>
            
             <AACard
                
                aaName="Samuel Leiva"
                imageAA ='https://media.licdn.com/dms/image/D5635AQHyIoo2Ijofzw/profile-framedphoto-shrink_200_200/0/1658445629590?e=1681444800&v=beta&t=e56A3kM2_UqQ04m4fj00D0Q0ja_Ezl55tilR8ikXM0E'
                aaLogin="@Calsamue"
                aaID="3336339"
                aaShift="DB-715"
                aaDep="Kindle"
                imageAM='https://media.licdn.com/dms/image/C4D03AQFjZlCOqmJUNw/profile-displayphoto-shrink_200_200/0/1517373325396?e=1686182400&v=beta&t=TOO_wNgb_Tgd4zbfRpr-jM9qy7HaKrMZ7E6n42Th4cM'
                amName='Craig Stearns'
                amTitle='Area Manager'
                amID='mmstris'
              
            />
        </div>
    );
}

export default KioskPage;