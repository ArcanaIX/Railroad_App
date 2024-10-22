import React from "react";
import "./accountSlide.css";
import {ReactComponentOrElement} from "@ionic/react";

interface isLoggedObject {
    isLogged: boolean;
}

const accountSlide: ReactComponentOrElement = (props: isLoggedObject) => {
    console.log(props)
    const isLog = () : ReactComponentOrElement => {
        return (
            <div>

            </div>
        )
    }

    const isNotLog = () : ReactComponentOrElement => {
        return(
            <div>

            </div>
        )
    }

    return (
        <div className="account">
            {props.isLogged.toString()}
        </div>
    )
}

export default accountSlide;