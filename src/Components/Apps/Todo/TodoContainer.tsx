"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, ToDoHeading } from "@/utils/Constant";
import TodoSideBar from "./TodoSideBar/TodoSideBar";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoList from "./TodoList/TodoList";

const TodoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ToDoHeading} title={ToDoHeading} parent={Apps} />
      <Container fluid className="email-wrap bookmark-wrap todo-wrap">
        <Row>
          <Col xl={3} className="xl-30 box-col-4e">
            <TodoSideBar />
          </Col>
          <Col xl={9} className="xl-70 box-col-8">
            <Card>
              <TodoHeader/>
              <CardBody>
                <div className="todo">
                  <div className="todo-list-wrapper theme-scrollbar">
                    <div className="todo-list-container">
                      <TodoList />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoContainer;
