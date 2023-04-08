import { Children } from "react";
import Sidebar from "../../sidebar";


function DefaultLayout({children}) {
    return ( 
                <div>
                {children}
                </div>
    )
}

export default DefaultLayout;