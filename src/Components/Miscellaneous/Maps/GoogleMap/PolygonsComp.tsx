import { Card, CardBody, Col } from 'reactstrap';
import CommonHeader from '@/Common/CommonHeader';
import {GoogleMap,useJsApiLoader,} from "@react-google-maps/api";
import { Polygons } from '@/utils/Constant';
import { center, containerStyle } from '@/Data/Mapdata/Mapdata';
 
const PolygonsComp = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
      });
  return (
    <Col lg={6} md={12}>
      <Card>
        <CommonHeader title={Polygons} />
        <CardBody>
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                ></GoogleMap>
              ) : (
                "loading"
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PolygonsComp