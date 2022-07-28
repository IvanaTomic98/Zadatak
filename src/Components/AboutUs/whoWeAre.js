import React from "react"
import '../AboutUs/whoWeAre.css'
import SlideShow1 from '../AboutUs/Image/SlideShow1.jpg'


const WhoWeAre = () => {

    const data = [
        {title: 'Lorem ipsom', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        { title: 'Lorem Ipsom', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
    ]

    return (
        <div>
            <div>
                <h2 className="title_who_we_are">
                    WHO WE ARE
                </h2>
            </div>
         {data.map((who) => 
         <div className="whoWeAre">
            <img src={SlideShow1} className="picture"/>
            {who.title}
            {who.description} 
            <button>Show more</button>
         </div>
         )}
        </div>
    )
}

export default WhoWeAre