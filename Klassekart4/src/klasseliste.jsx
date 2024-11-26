import { useNavigate } from "react-router-dom";
import "./klasseliste.css"
export default function Elev() {

  const navigate = useNavigate();

  const elever = [
    { id: 1, navn: "Kevin", klasse: "A" },
    { id: 2, navn: "Noah ", klasse: "B" },
    { id: 3, navn: "Knarkus", klasse: "A" },
    { id: 4, navn: "Erik ", klasse: "B" },
    { id: 5, navn: "Mikkel", klasse: "A" },
    { id: 6, navn: "Deb Vildar", klasse: "A" },
    { id: 7, navn: "Selma ", klasse: "B" },
    { id: 8, navn: "Aiden", klasse: "A" },
    { id: 9, navn: "Baisi ", klasse: "C\B" },
    { id: 10, navn: "Elvis", klasse: "A" },
    { id: 11, navn: "Louise", klasse: "A" },
    { id: 12, navn: "Peter ", klasse: "B" },
    { id: 13, navn: "Claudia", klasse: "A" },
    { id: 14, navn: "Cæsyrussu ", klasse: "B" },
    { id: 15, navn: "Zoe", klasse: "A" },
  ];

  

  return (
    <div>
      <div className="header">
        <h1>2ITA</h1>
      </div>
      <div className="left-side">
        
      </div>
      <div className="right-side">

      </div>
        {elever.map((elev) => (
          <div key={elev.id}>
            <button className="button" onClick={() => navigate(`/profil/${elev.id}`)}>
              {elev.navn}
          </button>
        </div>
        ))}
    </div>
  );
}
