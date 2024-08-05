import React from "react";

function Stepsinfo() {
  return (
    <div>
      <section class="center">
        <section class="steps-info">
          <div>
            <img src="./imagefood.png" alt="food" />
          </div>

          <section class="text-image">
            <div>
              <span class="steps-head">How It Works</span>
              <div>
                <div class="step-item">
                  <div class="step-num">01</div>
                  <div>
                    <p class="step-title">Enter Your Location</p>
                    <p class="step-doc">
                      We'll Show you stores and restaurants nearby you can order
                      from
                    </p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-num">02</div>
                  <div>
                    <p class="step-title">Find What You Want</p>
                    <p class="step-doc">
                      Search for items or dishes, businesses or cuisines.
                    </p>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-num">03</div>
                  <div>
                    <p class="step-title">Order For Delivery</p>
                    <p class="step-doc">
                      We'll update you on your order's progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="side-image">
              <img src="./pasta.png" alt="food" />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Stepsinfo;
