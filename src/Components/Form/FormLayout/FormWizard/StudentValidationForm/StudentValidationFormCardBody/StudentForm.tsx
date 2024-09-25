import { Button, Col, Form, Input, InputGroup, Label, Row } from 'reactstrap'
import { AddProfile, ConfirmPassword, Email, Github, Name, Next, Password, PortfolioURL, Previous, ProjectDescription, SocialLinks, Submit, Twitter } from '@/utils/Constant'
import { StudentFormPropsType } from '@/Types/FormLayoutTypes';

const StudentForm:React.FC<StudentFormPropsType> = ({handleImageLabelClick,imageUrl,getUserData,studentValidationForm,level,handleNextButton,fileInputRef,handleBackButton}) => {
  const {password,name,email,confirmPassWord,portfolioURL,projectDescription,twitterUrl,gitHubUrl,} = studentValidationForm;
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="form-wizard">
      <div className={`tab ${level === 1 ? "d-block" : "d-none"}`}>
        <Row className="g-3">
          <Col sm={6}>
            <Label>{Name}</Label>
            <Input onChange={getUserData} value={name} name="name" type="text" placeholder="Enter your name" />
          </Col>
          <Col sm={6}>
            <Label>{Email}<span className="txt-danger">*</span></Label>
            <Input name="email" onChange={getUserData} value={email} type="email" placeholder="Cion@gmail.com"/>
          </Col>
          <Col xs={12}>
            <Label>{Password}<span className="txt-danger">*</span></Label>
            <Input name="password" onChange={getUserData} value={password} type="password" placeholder="Enter password"/>
          </Col>
          <Col xs={12}>
            <Label>{ConfirmPassword}<span className="txt-danger">*</span></Label>
            <Input name="confirmPassWord" onChange={getUserData} value={confirmPassWord} type="password" placeholder="Enter confirm password"/>
          </Col>
        </Row>
      </div>
      <div className={`tab ${level === 2 ? "d-block" : "d-none"}`}>
        <Row className="g-3 avatar-upload">
          <Col xs={12}>
            <div>
              <div className="avatar-edit">
                <Input onChange={getUserData} innerRef={fileInputRef} className="d-none" type="file" accept=".png, .jpg, .jpeg"name="imageUpload" />
                <Label htmlFor="imageUpload" onClick={handleImageLabelClick} />
              </div>
              <div className="avatar-preview">
                <div id="image" style={{backgroundImage: imageUrl? `url(${imageUrl})`: ("/assets/images/forms/user.png")}}/>
              </div>
            </div>
            <h3>{AddProfile}</h3>
          </Col>
          <Col xs={12}>
            <Label>{PortfolioURL}</Label>
            <Input value={portfolioURL} onChange={getUserData} name="portfolioURL" type="url" placeholder="https://Cion"/>
          </Col>
          <Col xs={12}>
            <Label>{ProjectDescription}</Label>
            <Input type="textarea" value={projectDescription} onChange={getUserData} name="projectDescription" rows={2} />
          </Col>
        </Row>
      </div>
      <div className={`tab ${level === 3 ? "d-block" : "d-none"}`}>
        <h5 className="mb-2">{SocialLinks}</h5>
        <Row className="g-3">
          <Col sm={6}>
            <Label>{Twitter}</Label>
            <Input name="twitterUrl" onChange={getUserData} value={twitterUrl} type="url" placeholder="https://twitter.com"/>
          </Col>
          <Col sm={6}>
            <Label>{Github}</Label>
            <Input name="gitHubUrl" onChange={getUserData} value={gitHubUrl} type="url" placeholder="https:/github.com"/>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <Input name="studentFile" onChange={getUserData} type="file" />
              <Button color="secondary" outline>{Submit}</Button>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <Input type="select" onChange={getUserData} name="positions">
              <option >Positions</option>
              <option >Web Designer</option>
              <option >Software Engineer</option>
              <option >UI/UX Designer </option>
              <option >Web Developer</option>
            </Input>
          </Col>
          <Col xs={12}>
            <Label>Why do you want to take this position?</Label>
            <Input type="textarea" name="positionQuestion" onChange={getUserData} id="questionsTextarea" rows={2} defaultValue={""}/>
          </Col>
        </Row>
      </div>
      <div>
        <div className="d-flex justify-content-end gap-2 align-center pt-3">
          {level > 1 && (<Button color="secondary" onClick={handleBackButton}>{Previous}</Button>)}
          <Button color="primary" onClick={handleNextButton}>{Next}</Button>
        </div>
      </div>
      <div className="text-center"><span className="step" /><span className="step" /><span className="step" /><span className="step" /></div>
    </Form>
  )
}

export default StudentForm