import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import { CardGroup, Card, Container } from 'react-bootstrap';
const openIntegration = () => {
    
}
const Services = () => {

    return (
    <CardGroup id ="services" className='card-group'>

    <Card className="mb-3" onClick={openIntegration}>
    <Link  to="services/integration"  >
    <Card.Img variant="top" src="img/cards/card_integration1.jpeg" />
    </Link>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text style={{textAlign:'center'}}>
      Интеграция с текущими информационными системами
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 
  <Card className="mb-3">
    <Card.Img variant="top" src="img/cards/card_mobile_dev1.jpeg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text style={{textAlign:'center'}}>
      Разработка мобильных приложений{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="mb-3">
    <Card.Img variant="top" src="img/cards/card_support.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text style={{textAlign:'center'}} >
      Поддержка текущих информационных систем
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    </CardGroup>
    

    );
}

export default Services

{/* <div id ="services" >
<div className="container" >
    
<h3>Услуги</h3>
<p>Интеграция с текущими информационными системами</p>
<br/>
<p>

    Разработка мобильных приложений
</p>
<p>Поддержка текущих информационных систем</p>

</div>
</div> */}