import React from "react";

export default function Ternary(){
     /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
     const isGoingOut = false
    
    
     
     return (
         <div className="state">
             <h1 className="state--title">Do I feel like going out tonight?</h1>
             <div className="state--value">
                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
             </div>
         </div>
     )
}