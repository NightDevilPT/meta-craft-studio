import "../styles/global.scss";
import "../styles/headerFrame.scss";
import "../styles/NavBarFrame.scss";
import "../styles/BannerFrame.scss";
import "../styles/Home.scss";
import "../styles/FooterFrame.scss";
import "../styles/Page.scss";
import "../styles/PageCard.scss";
import "../styles/SidebarFrame.scss";
import "../styles/ContactUsFrame.scss";


import HeaderFrame from "@/components/HeaderFrame";
import LayoutFrame from "@/components/layoutFrame";
import ContextAPI from "@/contextAPI/ContextAPI";
import NavBarFrame from "@/components/NavBarFrame";

import { MdWhatsapp } from "react-icons/md";
import FooterFrame from "@/components/FooterFrame";


export default function App({ Component, pageProps }) {
  return (
    <ContextAPI>
      <LayoutFrame>
        <HeaderFrame />
        <NavBarFrame />
        <div className="whatsapp-section">
          <a href={`https://api.whatsapp.com/send?phone=9999999999`} target="another"><MdWhatsapp className="whatsapp-icon" /></a>
        </div>
        <Component {...pageProps} />
        <FooterFrame />
      </LayoutFrame>
    </ContextAPI>
  );
}
