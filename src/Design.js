import React from "react";
import Navbar from "./Navbar";
function Design() {
  return (
    <div>
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
              <button class="btn btn-success">Kid Accesory</button>
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
              <p>FIND YOUR BEST ACESSORY</p>
              <button class="btn btn-danger">Men Accesory</button>
              <button class="btn btn-primary">Women Accesory</button>
              <button class="btn btn-success">Kid Accesory</button>
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
              <button class="btn btn-danger">Men Accesory</button>
              <button class="btn btn-primary">Women Accesory</button>
              <button class="btn btn-success">Kid Accesory</button>
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

      <h1>hi i found a best design</h1>
    </div>
  );
}

export default Design;
