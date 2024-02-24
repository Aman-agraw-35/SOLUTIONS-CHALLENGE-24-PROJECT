import React from "react";
import Header from "@/helpers/header";
import Upper from "./upper";
import { CardSection } from "./cardsection";
import Footer from "@/helpers/footer";
import Donate from "@/helpers/donate";
const Cartpage = () => {
return(
<div>
 <Header/>
 <Upper/>
 <CardSection/>
 <Donate/>
 <Footer/>
</div>
);
};
export default Cartpage ;