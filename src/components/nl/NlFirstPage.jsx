import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'

export default function NlFirstPage(){
    return(
        <>
            <div className="page full-screen background home">
                <div className="shadow"></div>
                <div className="grid">
                    {/* Side bar starts */}
                    <Sidebar title="Dit gebouw produceert zonne-energie" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <h2 class="title">Energie van zonlicht</h2>
                        <div class="space-50"></div>
                        <Boxes />
                    </div>
                </div>
            </div>
        </>
    )
}
