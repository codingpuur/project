"use client";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { UserEdits, Users } from "@/utils/Constant";
import EditMyProfile from "./EditMyProfile/EditMyProfile";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload/AddProjectsAndUpload";

const UserEditContainer = () => {
  return (
    <>
      <Breadcrumbs title={UserEdits} mainTitle={UserEdits} parent={Users} />
      <Container fluid>
        <div className='edit-profile'>
          <Row>
            <EditMyProfile />
            <EditProfileForm />
            {/* <AddProjectsAndUpload /> */}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UserEditContainer;
