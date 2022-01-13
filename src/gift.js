import React from "react";
import "./gift.css";

function gift() {
  return (
    <div>
      <div class="index-base">
        {" "}
        <div class="personalize-page">
          <div class="personalize-header">
            <div>DESIGN GIFT CARD</div>
          </div>
          <div
            class="personalize-occasionBg"
            style={{
              backgroundImage:
                "url&quot;https://assets.myntassets.com/assets/images/2020/12/18/58687ffa-2738-4c44-9923-a8d4c88c0c441608269748277-Background.jpg&quot",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <div class="personalize-occasionsListContainer">
              <div>
                <div class="">
                  <div
                    class="occasionspicker-occasionsContainer"
                    style={{ maxHeight: "95px" }}
                  >
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Wedding</div>
                    </div>
                    <div
                      tabindex="0"
                      class="occasionspicker-occasionDivSelected occasionspicker-occasionDiv"
                    >
                      <div>Christmas</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Festive</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Birthday</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Season's Greetings</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Anniversary</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Welcome</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Wishes</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Congrats</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Good Luck</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Mom</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Dad</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Grand Parents</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Sibling</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Child</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Friend</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Best Spouse</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Engagement</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Farewell</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>Thank You</div>
                    </div>
                    <div tabindex="0" class="occasionspicker-occasionDiv">
                      <div>My Idol</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="occasionspicker-showMoreLink occasionspicker-show"
                    style={{ display: "block" }}
                  >
                    Show More
                  </div>
                </div>
              </div>
            </div>
            <div class="personalize-occasionCard">
              <div
                class="personalize-occasionCardImageContainer"
                style={{ height: "221px" }}
              >
                <div class="personalize-occasionCardImageDiv">
                  <img
                    src="https://assets.myntassets.com/assets/images/2021/11/16/987f7c7a-cc7a-4ae5-ac52-358abfe803bb1637043932419-1637043932269.png"
                    class="personalize-occasionCardImage"
                  />
                  <div
                    class="personalize-editPhotoTip sprites-photoEditTip giftcard-sprite
                    personalize-show"
                  ></div>
                  <div class="imageuploader-fileButtonDiv">
                    <div class="imageuploader-editPhotoIcon sprites-photoEdit giftcard-sprite"></div>
                    <input type="file" accept="image/*" />
                  </div>
                </div>
              </div>
            </div>
            <div title="" class="personalize-error"></div>
            <div></div>
            <div class="personalize-editMessageContainer">
              <label for="message">Edit Message</label>
              <input
                id="message"
                class="personalize-input"
                type="text"
                maxlength="120"
                value="Best wishes for the festive season!"
              />
              <div class="personalize-error">
                &lt;, &gt;, &amp; are not allowed
              </div>
            </div>
            <div class="personalize-action">
              <a href="/giftcard/buy">
                <button class="personalize-next">NEXT</button>
              </a>
            </div>
            <div class="personalize-hideModal"></div>
            <div class="personalize-hideDisplay">
              <div class="personalize-spinner"></div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default gift;
