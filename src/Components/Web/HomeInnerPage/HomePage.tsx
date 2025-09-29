import { WebAboutus } from "./WebAboutus";
import { WebContact } from "./WebContact";
import { WebFooter } from "../WebFooter";
import { WebHero } from "./WebHero";
import { WebServices } from "../WebServices";
import { WebTesti } from "./WebTesti";

export const HomePage = () => {
  return (
    <>
      <WebHero />
      <WebServices />
      <WebAboutus />
      {/* <WebScroll /> */}
      <WebTesti />
      <WebContact />
    </>
  );
};
