import { ReactComponentOrElement } from "@ionic/react";
import trainSVG from "../assets/train.svg"
import "./trainCard.css"

interface Train {
    stationStart: String,
    stationEnd: String,
    departure: String
}

const trainCard : ReactComponentOrElement = (props: Train) => {
    
    
    
    return (
        <div className="trainCard">
            <div className="top">
                <img src={trainSVG} alt="" />

                <div className="right">
                    <div className="from">
                        <p className="little">de</p>
                        <p className="normal">{props.stationStart}</p>
                    </div>
                    <div className="to">
                        <p className="little">à</p>
                        <p className="normal">{props.stationEnd}</p>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <div className="departure">
                    <p className="little">départ :</p>
                    <p className="normal">{props.departure}</p>
                </div>
                <button>
                    Réserver
                </button>
            </div>

        </div>
    )
}

export default trainCard