import { ConditionalNabar } from "./conditionalnavbar"

export const NavbarLayout=({children})=>{
    return(
        <div>
            <ConditionalNabar/>
            {children}
        </div>
    )
}