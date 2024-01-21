import PlaceHolder from '../../assets/img/floating-img.jpg';
import ClockSVG from "../template/ClockSVG";

export default function Sidebar({ title = "This building produces solar energy", placeholder }){
    return(
        <div className="page__sidebar">
            <div className="page__sidebar_header">
                <h2 class="clock-title bold">{title}</h2>
            </div>
            <div className="page__sidebar_content">
                <ClockSVG />
            </div>
            <div className="page__sidebar_footer">
                <img src={placeholder ? placeholder : PlaceHolder } alt="" />
            </div>
        </div>
    )
}