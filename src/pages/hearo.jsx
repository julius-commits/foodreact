import React from "react";

function Hearo() {
  return (
    <div>
      <section class="hearo">
        <div>
          <span class="hearo-title">Are You Hungry?</span>
          <p class="hearo-text">
            Order Your Favorite Food From Restaurants and shops
          </p>
          <div class="search-container">
            <input
              class="search-input"
              type="text"
              placeholder="Enter Address"
            />
            <button class="main-btn">Search</button>
          </div>
        </div>

        <div>
          <img src="./woman.png" />
        </div>
      </section>
    </div>
  );
}

export default Hearo;
