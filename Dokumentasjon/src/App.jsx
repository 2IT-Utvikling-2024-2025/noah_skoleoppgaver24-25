import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> OPPSETT AV LAB-PCEN</h1>
        <br />
        <p>Innhold
1 Planlegging	1
2 Oppsett av Windows	2
3 Ping	3
4 Brannmur	4
5 Filezilla………………………………………………………………………………………………………………5
6 Refleksjon ………………………………………………………………………………………………………….4
</p>
<br />
<p>1 Planlegging   
PCNAVN: 2ITA24
Brukernavn: Felix
Diskene skal bli partisjoner i 45/175GB. 
Jeg skal bruke IP Adressen 192.168.1.15 for å kommunisere med andre enheter på nettverket. Men jeg kunne velge mellom 192.168.1.1 - 192.168.1.19
Jeg skal installere Windows helt fra scratch for å få en bedre forståelse for operativsystemet
</p>
<br />
<p>2 Oppsett av Windows 
Det første vi skal gjøre etter vi har valgt PC-ene våre er å wipe gamle operativsystemet.  Deretter må du ha en minnepenn med Windows 10/11 installert.  Velg usb fra boot menyen og velg deretter windows. Deretter må du partisjonere disken i installasjonen av Windows. Fullfør installasjonen av Windows etter dette.
</p>
<br />
<p> 3 Ping
Etter du er ferdig med installasjonen av Windows så må du sikre at du er koblet til samme nettverk som de andre på gruppen din. Dette gjøres via Ethernet kabler som styres via switchen.
</p>
<br />
<p>4 Brannmur
Før vi laster ned FileZilla og bruker den til å eksperimentere, så må vi skifte noen innstillinger på brannmuren vår. Finn veien fram til Avanserte innstillinger på Fire Wallen din. Deretter - Inbound Rules - New Rule - Port - Port 21
</p>
<br />
<p>5 Filezilla
Når du er sikker på at du er koblet til samme nettverk som kollegaene dine, så må du laste ned Filezilla via nettsøker.  Du skal laste ned klient-versjonen av FileZilla. Deretter så må du koble samme server som de andre på FileZilla.
</p>
<br />
<p>6 Refleksjon
Denne oppgaven har vært tøff, og jeg har lært mye. Jeg merker at innsatsen min kunne vært mye bedre, og at sluttproduktet kunne vært av høyere kvalitet. Men, jeg er uansett fornøyd med all den kunnskapen jeg fikk gjennom dette prosjektet. Jeg lærte veldig mye om PC-en min som jeg ikke visste, og om operativsystemet jeg bruker hver dag. 
Jeg visste ikke hvordan man kunne reinstallere Windows på en PC før dette prosjektet, jeg visste heller ikke hvordan lokale nettverk kunne fungere med bare Ethernet kabler. Jeg lærte også mye om BIOS til Windows som jeg alltid syntes var så komplisert før, nå er jeg litt vant til den. Denne oppgaven har vært veldig tøff og lærerik, det har ikke vært mangel av ganger der jeg har hatt lyst til å gi opp. Men det denne oppgaven har lært meg er at samarbeid er enn av de viktigste egenskapene vi har. Jeg merket at samarbeid var veldig viktig for å kunne komme videre i oppgavene, både når jeg hjalp og fikk hjelp.
</p>
    </>
  )
}

export default App
