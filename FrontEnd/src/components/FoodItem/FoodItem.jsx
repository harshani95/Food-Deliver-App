import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useState } from "react";

const FoodItem = (id, name, price, description, image) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!itemCount ? (
          <img
            onClick={() => setItemCount}
            className="add"
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                setItemCount((pre) => pre - 1);
              }}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => {
                setItemCount((pre) => pre + 1);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
