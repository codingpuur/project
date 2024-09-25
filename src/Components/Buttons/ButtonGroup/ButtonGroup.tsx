"use client";
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs'
import { ButtonGroups, Buttons } from '@/utils/Constant'
import GroupButtonClass from './GroupButtonClass/GroupButtonClass'
import RadioBtnClass from './RadioBtnClass/RadioBtnClass'
import NestingButton from './NestingButton/NestingButton'
import VerticalBtnGroup from './VerticalBtnGroup/VerticalBtnGroup'

const ButtonGroup = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ButtonGroups} parent={Buttons} title={ButtonGroups} />
      <Container fluid>
        <Row>
            <GroupButtonClass />
            <RadioBtnClass />
            <NestingButton />
            <VerticalBtnGroup />
        </Row>
      </Container>
    </>
  )
}

export default ButtonGroup