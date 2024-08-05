import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <section>
          <img src="./images/logo.svg" alt="" />
          <p class="footer-text">
            Order Your Favorite Food From Restaurants and shops
          </p>
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
        </section>
        <section class="footer-list">
          <div class="list-head-footer">Foods</div>
          <div class="ul-list">
            <ul>
              <li>Food</li>
              <li>Pizza</li>
              <li>Chinese</li>
              <li>Vegan</li>
              <li>Sushi</li>
              <li>Indian</li>
            </ul>
            <ul>
              <li>Doner</li>
              <li>Burgers</li>
              <li>Ice Cream</li>
              <li>Asian</li>
              <li>Groceries</li>
              <li>Order more food</li>
            </ul>
          </div>
        </section>
        <section class="footer-list">
          <div class="list-head-footer">Quick Links</div>
          <div class="ul-list">
            <ul>
              <li>Customer Service</li>
              <li>Recommend a business</li>
              <li>List Your Business</li>
              <li>Become an affiliate</li>
              <li>Become a courier</li>
              <li>Jobs</li>
            </ul>
            <ul>
              <li>Points</li>
              <li>Terms of use</li>
              <li>Privacy Statement</li>
              <li>Colophon</li>
              <li>Cookie statement</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </section>
      </footer>
      <section class="copy-right">
        <div>
          <p class="copy-right-text">Hanki By TeachMeCode Institute 2024</p>
        </div>
        <div>
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </div>
      </section>
    </div>
  );
}

export default Footer;
