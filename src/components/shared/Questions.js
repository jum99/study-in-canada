import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: "rgba(14, 93, 165, 1)",
        color: "white",
        height: 50,
        width: 50,
        fontSize: 28,
        // textAlign: "center",
        border: "none",
        fontWeight: "bold",
        borderRadius: 50,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Questions() {
  return (
    <div
      className="mb-5"
      style={{ backgroundColor: "rgba(247, 247, 247, 1)", padding: "10px" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 mt-5">
          Frequently Asked Questions (FAQ's)
        </h2>
        <Accordion defaultActiveKey="0">
          <div className="d-flex">
            <div style={{ width: "50%", marginRight: 15 }}>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="0">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    delectus dolore, placeat a perferendis tempora.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="1">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="2">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="3">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
            <div style={{ width: "50%" }}>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="4">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="5">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="6">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="7">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  Lorem ipsum dolor sit amet?
                  <CustomToggle eventKey="8">+</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    repudiandae nemo, voluptatibus distinctio inventore
                    architecto!{" "}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default Questions;
