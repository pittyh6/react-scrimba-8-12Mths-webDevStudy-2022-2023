import React from "react";

export default function FlippingState(){
     /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    const answer = false
    function goingOut(){
        setIsGoingOut(prevState => !prevState)
        //answer ? setIsGoingOut("Yes") : setIsGoingOut("No")
            // if(answer == true){
            //     setIsGoingOut("Yes")
            // }else{
            //     setIsGoingOut("No")
            // }
        
    }
     return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={goingOut}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )

}
