import React from "react";
import { Accordion as BootstrapAccordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";

const AccordionComponent = () => {
    return (
        <div className="container mt-5">
            <h2>React Bootstrap Accordion</h2>
            <BootstrapAccordion>
                <BootstrapAccordion.Item eventKey="0">
                    <BootstrapAccordion.Header>What is an accordion in Bootstrap?</BootstrapAccordion.Header>
                    <BootstrapAccordion.Body>
                        Accordion is a vertically collapsing element to show and hide content via class changes.
                    </BootstrapAccordion.Body>
                </BootstrapAccordion.Item>
                <BootstrapAccordion.Item eventKey="1">
                    <BootstrapAccordion.Header>What is React?</BootstrapAccordion.Header>
                    <BootstrapAccordion.Body>
                        React is a JavaScript library that helps developers create user interfaces for websites, mobile apps, and desktop apps.
                    </BootstrapAccordion.Body>
                </BootstrapAccordion.Item>
                <BootstrapAccordion.Item eventKey="2">
                    <BootstrapAccordion.Header>What is Bootstrap and why it is used?</BootstrapAccordion.Header>
                    <BootstrapAccordion.Body>
                        Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.
                    </BootstrapAccordion.Body>
                </BootstrapAccordion.Item>
            </BootstrapAccordion>
        </div>
    );
};

export default AccordionComponent;