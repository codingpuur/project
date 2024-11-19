"use client"

import { Button, Form, Row, Col } from 'react-bootstrap'; // Import necessary Bootstrap components

export default function PaymentPage() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Payment Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h4>Enter Your Payment Information</h4>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group controlId="formCardNumber" className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter card number" required />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formExpiryDate">
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control type="month" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formCvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" placeholder="CVV" maxLength={3} required />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formCardHolder" className="mb-3">
                  <Form.Label>Card Holder's Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name on card" required />
                </Form.Group>

                <Form.Group controlId="formAmount" className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="text" value="$29.99" disabled />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Payment
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
