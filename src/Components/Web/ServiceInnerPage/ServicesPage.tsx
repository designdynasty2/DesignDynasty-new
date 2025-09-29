import { WebContact } from "../HomeInnerPage/WebContact"
import { InnerPageBanner } from "../InnerPageBanner"
import { WebServices } from "../WebServices"

export const ServicesPage = () =>{
    return(
        <>
            <InnerPageBanner />
            <WebServices />
            <WebContact />
        </>
    )
}