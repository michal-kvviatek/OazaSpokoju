import React from "react";
import 'bootstrap/scss/bootstrap.scss';
import '../../css/App.scss';
import './Body.scss'

const BodyDiv = () => {
    return (
        <>
            <div className="body_image_div">
                <div className="bg-text">
                    <h2>
                        DOMKI LETNISKOWE OAZA SPOKOJU
                    </h2>
                    <h3>
                        Ośrodek wczasowy Oaza spokoju położony w Jantarze<br/>
                        znajduje sie okolo 1km (20min spacerkiem) od plaży Bałtyku.<br/>
                        Do państwa dyspozycji mamy 4 domki letniskowe<br/>
                        (trzy piętrowe oraz jeden parterowy) z zadaszonymi tarasami!.<br/>
                    </h3>

                </div>
            </div>
            <div className="body_description">
                <div className="bg-text">
                    <div className="body_description_image"></div>
                    <h2>Nocleg:</h2>
                    <h3>Do Państwa dyspozycji oddajemy trzy domki piętrowe 6 osobowe <br/>
                        oraz jeden domek parterowy - czteroosobowy. <br/>
                        Kazdy z domków wyposażony jest w łazienkę z prysznicem, aneks kuchenny<br/>
                        w pełni wyposażony, lodówkę, czajnik elektryczny oraz TV.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default BodyDiv