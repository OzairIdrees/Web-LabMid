import Cards from "./Cards";
import Menubar from "./Menubar";
import BottomMiddle from "./BottomMiddle";
import Footer from "./Footer";
import Middle from "./Middle";
function Main() {
    return (  
        <div>
            <Menubar/>
            <Middle/>
            <Cards/>
            <BottomMiddle/>
            <Footer/>
        </div>
    );
}

export default Main;