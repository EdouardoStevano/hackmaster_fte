import React from "react";
import Chart from "react-apexcharts";
import "./home.scss";

import visiteur from "../../../../assets/branding/img/480x320/img16.jpg";
import avis from "../../../../assets/branding/img/480x320/img12.jpg";
import contribution from "../../../../assets/branding/img/480x320/img17.jpg";
function MainDashboard() {
  const options = [
    {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
    },
  ];
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  const option2 = {};

  const serie2 = [44, 55, 41, 17, 15];

  return (
    <div className="main-home-bloc">
      <div className="main-home-container">
        <div className="chart-component">
          <Chart options={options[0]} series={series} type="bar" width="500" />
        </div>

        <div className="card-data">
          <div className="card">
            <img src={visiteur} alt="" />
            <h1>35</h1>
            <p>Nombre de Visiteur</p>
          </div>
          <div className="card">
            <img src={avis} alt="" />
            <h1>10</h1>
            <p>Nombre d'avis</p>
          </div>
          <div className="card">
            <img src={visiteur} alt="" />
            <h1>35</h1>
            <p>Nombe de Contribution</p>
          </div>
        </div>

        <div className="conteniare-bottom">
          <div className="content-explication-data">
            <p>Buenvenue dans Votre espace Personnelle</p>
          </div>

          <div>
            <Chart options={option2} series={serie2} type="donut" width="350" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
