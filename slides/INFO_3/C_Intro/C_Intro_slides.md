---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
version: '1.0.0'
---  

# Il Linguaggio C

IL linguaggio di programmazione

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Linguaggio C

Introduzione

> *Imparare il **linguaggio C** è come fare un viaggio in una terra lontana e sconosciuta; è
dunque sia un viaggio meraviglioso, affascinante e gratificante, ricco di sorprese e
scoperte, sia un viaggio non semplice, che richiede perciò tanta pazienza e il giusto
tempo. <br> <br> In ogni caso, al termine del viaggio, la ricompensa ricevuta sarà elevata: si sarà
appreso non un linguaggio di programmazione qualsiasi ma **il linguaggio di
programmazione per eccellenza***
<br><br> *(Pellegrino Principe)*

---

# Linguaggio C

Introduzione

- Il linguaggio C è ancora oggi, nonostante siano passati oltre 40 anni
dalla sua prima apparizione, uno **straordinario** linguaggio di programmazione; ricco,
espressivo, potente e flessibile 
- Esso ha influenzato moltissimi altri linguaggi di
programmazione che hanno preso in “prestito” molti aspetti della sua filosofia, della
sua sintassi e dei suoi costrutti principali 
- Tra questi è sufficiente citare alcuni dei
maggiori linguaggi mainstream come Java, C# e, naturalmente, C++
- Caratteristica fondamentale del C è l'assoluta libertà concessa al programmatore
- In sostanza il C dà grande responsabilità al programmatore e assume che sappia cosa stia facendo e sia consapevole degli effetti delle sue azioni

> ***noblesse oblige***
<br> *duca de Lévis*

---

# Linguaggio C

Introduzione

- Il linguaggio C è, in
modo netto e assoluto, uno straordinario e moderno strumento di programmazione
con il quale è possibile scrivere programmi per i più svariati dispositivi hardware, da quelli altamente performanti e multiprocessore a quelli embedded dove, in taluni casi,
le risorse di memoria e la potenza della CPU sono limitate
- Il C è, in definitiva, un importante e potente linguaggio di programmazione e ciò lo
dimostra anche il fatto che la sua conoscenza è ancora uno skill molto richiesto nel
mondo del lavoro e che la sua popolarità è ancora ai primi posti

---

# Linguaggio C

Introduzione

<img src="/media/c_01.jpg" width="600" style="margin: auto;"/>
---

# Linguaggio C

Introduzione

<img src="/media/c_02.jpg" width="550" style="margin: auto;"/>

---

# Linguaggio C

Introduzione

<img src="/media/c_03.jpg" width="700" style="margin: auto;"/>

---

# Linguaggio C

Introduzione

- Le caratteristiche principali del Linguaggio C sono:
  - **Efficienza:** ideato per soppiantare l’assembly come linguaggio di programmazione a basso livello per lo sviluppo del sistema operativo Unix. Produrre codice compatto e con elevata velocità di esecuzione
  - **Portabilità:** uno dei suoi massimi punti di forza. Il kernel di Linux (scritto in C) gira praticamente su ogni piattaforma esistente
  - **Potenza:** manifesta una reale potenza, sia espressiva, grazie a pochi e mirati costrutti sintattici, sia algoritmica, grazie alla presenza di determinati operatori che permettono l’accesso e la manipolazione dei singoli bit della memoria
  - **Flessibilità:** A oggi non esiste praticamente alcun dominio applicativo che C non
possa coprire. Esso è, infatti, utilizzato per sviluppare qualsiasi tipologia di
software, come compilatori, sistemi operativi, driver hardware, motori per
grafica 3D, editor di testi, player musicali, videogame e così via.
  - **Permissività:** Rispetto ad altri linguaggi di programmazione, C è stato pensato
per essere un linguaggio per programmatori e pertanto lascia agli stessi una
grande libertà di costruzione dei programmi
---

# Linguaggio C

Introduzione

- Il linguaggio C supporta pienamente il **paradigma procedurale** dove
l’unità principale di astrazione è rappresentata dalla funzione attraverso la quale si
manipolano i dati di un programma
- Il C è 
considerabile come un linguaggio di programmazione di ***medio livello*** perché mette a
disposizione del programmatore sia facility di alto livello (si pensi al costrutto di
funzione o ad altre astrazioni come il costrutto di struttura), sia facility di
basso livello (si pensi al costrutto di puntatore) che garantiscono, al pari dei linguaggi
machine-oriented come l’assembly, una maggiore efficienza nello sfruttamento
diretto dell’hardware sottostante.
- Da qui la sua grande flessibilità, efficienza e potenza

---

# Linguaggio C

Introduzione

- Il linguaggio C è un linguaggio di programmazione molto compatto con una sintassi semplice e pulita
- Nella versione attuale è formato da sole <b>32</b> parole chiave

<br>

<div class="grid grid-cols-4 grid-rows-8 gap-4" style="border: 3px solid green;padding: 20px;">
<div>auto</div>
<div>break</div>
<div>case</div>
<div>char</div>
<div>const</div>
<div>continue</div>
<div>default</div>
<div>do</div>
<div>double</div>
<div>else</div>
<div>enum</div>
<div>extern</div>
<div>float</div>
<div>for</div>
<div>goto</div>
<div>if</div>
<div>int</div>
<div>long</div>
<div>register</div>
<div>return</div>
<div>short</div>
<div>signed</div>
<div>sizeof</div>
<div>static</div>
<div>struct</div>
<div>switch</div>
<div>typedef</div>
<div>union</div>
<div>unsigned</div>
<div>void</div>
<div>volatile</div>
<div>while</div>
</div>
---

# Linguaggio C

Introduzione

- In virtù del numero limitato di keywords, il linguaggio C si apprende velocemente
- Tuttavia è fondamentale distinguere la differenza tra:
  -  `imparare` un linguaggio di programmazione, attività che si può fare in breve tempo
  -  `imparare a programmare`, attività che richiede dedizione e pratica continua

<br>

<img src="/media/c_04.jpg"  style="margin: auto;"/>

---

# Linguaggio C

Introduzione

- Il cosro triennale di Informatica si concentra su questi due aspetti
  - Sviluppare un approcio logico ed algoritmico per imparare a programmare
  - Imparare la sintassi e le regoli dei linguaggi di programmazione

<br>

<img src="/media/c_05.jpg"  style="margin: auto;"/>

