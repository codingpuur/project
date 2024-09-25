"use client";
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs';
import { Avatar, Typographys, UiKits } from '@/utils/Constant';
import React from 'react';
import AvatarSize from './AvatarSize';
import AvatarStatus from './AvatarStatus';
import AvatarShapes from './AvatarShapes';
import AvatarRatio from './AvatarRatio';
import AvatarGroup from './AvatarGroup';
import { Container, Row } from 'reactstrap';

const AvatarContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={Avatar} parent={UiKits} title={Typographys} />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <AvatarSize />
            <AvatarStatus />
            <AvatarShapes />
            <AvatarRatio />
            <AvatarGroup />
          </Row>
        </div>
      </Container>
    </>
  )
}

export default AvatarContainer;