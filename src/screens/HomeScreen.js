import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo"
import Footer from "./../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

const HomeScreen = ({ match, history }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} history={history}/>
      <ContactInfo />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomeScreen;
