import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletAustraliaMap } from "@/utils/Constant";
import { AustraliaMapData, australiaData } from "@/Data/Mapdata/Mapdata";
const AustraliaMap = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletAustraliaMap} subTitle={AustraliaMapData} />
        <CardBody>
          <MapContainer className='jvector-map-height z-0' style={{ height: 389 }} zoom={4} center={australiaData} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AustraliaMap;
