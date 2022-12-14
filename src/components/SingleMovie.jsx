import {Col} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'


const SingleMovie = ({ id, title, plot, image }) => {
    return(
  <Col md={2}>
     <Link to={`/details/${id}`}>
      <img className="poster" alt="movie poster" src={image} />
      </Link>
  </Col>
  )
};

export default SingleMovie