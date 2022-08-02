import styled from "@emotion/styled"
import Image from "next/image"
import { color } from "styled-system"
const Main = styled.div`
    max-width: 1024px;
        text-align: center;
        margin: 0 auto;
     h1 {
     font-size: 96px;
     font-weight: 800;
     letter-spacing: 0.05em;
     margin: 0;

     
    }
        
`
const Heading = styled.div`
font-size: 96px;
font-weight: 700;
letter-spacing: 0.05em;
margin: 0;
text-align: center;
${color}

@media screen and (max-width:786px){
    font-size: 40px;

    font-weight: 800;
    padding: 0 24px;
    text-align: center;
    margin: 0 auto;
    max-width: 320px;
})

`

const Hero = ()=>{
    return(
        <Main >
                 {/* <h1 color="tomato">MORE THAN JUST SHORTER LINKS </h1> */}
                 <Heading color="heading" >
                    MORE THAN JUST SHORTER LINKS
                 </Heading>
          {/* <img src="/people working.svg"/> */}
        <Image src="/people working.svg" width="350" height="350" />
        </Main>
           

        
    )
}
export default Hero