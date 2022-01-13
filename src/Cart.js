import React from "react";
import {
  AddShoppingCart,
  FavoriteSharp,
  SearchSharp,
} from "@material-ui/icons";
import { IconButton, Icon } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          user: result,
        });
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        {this.state.user.map((u, i) => {
          return (
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <p key={i} style={{ color: "black" }}>
                        {u.id}
                      </p>

                      {/* <img
                 src={u.image}
                 alt="image"
                 style={{
                   width: "20%",
                   backgroundColor: "blue",
                   WebkitTextFillColor: "maroon",
                   padding: 5,
                   boarder: "solid",
                   textAlign: "center",
                   fontSize: 20,
                   fontStyle: "bold"
                 }}
               /> */}
                      <div
                        style={{
                          backgroundColor: "black",
                          fontSize: 15,
                          WebkitTextFillColor: "fuchsia",
                        }}
                      >
                        ID:{u.userId}
                        <h5 class="card-title">{u.date}</h5>
                        <div
                          style={{
                            backgroundColor: "black",
                            fontSize: 15,
                            WebkitTextFillColor: "white",
                          }}
                        >
                          {u.description}
                        </div>
                        <a
                          href="#"
                          class="btn btn-outline-primary"
                          style={{ width: "50" }}
                        >
                          By
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
