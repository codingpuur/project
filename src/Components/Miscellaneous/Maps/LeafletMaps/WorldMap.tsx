import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { LeafletWorldMap } from "@/utils/Constant";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { WorldMapData, usa_POSITION } from "@/Data/Mapdata/Mapdata";

const WorldMap = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2500);
  }, []);
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={LeafletWorldMap} subTitle={WorldMapData} />
        <CardBody>
          {display && (
            <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={usa_POSITION} zoom={13} scrollWheelZoom={true} className='z-0 jvector-map-height'>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </MapContainer>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default WorldMap;
