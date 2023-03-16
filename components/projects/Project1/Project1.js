import React from "react";
import "./Project1.css"
import {Container, Col, Row} from "react-bootstrap";
import {NavBar} from "./NavBar";
import fur1 from "/home/merve/Masaüstü/personal-portfolio/src/assets/img/furniture1.png"


export const Project1 = () => {
    return (
      <div id="project1">
        <NavBar />
        <Container id="project-con1">
          <Col id="img-col1">
            <h1 id="title">Basic Furniture Company Automation</h1>
            <img src={fur1} alt="" id="project1-img"/>
          </Col>
          <Col id="introduction">
            <br/>
            <h2>Introduction</h2><br/>
            <Col id="aim-scope">
              <h3>Aim and Scope</h3><br/>
              <Col id="aim">
                <h4>
                Aim
                </h4>
                <p>
                  I aimed to design a complete automated system for a furniture 
                  company that has 4 branches to make easier the tasks of 
                  administrators and branch employees and, to give a better service to 
                  customers.
                </p>
              </Col>
              <Col id="scope">
              <h4>Scope</h4>
              <p>In this project, branch employees and administrator will not log in to 
                the system with an email and password. They will only choose the 
                branch employee option.
              </p><br/>
              </Col>
            </Col>
            <Col id="goals-success">
              <h3>Goals and Criteria for Success</h3><br/>
              <Col id="goals">
                <h4>Goals</h4>
                <p>
                  • Easy access to product lists. <br/>
                  • East access to previous orders of a customer by customer or 
                  branch employee.<br/>
                  • Quick addition of branch and branch employee.<br/>
                  • Quick addition of product.<br/>
                  • Quick deletion of branch and branch employee.<br/>
                  • Quick deletion of product.<br/>
                  • Quick access to query the products in the branches.<br/>
                  • Quick access to searching products in a branch.<br/>
                  • Quick access to branches that has the requested products.<br/>
                  • Easy access to online buying.<br/>
                  • Easy access to product situations in the stock.<br/>
                  • Give information to administrator quickly.<br/>
                  • Easy access to addition of new product.<br/>
                </p>
              </Col>
              <Col id="success">
                <h4>Criteria for Success</h4>
                <p>• Helping customers to buy products quickly, see products in a 
                    requested branch, see previous orders and see if a requested 
                    product is available or not in any branch. <br />
                    • Helping branch employees to check situations of products, give 
                    information to administrator, sell product, demonstrate 
                    previous order of a customer by using her/his customer 
                    number, add new order to given customers previous orders list, 
                    add product to a branch and remove product from a branch.<br />
                    • Helping administrator to add branch, remove branch, add 
                    branch employee, remove branch employee and query the 
                    products in the requested branches.<br /><br/>
                </p>
              </Col>
            </Col>
            <Col id="overview">
              <h3>General Overview</h3>
              <p>This project is a complete automated system for a furniture company 
                that has 4 branches. Administrator can add new branches.
              </p><br/>
            </Col>
          </Col>
          <Col id="system-req">
            <Col id="func">
              <Col id="info">
                <br/>
              <h2>System Requirements</h2><br/>
              <p>Firstly, user must create a company with a company name and administrator 
                  name or continue with the default company that is created by me. <br />
                  Then user can choose which user type she/he want to continue with.</p><br/>
              <h3>Functional Requirements</h3><br/>
              </Col>
              <Col id="admin">
                <h4>Administrators can do:</h4>
                <p>
                  There is no need to subscription to system for administrators.
                  They can add/remove branches, <br/>
                  They can add/remove branch employees, <br/>
                  They can query the products. <br/>
                </p>
              </Col>
              <Col id="employee">
                <h4>Branch Employees can do:</h4>
                <p>
                They can check product situation, <br />
                They can demonstrate the previous orders, <br />
                They can give information to administrators <br />
                They can sell/add/remove products <br />
                </p>
              </Col>
              <Col id="customer">
                <h4>Customers can do: </h4>
                <p>
                They can search products, search branches that has the requested product, <br/>
                They can see the product list, <br/>
                They can shop online, <br/>
                They can check previous orders, <br />
                They can subscribe. <br/>
                </p>
              </Col>
            </Col>
          </Col>
        </Container>
      </div>
    );
}

