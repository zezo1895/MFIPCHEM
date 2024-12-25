import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import poster3 from "../img/photo_2024-12-24_00-56-57.jpg"
const Cart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <>
<div className='container-all'>
  <div className="row g-6 justify-content-center p-3 mb-3">
    {/* الكرت الأول */}
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg-auto col-md-6 col-sm-6 col-12 mb-2" style={{ maxWidth: '300px', textAlign: 'center' }}>
      <Card style={{ margin: "0 auto", textAlign: "center" }}>
        <Card.Img src={poster3} variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='button-cart' >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  
  
  </div>
</div>


  </>
  );
}

export default Cart;
