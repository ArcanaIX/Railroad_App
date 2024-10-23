import React from "react";
import "./accountSlide.css";
import {ReactComponentOrElement} from "@ionic/react";

interface isLoggedObject {
    isLogged: boolean;
}

const accountSlide: ReactComponentOrElement = (props: isLoggedObject) => {
    console.log(props)

    const cardRenderer: any = () => {
        if (props.isLogged) {
            return isLog()
        }else {
            return isNotLog()
        }
    }

    const isLog = () : ReactComponentOrElement => {
        return (
            <div className="logged">

            </div>
        )
    }

    const isNotLog = () : ReactComponentOrElement => {
        return(
            <div className="not-logged">
                <h1>Compte</h1>

                <input type="text" name="pseudo" id="pseudo" placeholder="Pseudonyme"/>
                <input type="password" name="password" id="password" placeholder="Mot de passe" />

                <div className="buttons">
                    <button className="create">
                        Créer
                    </button>
                    <button className="connexion">
                        Connexion
                    </button>
                </div>

            </div>
        )
    }

    return (
        <div className="account-slide">
            {cardRenderer()}
        </div>
    )
}

export default accountSlide;