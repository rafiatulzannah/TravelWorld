import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty."
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the Hawaiian island's honey- or black-colored beaches, you'll find that Maui is unlike any other tropical destination."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
