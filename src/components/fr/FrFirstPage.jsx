import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrFirstPage(){
  return(
      <>
          <div className="page full-screen background home">
              <div className="shadow"></div>
              <div className="grid">
                  {/* Side bar starts */}
                  <Sidebar title="Ce bâtiment produit de l'énergie solaire" placeholder={PlaceHolder}/>
                  <div className="page__content">
                      <h2 class="title">L'énergie du soleil</h2>
                      <div class="space-50"></div>
                      <Boxes />
                  </div>
              </div>
          </div>
      </>
  )
}
