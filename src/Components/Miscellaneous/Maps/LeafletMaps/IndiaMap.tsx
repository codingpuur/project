import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletIndiaMap } from "@/utils/Constant";
import { IndiaMapData, indiaData } from "@/Data/Mapdata/Mapdata";
const IndiaMap = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletIndiaMap} subTitle={IndiaMapData} />
        <CardBody>
          <MapContainer className='jvector-map-height z-0' style={{ height: 389 }} zoom={5} center={indiaData} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndiaMap;
