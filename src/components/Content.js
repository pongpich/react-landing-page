import React from 'react'
import "./Content.css"
import header from "../header-02.png";
import kdlogo from "../test.png";


function Content() {
    return (
        <div className="container">
            <section className="content-con-header" >
                <div className="content-l">
                    <img src={header} alt="" />
                </div>

            </section>
            <hr size="40" color="1D0368"></hr>
            <section className="content-con">
                <div className="content-r" style={{ marginTop: "-25px" }}>
                    <h1>Patient Implant Information</h1>
                    <hr style={{ marginTop: "-10px" }}></hr>
                    <div className="content-detail" style={{ color: "#5D5C5C", fontSize: "23px" }}>
                        <div align="left">
                            <img class="watermark" src={kdlogo} alt="" />
                        </div>
                        <div>
                            {profile.map(profile => {
                                return (
                                    <div key={profile.id}>
                                        <h2>name: {profile.Photo}</h2>
                                        {/* <p> <label><b><u>Doctor Name</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.Photo}</p>
                                        <p> <label><b><u>Date of Surgery</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.date}</p> */}
                                        {/* <p> <label><b><u>Surgeon</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.Photo}</p> */}
                                        <hr />
                                    </div>
                                );
                            })}
                        </div>




                    </div>

                </div>

            </section>
            <section className="content-con">
                <div className="content-r">
                    <h1>Figure.</h1>
                    <hr></hr>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <hr size="40" color="1D0368"></hr>
        </div>
    )
}

export default Content
