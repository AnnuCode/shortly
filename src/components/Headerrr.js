import styled from "@emotion/styled";
import MenuIcon from "./MenuIcons";
import CloseMenu from "./closeMenuIcon";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useState } from "react";
import Link from 'next/link'

const Main = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  padding: 60px 12%;
  width: 100%;
  height: 75px;

  .menu {
    display: block;
    user-select: none;
  }

  @media screen and (max-width: 786px) {
    justify-content: space-between;
    padding: 0px 6%;
  }

  @media screen and (min-width: 750px) {
    .menu {
      display: none;
    }
  }
`;
const Links = styled.div`
  display: none;

  ul {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
  }
  li {
    margin-left: 24px;
    list-style: none;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    color: rgb(156 163 175);

    &:hover {
      color: rgb(55 65 81);
      transition: color 100ms;
    }
  }

  @media screen and (min-width: 750px) {
    display: block;
  }
`;

const First = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const MenuContainer = styled.div`
  position: relative;
  min-height: 100vh;

  .anotherContainer{
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .lastContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    widht: 100%;
  }
`
const Items = styled.div`
    padding: 16px 0;
    
    a{
        padding: 0 16px;
        font-size: 14px;
        color: rgb(156 163 175);
        font-weight: 600;
      
    }
`

const Headerrr = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <Main>
      <First>
        <Image src={logo} />
      </First>

      <div className="menu">
        {showMenu ? (
          <CloseMenu
            onClick={() => setShowMenu(!showMenu)}
            width="24px"
            height="24px"
          />
        ) : (
          <MenuIcon
            onClick={() => setShowMenu(!showMenu)}
            width="24px"
            height="24px"
          />
        )}
      </div>

      <Links>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </Links>
    </Main>

    {showMenu && <MenuContainer>
        <div className="anotherContainer">
            <div className="lastContainer">
                <Items><Link href="#">Features</Link></Items>
                <Items><Link href="#">Pricing</Link></Items>
                <Items><Link href="#">Resources</Link></Items>
            </div>
        </div>
        </MenuContainer>}
    </>
  );
};
export default Headerrr;
