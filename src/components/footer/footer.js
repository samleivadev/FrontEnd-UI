import React from 'react';
import style from '../footer/footer.module.css'

const Footer = () => {
    return(
        <section>
            
            <section className={style.topfooter}>
              <h2>Work hard, have fun, make history</h2>  
            </section>
            <div className={style.lowfooter}>
            <section className={style.finfo}>
                <section className={style.fleft}>
                    Meta Engineers
                </section>
                <section className={style.fcenter}>
                    slack @calsamue
                </section>
                <section className={style.fright}>
                    CVG2
                </section>
            </section>
            </div>
        </section>
    );
}

export default Footer;