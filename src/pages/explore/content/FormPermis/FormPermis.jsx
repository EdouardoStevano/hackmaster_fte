import React from "react";
import "./formPermis.scss";
import ReactSignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import { useState } from "react";
import DemmandeGennerer from "./content/DemmandeGennerer";
import { Value } from "sass";
import { Link } from "react-router-dom";
const FormPermis = () => {
  const [open, setOpen] = useState(false);

  const [sign, setSign] = useState();
  const [url, seturl] = useState();

  const handleClear = () => {
    sign.clear();
    setnom("");
    setprenom("");
    setAge("");
    setAdresse("");
    setdate("");
    setlieuNaiss("");
    setSexe("");
    seturl("");
  };

  const handleValidate = () => {
    handleGenerate();
    setOpen(!open);
  };
  const handleGenerate = () => {
    seturl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  const [nom, setnom] = useState("");
  const handleChangeNOm = (e) => {
    setnom(e.target.value);
  };
  const [prenom, setprenom] = useState("");
  const handleChangePrenom = (e) => {
    setprenom(e.target.value);
  };
  const [age, setAge] = useState("");
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const [adresse, setAdresse] = useState("");
  const handleChangeAdresse = (e) => {
    setAdresse(e.target.value);
  };
  const [sexe, setSexe] = useState("");
  const handleChangeSexe = (e) => {
    setSexe(e.target.value);
  };
  const [date, setdate] = useState("");
  const handleChangedate = (e) => {
    setdate(e.target.value);
  };
  const [lieuNaiss, setlieuNaiss] = useState("");
  const handleChangeLieuNaiss = (e) => {
    setlieuNaiss(e.target.value);
  };
  return (
    <>
      <div className="formPermis-bloc">
        <div className="btn-retour">
          <button> Retour</button>
        </div>
        <div className="main-container">
          <h1>Demmande d'autorisation</h1>
          <div className="form-containner">
            <div className="input-containner nom">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                value={nom}
                onChange={handleChangeNOm}
              />
            </div>
            <div className="input-containner prenom">
              <label htmlFor="prenom">Prenom</label>
              <input
                type="text"
                placeholder="Prenom"
                name="Prenom"
                value={prenom}
                onChange={handleChangePrenom}
              />
            </div>
            <div className="age-adresse">
              <div className="age-et-naiss">
                <div className="input-containner age">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    name="Age"
                    value={age}
                    onChange={handleChangeAge}
                  />
                </div>
                <div className="input-containner date-naiss">
                  <label htmlFor="Date de naissance">Date Naissance</label>
                  <input
                    type="date"
                    placeholder="Date de naissance"
                    name="Date de naissance"
                    value={date}
                    onChange={handleChangedate}
                  />
                </div>
                <div className="input-containner sexe">
                  <label htmlFor="Date de naissance">Sexe</label>
                  <select
                    name=""
                    id=""
                    onChange={handleChangeSexe}
                    Value={sexe}
                  >
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                  </select>
                </div>
              </div>
              <div className="datenaiss-et-lieu">
                <div className="input-containner age">
                  <label htmlFor="Date de naissance">Lieu Naissance</label>
                  <input
                    type="texte"
                    placeholder="Date de naissance"
                    name="Date de naissance"
                    value={lieuNaiss}
                    onChange={handleChangeLieuNaiss}
                  />
                </div>
                <div className="input-containner adresse">
                  <label htmlFor="adresse">Adresse</label>
                  <input
                    type="Adresse"
                    placeholder="Adresse"
                    name="Adresse"
                    value={adresse}
                    onChange={handleChangeAdresse}
                  />
                </div>
              </div>
            </div>

            <div className="signature-containner">
              <label>Signature</label>
              <div className="signature">
                <ReactSignatureCanvas
                  ref={(data) => setSign(data)}
                  penColor="black"
                  canvasProps={{
                    width: 500,
                    height: 200,
                    className: "sigCanvas",
                  }}
                />
              </div>
            </div>
            <div className="btn-containner">
              <div className=" button btn-1">
                <button onClick={handleClear}>Annuler</button>
              </div>
              <div className=" button btn-2">
                <button onClick={handleValidate}>Confirmer</button>
              </div>
            </div>
          </div>
        </div>
        <div className="demmandeGennerer-bloc">
          <div className="contenu">
            <DemmandeGennerer
              nom={nom}
              prenom={prenom}
              adresse={adresse}
              age={age}
              lieuDeNaissance={lieuNaiss}
              sexe={sexe}
              date={date}
              imgSignature={url}
            />
          </div>
        </div>
        <div className="button-confirmer">
          <Link to="/explore">
            <button>Envoyer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormPermis;
