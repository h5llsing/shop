import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Col, Row } from 'reactstrap'

import anonymousRoutes from './../routes/anonymous'

//import forbiddenImg from './../assets/img/401.svg'

const ForbiddenPage = () => {

  return (
    <Container className="pt-4 pb-4">
      <Row>
        <Col className="text-center d-flex align-items-center justify-content-center">
          <div>
            <Link to={ anonymousRoutes.path }>
            </Link>
            <h1 className="mt-5"> Forbidden <span className="font-weight-bolder text-primary"> Access </span></h1>
            <p className="lead my-4">Oops! It appears that you do not have permission to access this page. If you think this is a problem for us, please let us know.</p>
            <Link className="btn btn-primary animate-hover" to={ anonymousRoutes.path }>
              <i className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i> Go back home
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default ForbiddenPage
