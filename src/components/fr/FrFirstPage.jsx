import Boxes from "../Boxes";
import ClockSVG from "../template/ClockSVG";

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

function FrFirstPage() {
  return (
    <>
      <div className="page full-screen background">
        <div className="container flex">
          <div className="sidebar colored">
            <h2 class="clock-title">Ce bâtiment produit de l'énergie solaire</h2>
            <div className="clock-wrap">
              <ClockSVG />
            </div>
            <img className='sidebar-float' src={PlaceHolder} alt="" />
          </div>
          <div className="main">
              <div class="shadow"></div>
              
              <div class="result">
                  <h2 class="title">L'énergie du soleil</h2>
                  <div class="space-50"></div>
                  <Boxes ln="fn"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrFirstPage;
