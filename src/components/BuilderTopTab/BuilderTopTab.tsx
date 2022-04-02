import React, { useEffect } from "react";
import { BuilderToptabData } from "../../config/constant";
import { TopTabStyle, StyledTopTabBtn } from "./../TopTab/TopTabStyle";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [buildertoptab_index, setBuilderToptabIndex] = React.useState(1);

  const handlehead = (url: string) => {
    navigate(url);
  };
  const query = new URLSearchParams(location.search);
  const category = query.get("section");
  useEffect(() => {
    if (location.pathname.includes("/builder_scenes")) {
      setBuilderToptabIndex(BuilderToptabData.builder_scenes);
    } else if (location.pathname.includes("/builder_land")) {
      setBuilderToptabIndex(BuilderToptabData.builder_land);
    } else if (location.pathname.includes("/builder_names")) {
      setBuilderToptabIndex(BuilderToptabData.builder_names);
    } else if (location.pathname.includes("/builder_collections")) {
      setBuilderToptabIndex(BuilderToptabData.builder_collections);
    }
  }, [location]);

  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.nftfilter}>
              <div className={classes.topbar}>
                <div className={classes.tabsLeft}>
                  <StyledTopTabBtn
                    onClick={() => handlehead("/builder/builder_scenes")}
                    className={
                      buildertoptab_index === BuilderToptabData.builder_scenes
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Scenes")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    onClick={() => handlehead("/builder/builder_land")}
                    className={
                      buildertoptab_index === BuilderToptabData.builder_land
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Land")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    onClick={() => handlehead("/builder/builder_names")}
                    className={
                      buildertoptab_index === BuilderToptabData.builder_names
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Names")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    onClick={() => handlehead("/builder/builder_collections")}
                    className={
                      buildertoptab_index ===
                      BuilderToptabData.builder_collections
                        ? classes.activetoptab
                        : classes.normaltoptab
                    }
                  >
                    {t("Collections")}
                  </StyledTopTabBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
