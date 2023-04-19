//modules
import styled from "styled-components";
import { Link } from "react-router-dom";

//img
import logo from "../../assets/images/stack.png";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: max-content;
  background: ${(props) => props.theme.color.footerBg};
  justify-content: center;
  align-items: center;
`;
const FooterContents = styled.ul`
  display: flex;
  max-width: 1264px;
  min-width: 980px;
  list-style: none;
  margin-top: 30px;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
    min-width: 630px;
    flex-direction: column;
    margin-bottom: 0px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    margin-bottom: 25px;
    max-width: 500px;
  }

  .logo {
    width: 43px;
    height: 37px;
    margin-bottom: 30px;
  }
  .stackoverflow {
    width: 190px;
  }
  .products {
    width: 170px;
  }
  .company {
    width: 190px;
  }
  .network {
    width: 270px;
    ul {
      @media ${({ theme }) => theme.breakpoints.tabletMax} {
        display: flex;
        display: inline-block;
      }
    }
  }
  .social {
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      position: relative;
      left: -80px;
      top: 20px;
      width: 600px;
    }
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      left: 0px;
      top: 0;
    }

    ul {
      display: flex;
      flex-direction: row;
    }
    ul > li {
      margin-right: 10px;
      font-size: 11px;
      @media ${({ theme }) => theme.breakpoints.tabletMax} {
        margin-bottom: 0px;
      }
      @media ${({ theme }) => theme.breakpoints.mobileMax} {
        margin-bottom: 0px;
      }
      ul > li:last-of-type {
        @media ${({ theme }) => theme.breakpoints.tabletMax} {
          width: 400px;
        }
      }
    }
  }
`;

const FooterLogo = styled(Link)`
  width: 80px;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    position: relative;
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    display: none;
  }
`;
const FooterList = styled.li`
  margin-top: 15px;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    position: relative;
    left: 100px;
    top: -70px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    left: 45px;
    top: 0;
  }
  ul {
    display: flex;
    flex-direction: column;

    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      display: flex;
      width: 750px;
      min-width: 300px;
      display: inline-block;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: rgb(186, 191, 196);
    margin-bottom: 20px;
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      font-size: 12px;
      margin-bottom: 12px;
    }
  }
  ul > li {
    cursor: pointer;
    margin-bottom: 11px;
    color: rgb(145, 153, 161);
    font-size: 13px;
    display: inline-block;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      margin-right: 15px;
    }
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      font-size: 11px;
      margin-bottom: 10px;
    }
  }
  .data {
    margin-top: 28px;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      margin: 0px;
      display: inline-block;
    }
  }
  .smallTxt {
    font-size: 11px;
    line-height: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterLogo to="/">
          <img src={logo} className="logo" alt="로고" />
        </FooterLogo>
        <FooterList className="stackoverflow">
          <h2>STACK OVERFLOW</h2>
          <ul>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </FooterList>
        <FooterList className="products">
          <h2>PRODUCTS</h2>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </FooterList>
        <FooterList className="company">
          <h2>COMPANY</h2>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </FooterList>
        <FooterList className="network">
          <h2>STACK EXCHANGE NETWORK</h2>
          <ul>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <div>
              <ul className="data">
                <li>API</li>
                <li>Data</li>
              </ul>
            </div>
          </ul>
        </FooterList>
        <FooterList>
          <ul className="social">
            <li>
              <ul className="smallTxt">
                <li>Blog</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </li>
            <li>
              <span className="smallTxt">
                Site design / logo © 2023 Stack Exchange Inc; user contributions
                licensed under CC BY-SA. rev 2023.4.18.43394
              </span>
            </li>
          </ul>
        </FooterList>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
