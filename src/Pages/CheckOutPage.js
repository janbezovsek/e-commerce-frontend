import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBCardText
} from 'mdb-react-ui-kit'
import './CheckOutPage.css'













const CheckOutPage = () => {




  //logic for displaying total amount of items on Checkoutpage
  const TotalArray = []

  Object.keys(localStorage).forEach((key) => {
      
      let name = key
      let variable = JSON.parse(localStorage.getItem(key));
      if((name !== "cartList") && (name !== "login")){
          TotalArray.unshift(variable);
          

      }
      
  })

  // Retrieving data from SessionStorage for Total price
  const PriceArray = []
  let storedValue = JSON.parse(sessionStorage.getItem('price'))
  PriceArray.unshift(storedValue)


  return (
    
    <div>
    <div className="form1">
        <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' placeholder="Name…" />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' placeholder="Last name…"/>
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' placeholder="Company name…" />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' placeholder="Address…"/>
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' placeholder="Email…"/>
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' placeholder="Phone number…" />

      

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      
      
      </form>
      
     
      <form>
    
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#1b2430" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol>
          <MDBCard>
            <MDBCardText position="top">
            Items number ({TotalArray.length})
            </MDBCardText >
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-between mb-0">
                <p className="text-muted mb-0">Total price</p>
                <p className="mb-0">EUR {PriceArray}</p>
              </MDBCardTitle>
            </MDBCardBody>
            <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
              <MDBCardBody>
                {" "}
                <p className="mb-4">Your payment details</p>
                <MDBInput
                  label="Card Number"
                  id="form1"
                  type="text"
                  placeholder="1234 5678 1234 5678"
                  wrapperClass="mb-3"
                />
                <MDBRow className="mb-3">
                  <MDBCol size="6">
                    <MDBInput
                      label="Expire"
                      id="form2"
                      type="password"
                      placeholder="MM/YYYY"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      label="CVV"
                      id="form4"
                      type="password"
                      placeholder="CVV"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                </MDBRow>
                <div className="btn" style={{ color: "success" }}>
                Order now
                </div>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    </form>
    
    </div>
    <br/>
    
   
    <div className="thirdbox">

    </div>
    </div>
    
  )
}

export default CheckOutPage
