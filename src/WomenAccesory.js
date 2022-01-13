import React from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import {
  AddShoppingCart,
  FavoriteSharp,
  SearchSharp,
} from "@material-ui/icons";
import { IconButton, Icon } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export default class WomenAccesory extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      cat: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          user: result,
          cat: result.category,
        });
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <>
          {this.state.user
            .filter((name) => name.category == "women's clothing")
            .map((u, i) => {
              return (
                <Container>
                  <Wrapper>
                    <ImgContainer>
                      <Image src={u.image} />
                    </ImgContainer>
                    <InfoContainer>
                      <Title>{u.title}</Title>
                      <Desc>{u.description}</Desc>
                      <Price>
                        {" "}
                        <Icon aria-label="CurrencyRupee" class="text">
                          <CurrencyRupeeIcon />
                        </Icon>
                        {u.price}
                      </Price>
                      <FilterContainer>
                        <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color="black" />
                          <FilterColor color="darkblue" />
                          <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                          </FilterSize>
                        </Filter>
                      </FilterContainer>
                      <a
                        href="#"
                        class="btn btn-primary"
                        class="btn btn-outline-primary"
                        style={{ width: "130px", height: "40px" }}
                      >
                        BY
                      </a>
                      <IconButton
                        aria-label="Add to Cart"
                        class="btn btn-outline-danger"
                      >
                        <AddShoppingCart />
                      </IconButton>
                      <IconButton
                        aria-label="Wishlist"
                        class="btn btn-outline-primary"
                      >
                        <FavoriteSharp />
                      </IconButton>

                      <AddContainer>
                        <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add />
                        </AmountContainer>
                      </AddContainer>
                    </InfoContainer>
                  </Wrapper>
                </Container>
              );
            })}
        </>
      </div>
    );
  }
}
