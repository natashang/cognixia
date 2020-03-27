import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./router.css";

export default function Router(props) {
  const style = {
    margin: "15px",
    padding: "10px"
  };

  return (
    <div>
      <ButtonToolbar>
        <BrowserRouter>
          <div className="containerRouter">
            {props.links.map(link => {
              return (
                <>
                  <Button
                    onClick={() => props.changePage(link.to)}
                    variant="outline-primary"
                    style={style}
                  >
                    <Link to={link.to}>{link.name}</Link>
                  </Button>
                </>
              );
            })}
          </div>
        </BrowserRouter>
      </ButtonToolbar>
    </div>
  );
}
