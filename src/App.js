// import Header from './components/Header'
// import Content from './components/Content'
// import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import header from "./header-02.png";
import kdlogo from "./test.png";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("http://49.231.225.53:8080//DMZ/InboundService?url_path=DBService&dbServiceName=SPGetPatientCardDetail&chtnum=0121000003&seq=3")
      .then(response => response.json())
      .then(data => setUsers(data))
      .then(console.log(users.result))
      .then(console.log('xxx'))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    setProfile(users.result);
    // console.log(profile);
    // console.log(users);
  }, [])

  return (
    <>
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
            <div className="content-detail" style={{ color: "#5D5C5C", fontSize: "22px" }}>
              <div align="left">
                <img class="watermark" src={kdlogo} alt="" />
              </div>
              {/* <div>
                {profile.map(profile  => {
                  return (
                    <div key={profile.id}>
                      <p> <label><b><u>Doctor Name</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.doctor}</p>
                      <p> <label><b><u>Date of Surgery</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.date}</p>
                      <p> <label><b><u>Title Type</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.titleType}</p>
                      <p> <label><b><u>Patient Name</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile.patientName}</p>
                      <hr />
                    </div>
                  );
                })}
              </div> */}
              <div>
                <div >
                  <p> <label><b><u>Doctor Name</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile[0].doctor}</p>
                  <p> <label><b><u>Date of Surgery</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile[0].date}</p>
                  <p> <label><b><u>Title Type</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile[0].titleType}</p>
                  <p> <label><b><u>Patient Name</u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;{profile[0].patientName}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-con">
          <div className="content-r">
            <h1>Figure.</h1>
            {/* <div style={{ textAlign: "center" }}>
              {profile.map(profile => {
                return (
                  <div key={profile.id}>
                    <img src={profile.Photo} width="70%"></img>
                    <br /><br />
                  </div>
                );
              })}
            </div> */}
            <div style={{ textAlign: "center" }}>
              <div key={profile.id}>
                <img src={profile[0].Photo} width="60%"></img>
                <br /><br />
              </div>
            </div>
          </div>
        </section>

        <hr size="40" color="1D0368"></hr>
      </div>

    </>
  );
}

export default App;
