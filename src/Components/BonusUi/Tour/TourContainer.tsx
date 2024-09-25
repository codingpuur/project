"use client";
import React from 'react'
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Tours } from "@/utils/Constant";
import { TourProvider } from "@reactour/tour";
import { tourSteps } from '@/Data/BonusUi/Tour/TourData';
import TourPage from '.';

const TourContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={Tours} parent={BonusUi} title={Tours} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <TourProvider
              steps={tourSteps}
              disableInteraction={true}
              disableKeyboardNavigation={false}
            >
              <TourPage />
            </TourProvider>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default TourContainer