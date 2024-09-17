import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='1'>
      <h1>OPPSETT AV LAB-PCEN</h1>
      <h2>1 Planlegging</h2>
      <p>Det første vi måtte gjøre var å planlegge prosessen og hvordan vi skulle dokumentere prosessen. Nå skal jeg være ærlig og si at vi ikke fullførte å lese oppgaveteksten, men vi fikk en god ide av hva oppgaven var før vi begynte, og kom med ideer til hvordan vi kunne gå framover.  Etter det så planlegga vi navnestandard og statisk IP-adresse til klienten.</p>
      </div>
      <br />
      <h2>2 Installering av Windows</h2>
      <p>Det første jeg gjorde var å installere Rufus og Windows setup på hovedpcen min, dette gjorde jeg fordi jeg trenger disse filene til strategien jeg skulle bruke. Denne strategien var å bruke en minnepen til å overføre filene. Dette gjorde sånn at jeg bare kunne glemme den forrige brukeren på denne pc-en og lage en helt ny bruker uten de tidligere filene osv. Dette tok en god del tid pga installeringer og på grunn av at minnepenner var I høy demand. Deretter boota jeg opp Lab pcen med Rufus USBen. Der partisjonerte jeg diskene under installasjon prosessen. Etter installasjonen så måtte jeg konfigurere Lab PC-en til en navnestandard og statisk IP-adresse.

</p>
      <br />
      <h2>3 Oppsetting av server/ethernetkabel</h2>
      <p>Etter vi hadde installert Windows så måtte vi sette opp FTP server og gjøre sånn at vi var på same nett og kunne kommunisere. Det vi gjorde var å koble oss til same server via Ethernet kabler så bare vi kunne kommunisere med hverandre. Dette lar oss også sette opp file transport protokoll server. Vi prøvde først å bruke Windows sin file transport, men den var veldig avansert og vi brukte istedet filezilla. I Windows Firewall så måtte vi åpne port 21 (TCP) som er FTP porten til å kommunisere med klienten vår. Filezilla har også 2 andre porter som åpner automatisk, disse portene blir brukt til å koble til Filezilla serverne. Du må sette et master password for serveren og passordet skal brukes til å logge på serveren. I Administration interface så må IP-en være 127.0.0.1 som er en loopback til vår server. Og der kan du konfigurere IP-adresser som får lov til å koble til, lage brukere med spesifikke rettigheter og et valg om brukeren kan velge med å logge med passord eller uten passord. Også må du legge til en path eller en directory der brukeren får tilgang til, for eksempel vi kan gi brukeren C:\ directory som får brukeren tilgang til hele C: disken. Etter det så prøvde vi å koble til FTP serveren og det funka uten noen problemer. </p>
      <br />
      <h2>Spørsmål</h2>
      <p>
- Hva har du lært gjennom denne oppgaven? 
<br />
<br />
Jeg har lært hvordan jeg kan installere windows på pcer og lært mye mer om BIOS systemet til pc-en. Også har jeg lært hvordan jeg gjør oppsett på en pc fra scratch uten internett som var vanskelig men lærerikt.
<br />
<br />
- Hvordan har din innsats og fokus vært?  
<br />
<br />
Jeg syntes ikke fokuset mit thar vært det aller beste på denne oppgaven, men det kan også i lite ngrad takkes til at jeg har vært litt dårlig, men jeg føler at innsatsen min også har vært litt for lavt for min standard. Jeg konkluderer med at jeg kunne gjort det bedre.
<br />
<br />
- Om du skal utføre oppgaven en gang til, er det noe du ville gjort annerledes?
<br />
<br />
Jeg ville putta mer innsats, mer fokus og mer energi i oppgaven. jeg ville også lest oppgavetekste n,mye mer nøye fordi det var mye viktig informasjon som jeg gikk glipp av pga at jeg ikke leste den, også ville jeg sgat at å samarbeide bedre kunne vært noe jeg kunne forbedret meg på.

</p>
    </>
  )
}

export default App
