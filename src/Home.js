 import React from "react";
 import { AddShoppingCart,FavoriteSharp,SearchSharp,} from "@material-ui/icons";

 import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
 import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";





 const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          user: result
        });
        console.log(result);
      });
  }
  render() {
    return (
      <div style={{backgroundColor:"black"}}>
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://source.unsplash.com/1400x300/?pant,pant"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Wellcome to Dhanes Kart.com</h5>
                <p>start to find your outfit</p>
                <button class="btn btn-danger">Men Accesory</button>
                <button class="btn btn-primary">Women Accesory</button>
                <button class="btn btn-success">Jewelery</button>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/1400x300/?shirt,shirt"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>POPULAR OUTFIT DESIGN SITE</h5>
                <p>FIND YOUR BEST  ACESSORY</p>
                <button class="btn btn-danger">Men Accesory</button>
                <button class="btn btn-primary">Women Accesory</button>
                <button class="btn btn-success">Jewelery</button>
                <button class="btn btn-danger">Electronics</button>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/1400x300/?Shoes,Shoes"
                class="d-block w-100"
                alt="..."
              />
              <img src="" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>LETS START SHOPING </h5>
                <p>LETS BINDS WITH US </p>
                <button class="btn btn-danger" >Men Accesory</button>
                <button class="btn btn-primary">Women Accesory</button>
                <button class="btn btn-success">Jewelery</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        



        
        <div className="pro-card"> {this.state.user.map((u, i) => {
            return (
              <div >
                
                <div className="pro-title" style={{alignContent:"center",    textAlign: "center",backgroundColor:"wheat"}}>
   <p key={i} style={{color:"black"}}>{u.category}</p>
</div>
        
   <Container>
     
 <Circle />
    
 
        <Image src={u.image} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
 
   
    
  
</div>
           
                   
              
               
              
            );
          })}

</div> 

      
      </div>
    );
  }
}
