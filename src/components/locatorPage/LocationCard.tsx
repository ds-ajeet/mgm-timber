import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
// import phonePin from "..//../images/phone.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
import GetDirection from "../commons/GetDirection";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone,slug } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  return (
    <div className={`location result`} id={`result-${result.index}`}>
      {/* <h3 className="">{result.rawData.name}
      </h3> */}
      <a
              target={"_blank"}
              href={result.rawData.slug}
              className="font-semibold text-orange"
              rel="noreferrer"
            >
              {result.rawData.name}
            </a>
            <div style={{marginLeft:"360px",fontSize:"15px"}}>{metersToMiles(result.distance)} Miles</div>    
      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      <Address address={address} />
      <div className="flex items-center">
        <button><a 
          target={"_blank"}
          className="flex flex-col items-center text-sm text-orange"
          >

          <GetDirection latitude={result?.rawData?.yextDisplayCoordinate?.latitude} longitude={result?.rawData?.yextDisplayCoordinate?.longitude} />

        </a></button></div>
        {/* <div className="flex items-right">{metersToMiles(result.distance)} miles</div> */}

    </div >
  );
}

export default LocationCard;