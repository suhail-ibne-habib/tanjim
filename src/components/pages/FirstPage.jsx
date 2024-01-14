import Clock from "../Clock";
import Boxes from "../Boxes";

import PlaceHolder from '../../assets/img/floating-img.jpg';
import ClockSVG from "../template/ClockSVG";

function FirstPage() {
  return (
    <>
      <div className="page full-screen background">
        <div className="container flex">
          <div className="sidebar colored">
            <h2 class="clock-title">text of the printing</h2>
            <div className="clock-wrap">
              <ClockSVG />
            </div>
            <img className='sidebar-float' src={PlaceHolder} alt="" />
          </div>
          <div className="main">
              <div class="shadow"></div>
              
              <div class="result">
                  <h2 class="title">Lorem Ipsum is simply</h2>
                  <div class="space-50"></div>
                  <Boxes />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
