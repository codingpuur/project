"use client";
import React from "react";
import { Container } from "reactstrap";
import { BackToHomePage, MAINTENANCE } from "@/utils/Constant";
import Link from "next/link";

const MaintenanceContainer = () => {
  return (
    <div className='page-wrapper'>
      <div className='error-wrapper maintenance-bg'>
        <Container>
          <ul className='maintenance-icons'>
            <li>
              <i className='fa fa-cog' />
            </li>
            <li>
              <i className='fa fa-cog' />
            </li>
            <li>
              <i className='fa fa-cog' />
            </li>
          </ul>
          <div className='maintenance-heading'>
            <h2 className='headline'>{MAINTENANCE}</h2>
          </div>
          <h4 className='sub-content'>
            Our Site is Currently under maintenance We will be back Shortly
            <br /> Thank You For Patience
          </h4>
          <div>
            <Link className='btn btn-primary-gradien btn-lg text-light' href={`/dashboards/portfolio/current-holding`}>
              {BackToHomePage}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MaintenanceContainer;
