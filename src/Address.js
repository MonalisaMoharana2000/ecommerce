import React from "react";
import "./Address.css";

function Address() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <div class="_3E8aIl _3F7kj3">
        <span class="_3q7S5O">Manage Addresses</span>
        <div>
          <div class="qkYgWG">
            <div>
              <div class="_1M7g28">
                <form>
                  <span class="_1bYJzd">ADD A NEW ADDRESS</span>
                  <div class="N5Ijry">
                    <div class="yLyjMK">
                      <button class="_2KpZ6l _3JSQZW _3dESVI" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          class="_3bKK5G"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h16v16H0z"></path>
                            <path
                              class=""
                              fill="#fff"
                              d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                            ></path>
                          </g>
                        </svg>
                        current location
                      </button>
                    </div>
                    <div class="_1hGj33">
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          name="name"
                          required=""
                          placeholder="Name"
                          value=""
                        />
                      </div>
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          name="phone"
                          required=""
                          maxlength="10"
                          autocomplete="tel"
                          placeholder="10-digit mobile number"
                          tabindex="2"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="_1hGj33">
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          name="pincode"
                          required=""
                          maxlength="6"
                          placeholder="Pincode"
                          autocomplete="postal-code"
                          tabindex="3"
                          value=""
                        />
                      </div>
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          placeholder="Locality"
                          required=""
                          name="addressLine2"
                          tabindex="4"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="_1hGj33 _3kco7L">
                      <div class="GTbXbG _2kJObl">
                        <div class="_1Y2dIb _1Jqgld">
                          <textarea
                            class="_1sQQBU _1w3ZZo _1TO48q"
                            name="addressLine1"
                            placeholder="Address (Area and Street)"
                            rows="4"
                            cols="10"
                            tabindex="5"
                            required=""
                            autocomplete="street-address"
                          >
                            {" "}
                          </textarea>
                        </div>
                        <div class="_1fa_Yn _18Y7Fu"></div>
                      </div>
                    </div>
                    <div class="_1hGj33">
                      <div class="GTbXbG _1lRtwc _3kco7L">
                        <div class="_1Y2dIb _1Jqgld">
                          <input
                            type="text"
                            class="_1w3ZZo _2mFmU7"
                            name="city"
                            required=""
                            autocomplete="city"
                            tabindex="6"
                            placeholder="City/District/Town"
                            value=""
                          />
                        </div>
                        <div class="_1fa_Yn _18Y7Fu"></div>
                      </div>
                      <div>
                        <div class="_1fB71V">
                          <div class="MnyFPx" placeholder="State"></div>
                          <div class="_1cpOwe _1lRtwc jE2jGc">
                            <select
                              class="_1EDlbo _1lRtwc jE2jGc _2gIrb5"
                              name="state"
                              required=""
                              tabindex="7"
                            >
                              <option value="" disabled="">
                                --Select State--
                              </option>
                              <option value="Andaman &amp; Nicobar Islands">
                                Andaman &amp; Nicobar Islands
                              </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">
                                Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu
                              </option>
                              <option value="Delhi">Delhi</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jammu &amp; Kashmir">
                                Jammu &amp; Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Ladakh">Ladakh</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Puducherry">Puducherry</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                            <span class="_2NY3xT kYuoGH"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_1hGj33">
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          class="_1w3ZZo _2mFmU7"
                          placeholder="Landmark (Optional)"
                          name="landmark"
                          autocomplete="off"
                          tabindex="8"
                          maxlength="200"
                          value=""
                        />
                      </div>
                      <div class="_1lRtwc _1Jqgld">
                        <input
                          type="text"
                          class="_1w3ZZo _2mFmU7"
                          placeholder="Alternate Phone (Optional)"
                          name="alternatePhone"
                          autocomplete="off"
                          tabindex="9"
                          maxlength="10"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="yI40P1">
                      <p class="_2tiHgk">Address Type</p>
                      <div class="_3TMnFu">
                        <div>
                          <label for="HOME" class="_2Fn-Ln _3iI7Qn">
                            <input
                              type="radio"
                              class="_3DAmyP"
                              name="locationTypeTag"
                              readonly=""
                              id="HOME"
                            />
                            <div class="_1XFPmK"></div>
                            <div class="_2jIO64">
                              <span>Home</span>
                            </div>
                          </label>
                          <label for="WORK" class="_2Fn-Ln _3iI7Qn">
                            <input
                              type="radio"
                              class="_3DAmyP"
                              name="locationTypeTag"
                              readonly=""
                              id="WORK"
                            />
                            <div class="_1XFPmK"></div>
                            <div class="_2jIO64">
                              <span>Work</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="l5QiYB _1hGj33">
                      <button
                        class="_2KpZ6l _1JDhFS _1o0c4q _3AWRsL"
                        type="button"
                        tabindex="10"
                      >
                        Save
                      </button>
                      <button
                        class="_2KpZ6l _8NNVow"
                        type="button"
                        tabindex="11"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div class="_1CeZIA">
              <div class="_26SF1Q">
                <div class="umgxnI">
                  <div class="dpjmKp"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
