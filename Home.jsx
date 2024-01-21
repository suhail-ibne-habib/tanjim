import PlaceHolder from '../../assets/img/floating-img.jpg';
import ClockSVG from "../template/ClockSVG";
import Boxes from "../Boxes";

export default function Home(){
    return(
        <>
            <div className="page full-screen background home">
                <div className="grid">
                    <div className="page__sidebar">
                        <div className="page__sidebar__header">
                            <h2 class="clock-title bold mb-5">This building produces solar energy</h2>
                        </div>
                        <div className="page__sidebar__content">
                            <ClockSVG />
                        </div>
                        <div className="page__sidebar__footer">
                            <img src={PlaceHolder} alt="" />
                        </div>
                    </div>
                    <div className="page__content">
                        <div className="page__content__box">
                            <Boxes />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}