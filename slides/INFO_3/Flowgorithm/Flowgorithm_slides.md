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
materia: INFORMATICA
as: 2022/2023
version: '1.0.0'
---  

<style>
  .alto {
    width: 50%;
    position: absolute;
    margin: auto;
    top: -40%;
    left: 50%;
    right: 0%;
    bottom: 0%;
  }

  .centro {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 40%;
    position: absolute;
    margin: auto;
    top: 0%;
    left: 45%;
    right: 0%;
    bottom: 0%;
  }

  .centro.w {
    width: 40%;
  }
</style>

# Flowgorithm

Ambiente di sviluppo basato su flowchart 

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

---

# Flowgorithm

Ambiente di sviluppo

<div class="grid grid-cols-3">
<div class="col-start-1 col-end-3">
      
- Flowgorithm è un semplice ambiente di sviluppo e linguaggio di programmazione che si basa sull'uso di flowcharts
- L'obiettivo è di permettere allo studente di concentrarsi sui concetti della programmazione anzichè sulle peculiarità di uno specifico linguaggio di programmazione
- Flowgorithm permette l'esecuzione di programmi direttamente nell'ambiente di sviluppo
- Quando lo studente avrà acquisito i principali concetti della programmazione, sarà semplice imparare uno specifico linguaggio di programmazione (es: C/C++, Java, ...)    
</div>

<img src="/media/flowg_01.png" width="400"/>

</div>

---

# Flowgorithm

Input e Output semplificato

<div class="grid grid-cols-3">
<div class="col-start-1 col-end-3">

- Flowgorith visualizza l'input e l'output attraverso un interfaccia simile ad un messanger
- Le chat bubbles sono colorate in modo diverso per rappresentare Input (in azzurro) e output (in verde) 
- Questa funzionalità rende l'output su console più immediato per gli studenti all'inizio del corso
- E' anche possibile rimuovere la chat bubble e passare ad una visualizzazione puramente testuale
</div>

<div class="col-start-3 col-end-3">

<img src="/media/flowg_02.png" width="400"/>
<img src="/media/flowg_03.png" width="400"/>
</div>

</div>

---

# Flowgorithm

Variable watch windows

<div class="grid grid-cols-3">
<div class="col-start-1 col-end-3">

- Una comoda vista di tutte le variabili permette di seguire l'andamento del programma
- Comprendere come le variabili del programma sono modificate è utilissimo durante la fase di sviluppo
- Le variabili sono colorate in funzione del loro tipo:
  - Interi colorati in blue
  - Decimali in viola
  - Stringhe in rosso
  - Boolean in verde acqua
</div>

<div class="col-start-3 col-end-3">
<img src="/media/flowg_04.png" width="200"/>
</div>

</div>

---

# Flowgorithm

Turlte graphic

<div class="grid grid-cols-3 gap-8">
<div class="col-start-1 col-end-3">

- Flowgorithm supporta anche la "classica" tartaruga del LOGO
- Permette di creare dei disegni fornendo delle specifiche azioni alla "tartaruga"
    - Forward: muove la tartaruga in linea retta 
    - Turn: cambia l'angolo di rotazione della tartaruga
    - Home: riporta la tartaruga alla posizione iniziale
- L'utilizzo principale è l'insegnamento della programmazione attraverso i passi sequenziali che sono necessari per creare un'immagine complessa
</div>

<div class="col-start-3 col-end-3">
<img src="/media/flowg_05.png" width="300"/>
</div>

</div>

---

# Flowgorithm

Altre funzionalità

<div class="grid grid-cols-3 gap-8">
<div class="col-start-1 col-end-3">

- Flowgorithm supporta anche la lettura e scrittura di file di testo
- Sopporta schemi di colori diversi 
- Breakpoint condizionali per un più agevole debugging del programma in esecuzione
</div>

<div class="col-start-3 col-end-3">
<img src="/media/flowg_06.png" width="300"/>
<img src="/media/flowg_07.png" width="400" style="margin-top:30px;"/>
<img src="/media/flowg_08.png" width="200" style="margin-top:30px;"/>

</div>

</div>


--- 

# Installazione

Windows

- Flowgorithm è un software per Windows
- L'installazione è semplice e richiede pochi passi guidati da un wizard
- Puoi vedere tutti i passi d'installazione al seguente video
<center><br>
<iframe width="533" height="300" src="https://www.youtube.com/embed/UwKcSxG9wz8">
</iframe>
</center>
--- 

# Installazione

Linux e Wine

- Siccome Flowgorithm è un software per Windows non può girare in modo nativo su Linux
- Ma niente paura, smanettando un pochino, potremo far girare Flowgorithm anche su Linux
- Per fare ciò abbiamo bisogno di un software che si chiama <mark>Wine</mark>
- <b>Wine</b> è un layer di compatibilità che permette di eseguire applicativi Windows direttamente su Linux senza la necessità di macchine virtuali
- Pertanto l'installazione di Flowgorithm prevede prima l'installazione di Wine
- Una volta installato Wine potrà essere utilizzato anche per far girare altri software in modo da avere un parco applicativo più vasto che mai

---

# Installazione

Linux e Wine

- Per installare Wine è necessario utilizzare il terminale
- Niente paura nel video faccio vedere tutti i passi e quindi è un'ottima opportunità per iniziare a muover ei primi passi con il terminale di Linux
- In ogni caso nella slide seguente fornisco la lista completa dei comandi
  
<center><br>
<iframe width="444" height="250" src="https://www.youtube.com/embed/VysMNqJ70zo">
</iframe>
</center>
 
---

# Installazione

Linux e Wine

- Per installare Wine su Linux è necessario eseguire i seguenti comandi da un terminale
  
```bash
sudo dpkg --add-architecture i386
sudo apt update
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo mv winehq.key /usr/share/keyrings/winehq-archive.key
wget -nc https://dl.winehq.org/wine-builds/ubuntu/dists/jammy/winehq-jammy.sources
sudo mv winehq-jammy.sources /etc/apt/sources.list.d/
sudo apt update
sudo apt install --install-recommends winehq-devel
sudo apt-get -y install ttf-mscorefonts-installer
sudo fc-cache -vr
```

- Verificate la versione di Wine (almeno 7.0) con 

```wine --version```

- Configuarte Wine eseguendo il comando 

```winecfg```
  


--- 

# Installazione

Linux e Wine

- Ora che Wine è correttamente installato, scaricate Flowgorithm

http://www.flowgorithm.org/download/index.html

- Installate mono e poi Flowgorithm con il comando

```wine64 uninstaller```

- Infine per lanciare Flowgorith eseguite il seguente comando
  
```winefile```

---

# Desktop

Shortcut

- Chiaramente dover aprire tutte le volte *winfile* non è molto comodo
- Allora aggiungiamo uno shortcut su Linux (Ubuntu o Pop!_OS) 

<center><br>
<iframe width="444" height="250" src="https://www.youtube.com/embed/UZoUY9oPICo">
</iframe>
</center>

---

# Desktop

Shortcut


- Per creare lo shortcut fi Flowgorith, creare il file Flowgorith.desktop in ~/.local/share/applications
- Inserire nel file il seguente contenuto

<br>

```bash
[Desktop Entry]
Name=Flowgorithm
Exec=wine "C:\Program Files\Flowgorithm\Flowgorithm.exe"
Terminal=false
Type=Application
Icon=/home/antonio/.wine/dosdevices/c:/Program Files/Flowgorithm/Flowgorithm Logo.ico
```
<br>
- Ovviamente sostitutite il nome utente con il vostro