import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LandMap from "../../components/LandMap";
import Title from "../../components/ContractInfo/Title";
import Owner from "../../components/ContractInfo/Owner";
import Highlight from "../../components/ContractInfo/Highlight";
import Bidbox from "../../components/ContractInfo/Bidbox";
import Buybox from "../../components/ContractInfo/Buybox";
import Parcels from "../../components/ContractInfo/Parcels";
import TopTab from "../../components/TopTab/TopTab";
import BidRecord from "../../components/ContractInfo/BidRecord";
import { headerData, transactionData } from "./ContractsData";
import { parcelTypes } from "../../config/constant";
import { useStyles } from "./ContractsStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LatestSalesTable from "../../components/ContractInfo/LatestSalesTable/LatestSalesTable";
import { useTranslation } from "react-i18next";
import TablePagination from "../../components/Base/TablePagination";
import { useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/salespaces/selectors";
import { parcels } from "../../store/parcels/selectors";
import { ethers } from "ethers";
import { dateConvert } from "../../common/utils";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../config/contracts/BidContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { SpaceProxyAddress } from "../../config/contracts/SpaceRegistryContract";
import { EstateProxyAddress } from "../../config/contracts/EstateRegitryContract";
import { getBidsByToken } from "../../hooks/api";

declare var window: any;
var signer: any, bidContract: any;

const Contract = () => {
  const classes = useStyles();
  const { contractaddress, tokensid } = useParams();
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();
  const [bidItems, setBidItems] = useState<any>();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [highDivLine, setHighDivLine] = useState(false);

  //---------------------------Input value ------------------

  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("0x");
  const [type, setType] = useState("");
  const [saleId, setSaleId] = useState("");
  const [salePrice, setSalePrice] = useState(0);
  const [estate, setEstate] = useState<any>();

  const saleSpaces: any = useAppSelector(selectSaleParcels);
  const tiles: any = useAppSelector(parcels);

  useEffect(() => {
    let estateArray: any = [];
    Object.keys(saleSpaces).forEach((index: any) => {
      const saleParcel = saleSpaces[index];
      if (saleParcel.assetId === tokensid) {
        setSaleId(saleParcel.assetId);
        setSalePrice(saleParcel.priceInWei);
      }
    });

    Object.keys(tiles).forEach((index: any) => {
      const allParcel = tiles[index];
      if (
        allParcel.tokenId === tokensid &&
        contractaddress === SpaceProxyAddress
      ) {
        setOwner(allParcel.owner);
        setType(allParcel.type);
        setTitle(t("Genesis Plaza"));
        setX(allParcel.x);
        setY(allParcel.y);
        estateArray.push({ x: allParcel.x, y: allParcel.y });
      }
      if (
        allParcel.estateId === tokensid &&
        contractaddress === EstateProxyAddress
      ) {
        setOwner(allParcel.owner);
        setType(allParcel.type);
        setTitle(allParcel.name);

        setX(allParcel.x);
        setY(allParcel.y);
        estateArray.push({ x: allParcel.x, y: allParcel.y });
      }
    });
    setEstate(estateArray);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saleSpaces, tiles, tokensid]);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    if (type !== undefined) {
      parcelTypes.indexOf(type) < 0
        ? setHighDivLine(true)
        : setHighDivLine(false);
    }
  }, [type]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    getAllBids();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractaddress, tokensid]);

  const getAllBids = async () => {
    signer = generateSigner(window.ethereum);

    bidContract = generateContractInstance(
      BidContractAddress,
      BidContractAbi,
      signer
    );

    let bids = await getBidsByToken(contractaddress, tokensid);
    setBidItems(bids);
  };
  //pagination reate
  const [curPage, setCurPage] = useState<any>(1);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  var count = transactionData.length;
  var totalPage = Math.ceil(count / 5);

  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div>
            <div className={classes.LandMapContent}>
              <LandMap height={400} width={width} centerX={x} centerY={y} />
            </div>
            <div className={classes.backbtnContainer}>
              <BackButton className={classes.backBtnPosition} />
              <></>
            </div>
          </div>

          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              {/* <div className={classes.items}>
                <Title title={title} />
              </div> */}
              {owner !== undefined && (
                <>
                  <div className={classes.divideLine}></div>
                  <Owner ownerAddress={owner} />
                </>
              )}
              {/* <div
                className={
                  highDivLine === true ? classes.displayNone : classes.highLIght
                }
              >
                <div className={classes.divideLine}></div>
                <Highlight type={type} />
                <div className={classes.divideLine}></div>
              </div> */}
            </div>
            <div className={classes.rightDescription}>
              <div
                className={
                  saleId && saleId === tokensid
                    ? classes.displayNone
                    : classes.BidboxContainer
                }
              >
                <Bidbox selectOwner={owner && owner} />
              </div>
              <div
                className={
                  saleId && saleId === tokensid
                    ? classes.BuyboxContainer
                    : classes.displayNone
                }
              >
                <Buybox price={ethers.utils.formatUnits(salePrice, 18)} />
              </div>
            </div>
          </div>

          <Parcels parcels={estate} />

          {/* <div className={classes.tableRoot}>
            <LatestSalesTable
              columns={headerData}
              rows={transactionData}
              curPage={curPage}
              stepIndex={0}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={handlepgnum}
                totalPage={totalPage}
              />
            </div>
          </div>
          <div>
            <div
              className={
                bidItems?.length === 0 || bidItems === undefined
                  ? classes.displayNone
                  : classes.BidsTitle
              }
            >
              {t("Bids")}
            </div>
            {bidItems?.map((item: any, key: any) => {
              return (
                <BidRecord
                  key={key}
                  fromName={item[1]?.slice(0, 6)}
                  price={ethers.utils.formatUnits(item[2], 18)}
                  time={dateConvert(item[3])}
                />
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contract;
