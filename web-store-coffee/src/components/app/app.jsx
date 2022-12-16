import { Component } from "react";

// pages 
import MainPage from '../main-page/page/main-page';
// import CoffeePage from "../coffee-page/page/coffee-page"
// import ProductPage from "../page-of-product/page/product-page"
// import OurGoods from '../page-with-our-goods/main-component/our-goods';


class App extends Component {
    render() {
        return (
            <>
                <MainPage />
                {/* <CoffeePage />
                <ProductPage />
                <OurGoods /> */}
            </>
        )
    }
}


export default App;