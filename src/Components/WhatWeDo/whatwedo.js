import React from "react";
import '../WhatWeDo/whatwedo.css'
import cloud from '../WhatWeDo/Icon/cloud.svg'
import calculator from '../WhatWeDo/Icon/calculator.svg'
import clock from '../WhatWeDo/Icon/clock.svg'
import heart from '../WhatWeDo/Icon/heart.svg'

const WhatWeDo = () => {

    

    return (
        <div className="divWEDO">
            <div className="title">
                <h2>WHAT WE DO</h2>
            </div>
            <div className="firstcolonicon">
                <div className="calculator"><img src={calculator} alt='calculator'/></div>
                <div className="cloud"><img src={cloud} alt='cloud'/></div></div>
            <div className="seconcolonicon">
                <div className="clock"><img src={clock} alt='clock'/></div>
                <div className="heart"><img src={heart} alt='heart'/></div>
            </div>
            
        </div>
    )
}
export default WhatWeDo