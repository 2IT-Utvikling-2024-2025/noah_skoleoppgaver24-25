import { useParams } from "react-router-dom";

export default function Profil() {


  const API_URL = "http://tobyjohansen.com:3000/api/v1/students";


  const { id } = useParams();
  const elever = [
    { id: 1, navn: "Kevin", klasse: "A" },
    { id: 2, navn: "Noah ", klasse: "B" },
    { id: 3, navn: "Knarkus", klasse: "A" },
    { id: 4, navn: "Erik ", klasse: "C" },
    { id: 5, navn: "Mikkel", klasse: "A" },
    { id: 6, navn: "Deb Vildar", klasse: "A" },
    { id: 7, navn: "Selma ", klasse: "B" },
    { id: 8, navn: "Aiden", klasse: "A" },
    { id: 9, navn: "Biski ", klasse: "C" },
    { id: 10, navn: "Elvis", klasse: "A" },
    { id: 11, navn: "Louise", klasse: "A" },
    { id: 12, navn: "Peter ", klasse: "B" },
    { id: 13, navn: "Claudia", klasse: "A" },
    { id: 14, navn: "Cæsyrusssu ", klasse: "C" },
    { id: 15, navn: "Zoe", klasse: "A" },
  ];

  const selectedElev = elever.find((elev) => elev.id === Number(id));


  


  return (
    <div>
      <h1>Profil for {selectedElev.navn}</h1>
      <p>Klasse: {selectedElev.klasse}</p>
    </div>
  );
}
