import {ChangeEvent, useState} from "react";
import "./accountSlide.css";
import {ReactComponentOrElement} from "@ionic/react";
import user from "../scripts/routes/user.routes.js";

interface isLoggedObject {
    isLogged: boolean;
    getInfo: Function
}

const accountSlide: ReactComponentOrElement = (props: isLoggedObject) => {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    const handleTypePseudo = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        
        setPseudo(e.currentTarget.value);
        
    }

    const handleTypePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const userInfo = user.login(pseudo, password)
        props.getInfo(pseudo, userInfo.token)
    }

    const cardRenderer: any = () => {
        if (props.isLogged) {
            return isLog()
        }else {
            return isNotLog()
        }
    }
    const isLog = () : ReactComponentOrElement => {
        return (
            <div className="not-logged">
                <p>caca</p>
            </div>
        )
    }
    const isNotLog = () : ReactComponentOrElement => {
        return(
            <div className="not-logged">
                <h1>Compte</h1>

                <input type="text" name="pseudo" id="pseudo" placeholder="Pseudonyme" onChange={(e) => handleTypePseudo(e)} />
                <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={(e) => handleTypePassword(e)}  />

                <div className="buttons">
                    <button className="create">
                        Créer
                    </button>
                    <button className="connexion" onClick={handleLogin}>
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