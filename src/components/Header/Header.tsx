import React from "react";
import { HeaderStyle, StyledHeaderBtn } from "./HeaderStyle";
import logo_svg from "./../../assets/svg/logo.svg";
export default function Header() {
  const classes = HeaderStyle();
  const [head_index, setHeaderIndex] = React.useState(1);
  const handleMarketPlace = () => {
    setHeaderIndex(1);
  };
  const handleBuilder = () => {
    setHeaderIndex(2);
  };
  const handleDocs = () => {
    setHeaderIndex(3);
  };
  const handleEvents = () => {
    setHeaderIndex(4);
  };
  const handleDAO = () => {
    setHeaderIndex(5);
  };
  const handleBlog = () => {
    setHeaderIndex(6);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ position: "relative" }}>
            <div className={classes.headermenu_container}>
              <a>
                <img src={logo_svg} className={classes.logo} alt="symbol" />
              </a>

              <StyledHeaderBtn
                disabled={head_index === 1}
                onClick={handleMarketPlace}
              >
                Marketplace
              </StyledHeaderBtn>
              <StyledHeaderBtn
                disabled={head_index === 2}
                onClick={handleBuilder}
              >
                Builder
              </StyledHeaderBtn>
              <StyledHeaderBtn disabled={head_index === 3} onClick={handleDocs}>
                Docs
              </StyledHeaderBtn>
              <StyledHeaderBtn
                disabled={head_index === 4}
                onClick={handleEvents}
              >
                Events
              </StyledHeaderBtn>
              <StyledHeaderBtn disabled={head_index === 5} onClick={handleDAO}>
                DAO
              </StyledHeaderBtn>
              <StyledHeaderBtn disabled={head_index === 6} onClick={handleBlog}>
                Blog
              </StyledHeaderBtn>
            </div>
          </div>
          <div className={classes.account_root}>
            <div className={classes.account_container}>
              <a className={classes.signinbtn}>Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
