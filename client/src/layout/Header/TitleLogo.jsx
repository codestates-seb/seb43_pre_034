import styled from "styled-components";
import { ReactComponent as TitleLogoSvg } from "../../assets/images/stackoverflow_logo.svg";
import { ReactComponent as TitleLogoMobileSvg } from "../../assets/images/stackoverflow_logo_mobile.svg";

const LogoContainer = styled.div`
  padding: 0 0.5rem 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  svg {
    height: 30px;
    width: 150px;
  }
  .is_desktop_display {
    display: block;
  }
  .is_mobile_display {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    svg {
      height: 41px;
      width: 47px;
    }
    .is_desktop_display {
      display: none;
    }
    .is_mobile_display {
      display: block;
    }
  }
`;

const TitleLogo = () => {
  return (
    <LogoContainer
      onClick={() => {
        window.scrollTo(0, 0);
        window.location.href = "/";
      }}
    >
      <TitleLogoSvg className="is_desktop_display" />
      <TitleLogoMobileSvg className="is_mobile_display" />
    </LogoContainer>
  );
};

export default TitleLogo;
