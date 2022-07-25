import React from "react";

export default function Contact() {
  return (
    <div>
      <div>
        <div className="conimage">
          <div className="cont">
            <h1 style={{ textAlign: "center" }}>CONTACT PAGE</h1>
            <p style={{ fontStyle: "italic", fontWeight: "lighter" }}>
              Please help us to deal with your comments as efficiently as
              possible by supplying the following details. <br />
              Adding your question or comment under the subject.
            </p>
            <div id="space">
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email:</span>
                  <span>my_info@pwc.com</span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone Number:</span>
                  <span>[+234] (1) 2711700, 2703101</span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Address</span>
                  <span>
                    Landmark Towers 5B, Water Corporation Road Victoria
                    Island,Lagos
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <form id="my-form">
          <div className="msg"></div>
          <label>Name</label>
          <input type="text" id="firstName" />
          <label>Email</label>
          <input type="text" id="email" />
          <label htmlFor="questions">Questions/Comments</label>
          <textarea
            name="message"
            rows="10"
            cols="50"
            style={{ paddingBottom: "5px" }}
          ></textarea>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
