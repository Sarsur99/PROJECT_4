import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddToCartButton,
  AddToFavoritesButton,
  CostumeCardPageStyled,
} from "./shared";

function CostumeCardPage() {
  const [costume, setCostume] = useState({});
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    fetch(`/costumes/${id}`)
      .then((r) => r.json())
      .then(setCostume);
  }, []);
  console.log("costume: ", costume);

  const handleAddToFavorites = (e) => {};

  return (
    <div>
      {costume ? (
        <CostumeCardPageStyled>
          <h2>{costume.name}</h2>
          <div className="mainContainer">
            <div className="imageContainer">
              <img src={costume.costume_image} alt="" />
            </div>
            <div className="infoSection">
              <p>Description Text Here</p>
              <div className="buttons">
                <AddToCartButton>Add To Cart</AddToCartButton>
                <AddToFavoritesButton onClick={handleAddToFavorites}>
                  Add To Favorites
                </AddToFavoritesButton>
              </div>
            </div>
          </div>
        </CostumeCardPageStyled>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default CostumeCardPage;
