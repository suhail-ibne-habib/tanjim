import Boxes from "../Boxes";
import ClockSVG from "../template/ClockSVG";

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

function NlFirstPage() {
  return (
    <>
      <div className="page full-screen background">
        <div className="container flex">
          <div className="sidebar colored">
            <h2 class="clock-title">Dit gebouw produceert zonne-energie</h2>
            <div className="clock-wrap">
              <ClockSVG />
            </div>
            <img className='sidebar-float' src={PlaceHolder} alt="" />
          </div>
          <div className="main">
              <div class="shadow"></div>
              
              <div class="result">
                  <h2 class="title">Energie van zonlicht</h2>
                  <div class="space-50"></div>
                  <Boxes ln="nl"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NlFirstPage;
