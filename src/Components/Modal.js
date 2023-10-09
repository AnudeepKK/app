import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Modal.css"

import { Zoom } from "react-awesome-reveal";

const Modal = ({ data, closeModal }) => {
  return (
    <div className="overlay">A
      <Zoom className="zoom-out" duration={500}>
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-fixed">
              <div id="head">
                <h5>{data.name}</h5>
                <div>
                  <AiOutlineClose
                    onClick={() => closeModal(false)}
                    className="closeres"
                  />
                </div>
              </div>
              <div className="info">
                <div>
                  <img src={data.image} className="img" alt="" />
                </div>

                <div className="quick-info">
                  <div>
                    <AiFillTrophy /> <h2>{data.prize}</h2>
                  </div>
                  <div>
                    <BsCalendar2DateFill /> <h2> {data.date}</h2>
                  </div>
                </div>
                <div className="contact-info">
                  <h2>ORGANIZER DETAILS:</h2>

                  {data.contactDetails.map((e, i) => (
                    <div key={i} className="organizer">
                      <div>
                        <BsFillPersonFill /> <span>{e.name}</span>
                      </div>
                      <div className="tele">
                        <BsFillTelephoneFill />{" "}
                        <span>
                          <a href={`tel:${e.phoneNumber}`}>{e.phoneNumber}</a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-relative">
              <AiOutlineClose
                onClick={() => closeModal(false)}
                className="close"
              />

              <div>
                <h5>DESCRIPTION:</h5>
                <p>{data.desc}</p>
              </div>
              {data.rules && (
                <div className="">
                  <h5>RULES:</h5>
                  <p className=" ">
                    <ul>
                      {data.rules.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              {data.registrations && (
                <div className="">
                  <h5>REGISTRATION DETAILS:</h5>
                  <p className=" ">
                    <ul>
                      {data.registrations.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              {data.judgingCriteria && (
                <div className="">
                  <h5>JUDGING CRITERIA:</h5>
                  <p className="   ">
                    <ul className=" ">
                      {data.judgingCriteria.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}

              {data.format && (
                <div>
                  <h5>FORMAT:</h5>
                  {Object.keys(data.format).map((key, index) => {
                    return (
                      <div key={index} className="round">
                        {key && <h4>{key}</h4>}
                        <p>
                          <ul>
                            {data.format[key].map((value, index) => (
                              <li key={index}>{value}</li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {data.teamReq && (
                <div className="">
                  <h5>TEAM REQUIREMENTS:</h5>
                  <p className="   ">
                    <ul className=" ">
                      {data.teamReq.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              )}
              <div className="note">
                <p>
                  <span>NOTE:</span> Rules are subjected to changes.
                </p>
              </div>

              <div className="buttons">
                <div>
                  <a href={data.link}>
                    <button className="button-62">Download Rulebook</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Modal;
