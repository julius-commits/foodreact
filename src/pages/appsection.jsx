import React from "react";

function Appsection() {
  return (
    <div>
      <section class="app-section">
        <div>
          <div>
            <p class="app-download">Download Our Mobile App</p>
            <p class="app-text">And order food easily</p>
          </div>
          <div class="btn-app-container">
            <button class="btn-app btn-app-dark">
              <img src="./apple.png" />
              <p>Apple Store</p>
            </button>
            <button class="btn-app">
              <img src="./google.png" />
              <p>Google Play</p>
            </button>
          </div>

          <p class="app-text">Or Login or Create an Account to start order</p>
        </div>

        <div class="image-container">
          <img src="./app-image.png" alt="Mobile App Display" />
        </div>
      </section>
    </div>
  );
}

export default Appsection;
