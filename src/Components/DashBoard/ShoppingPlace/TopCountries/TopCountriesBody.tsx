import { topCountriesData } from "@/Data/Dashboard/ShoppingPlace/TopCountries";
import { Col } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import { ImagePath } from "@/Constant";
const containerStyle = {
  height: "200px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const TopCountriesBody = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });
  return (
    <>
      <ul className="d-flex flex-row">
        {topCountriesData.map((data, index) => (
          <li
            className={`light-card balance-card bg-light-${data.color}`}
            key={index}
          >
            <Image src={`${ImagePath}/dashboard/${data.img}.jpg`} alt="" height={36} width={35}/>
            <div className="Countries">
              <span className={`rounded-pill badge-${data.countrybadge}`}></span>
              <h5>{data.country}</h5>
              <h6 className="mt-1 mb-0">{data.percentage}</h6>
            </div>
          </li>
        ))}
      </ul>
      <Col xl={12} className="mt-4">
        <div className="map-js-height">
          <div id="gmap-simple" className="map-block">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              />
            ) : (
              "Loading"
            )}
          </div>
        </div>
      </Col>
    </>
  );
};

export default TopCountriesBody;
