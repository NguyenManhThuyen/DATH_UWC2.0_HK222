import { Children } from "react";
import Sidebar from "../../sidebar";


function DefaultLayout({children}) {
    return ( 
        <div>
            <Sidebar/>
                <div>
                {children}
                </div>
               
        </div>
    )
}

export default DefaultLayout;