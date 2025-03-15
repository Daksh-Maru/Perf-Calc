import React from "react";
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <>
        {/*content*/}
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-center fw-bold display-1">Use <span className="text-primary">nav links</span> to get the results</h1>
        </Container>
    </>
  );
}

export default Home;
