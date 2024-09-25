import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletUSAMap } from "@/utils/Constant";
import { USAMapData, positionUSA } from "@/Data/Mapdata/Mapdata";
const USAMap = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletUSAMap} subTitle={USAMapData} />
        <CardBody>
          <MapContainer className='jvector-map-height z-0' style={{ height: 389 }} zoom={13} center={positionUSA} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default USAMap;
