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

<!-- http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf -->

<!-- gist -->
<!-- fopen: https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2 -->
<!-- fclose https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66 -->
<!-- fprintf https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e -->
<!-- fscanf https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1 -->
<!-- fwrite https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a -->
<!-- fread https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d -->
<!-- persist array https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669 -->
<!-- persist array2 https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787 -->





# I File

I/O e gestione dei File

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>



---

# I File

Introduzione

- Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM
- Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono *volatili*
- In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall'esecuzioni precedenti
- Quindi i dati generati e gestiti dal programma sono disponibili solo durante l'esecuzione a runtime dello stesso
- Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)
- Anche in caso in cui manchi l'alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi


---

# I File

Introduzione

- Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi **persistenti**
- Il modo più facile per rendere i dati di un programma persistenti è l'archiviazione su memoria di massa
  - HDD
  - SSD
  - SD card
  - flashcard
  - ...

<img src="/media/files_01.png" width="550" style="position:relative;top: -8rem; left:15rem;"/>

---

# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>


---

# I File

Introduzione

<div style="width: 60%;">

- Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di **file**
- Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa.
- Il file è  **l'unita logica di memorizzazione** dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.
- Un file si può anche considerare come **un insieme di record correlati tra loro** (ossia un insieme di informazioni strutturate e organizzate in un archivio)

</div>

<img src="/media/files_04.png" width="350" style="position:relative;top: -15rem; left:33rem;"/>

---

# I File

Introduzione

- I file vengono distinti in due categorie:
  - `file di testo`: trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\n')
  
  - `file binari`: visti come sequenze di byte

<img src="/media/files_05.png" width="400" style="position:relative;top: 1rem; left:-2rem;"/>
<img src="/media/files_06.png" width="500" style="position:relative;top: -12rem; left:25rem;"/>


---

# I File

Introduzione

- I **file di testo** sono file di caratteri, organizzati in linee
- Ogni linea e` terminata da una marca di fine linea (newline, carattere '\n')
- `Il record logico può essere il singolo carattere, la parola, oppure la linea`


<img src="/media/files_07.png" width="650" style="position:relative;top: 2rem; left:7rem;"/>

---

# I File

Introduzione

- I **file di binari** sono file di byte con un organizzazione puramente sequenziale
- Non c'è una suddivisione in linee e pertanto non c'è un terminatore di linea (\n)
- `Il record logico è il singolo byte`
  
<img src="/media/files_08.png" width="600" style="position:relative;top: 3rem; left:7rem;"/>


---

# I File

Introduzione

- In genere i file hanno una struttura sequenziale, cioè:
  - i record logici sono organizzati in una sequenza rigidamente ordinata
  - per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono

<img src="/media/files_10.png" width="550" style="position:relative;top: 3rem; left:10rem;"/>

---

# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>


---

# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>


---

# I File

I file in C

- Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output
- Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h 
- Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici
- Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico
- Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso


---

# I File

I file in C

- La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file:
  - **Apertura di un file**: Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco
  - **Chiusura di un file**: rilascia le risorse allocate e chiude il collegamento logico precedentemente creato
  - **Lettura da file**: permette di leggere i record presenti nel file e di trasferirli nella memoria centrale
  - **Scrittura su file**: permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa
  - **Posizionamento in un file**: permette di accedere in modo diretto ai record di un file 

---

# I File

I file in C

- In C un file è identificato da un `puntatore a file` che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso
- In altre parole, il **puntatore a file** è il collegamento logico che viene creato in fase di *apertura del file*

```c
struct _IO_FILE {
  int _flags;           /* High-order word is _IO_MAGIC; rest is flags. */
  char *_IO_read_ptr;   /* Current read pointer */
  char *_IO_read_end;   /* End of get area. */
  char *_IO_read_base;  /* Start of putback+get area. */
  char *_IO_write_base; /* Start of put area. */
  char *_IO_write_ptr;  /* Current put pointer. */
  ...
  ...
  ...
  int _fileno;
  int _mode;
};

typedef struct _IO_FILE FILE;
```

---

# I File


I file in C

- Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)
- Esso contiene, tra l'altro: 
  - il file
  - l'elemento corrente all'interno della sequenza
- Il puntatore viene dichiarato nel seguente modo

<br>

```c
#include <stdio.h>

FILE *fp;
```

<br>

- Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file
- E' importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file
- Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, ...) durante l'apertura del file
  

---

# I File

I file in C

Le principali funzioni per gestire i file in C sono:

| **Funzione** | **Descrizione**                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `fopen`      | apre un file dato il suo nome e restituisce un puntatore ad esso                                                                        |
| `flcose`     | chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate                                            |
| `fprintf`    | scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file |
| `fscanf`     | esattamente come scanf, permette di leggere un input formattato da file                                                                 |
| `fread`      | legge uno o più record da un file                                                                                                       |
| `fwrite`     | scrive uno o più record su file                                                                                                         |
| `fseek`      | cambia la posizione attuale all'interno del file permettendo l'accesso casuale al file stesso                                           |

- Il manuale di ogni funzione è disponibile digitando `man <nome funzione>`

---

# I File

Apertura di un file con fopen

`FILE *fopen(const char *pathname, const char *mode);`

- Apre un file di nome *pathname* in modalità *mode*

dove: 
- **pathname**: percorco relativo o assoluto del file. Include il nome del file
- **mode**: modalità di apertura del file secondo la seguente tabella (vedi prossima slide)

restituisce:
  - **NULL**: in caso di errore di apertura del file (es: file non esistente)
  - **FILE \***: puntatore al file appena aperto


---

# I File

Apertura di un file con fopen


| **mode** | **Descrizione**                                                            | **Note**                                       |
| -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |
| `r`      | apre il file in sola lettura                                               | Il puntatore è posizionato all'inizio del file |
| `r+`     | apre il file in lettura e scrittura                                        | Il puntatore è posizionato all'inizio del file |
| `w`      | crea o sovrascrive un file in scrittura                                    | Il puntatore è posizionato all'inizio del file |
| `w+`     | crea o sovrascrive un file in scrittura e lettura                          | Il puntatore è posizionato all'inizio del file |
| `a`      | apre il file in scrittura se esiste o lo crera in caso contrario           | Il puntatore è posizionato alla file del file  |
| `a+`     | apre il file in scrittura e lettura se esiste o lo crera in caso contrario | Il puntatore è posizionato alla file del file  |


---

# I File

I file in C

mode: **r** e **r+**

- se il file è esistente 
- apre il file e posiziona il puntatore all'inizio del file (primo record)

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>


---

# I File

I file in C

mode: **w** e **w+**

- se il file è esistente
- apre il file in scrittura e posiziona il puntatore all'inizio del file (primo record)
- cancella il contenuto del file esistente e viene riscritto
  
<img src="/media/files_12.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>


---

# I File

I file in C

mode: **a** e **a+**

- apr eil file e posiziona il puntatore alla fine del file (ultimo record)
- se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda (**append**)
  
<img src="/media/files_13.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>


---

# I File

Apertura di un file con fopen

```c
...
FILE *fp; //dichiara il puntatore a file

fp = fopen("/home/antonio/test.txt", "r"); //apre il file in modalità sola lettura

if(fp == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
...
```

oppure in maniera più concisa

```c
FILE *fp; //dichiara il puntatore a file

if((fp = fopen("/home/antonio/test.txt", "r")) == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
```

---

# I File

I file in C

- eseguendo questo programma otteniamo

```bash
# ./file            

# Impossibile aprire il file

```

<br>

- Questo messaggio ci dice che non è stato possibile aprire il file
- Tuttavia non ci fornisce nessuna informazione sul motivo
- La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento


---

# I File

errno e gli errori in C

- Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no
- Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine
- La maggioranza delle funzioni di libreria C, e tutte le system call,  in caso di fallimento impostano una speciale variabile chiamata `errno` con un valore che indica il motivo del fallimento
- In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido
- Pertanto esaminando il valore di **errno** un programma può capire il motivo del fallimento dell'ultima chiamata
 

---

# I File

errno e gli errori in C


```c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        printf("Impossibile aprire il file: %d\n", errno);
        exit(1);
    }

    return 0;
}

# ./file            

# Impossibile aprire il file: 2 
```

---

# I File

errno e gli errori in C

- Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2
- Ma cosa significa il codice 2?
- Per rispondere  questa domanda possiamo legger eil contenuto del file *errno.h*
- Oppure più semplicemente invocare il comando errno in questo modo

```bash
# errno -l   

EPERM 1 Operazione non permessa
ENOENT 2 File o directory non esistente
ESRCH 3 Nessun processo corrisponde
EINTR 4 Chiamata di sistema interrotta
EIO 5 Errore di input/output
ENXIO 6 Device o indirizzo non esistente
E2BIG 7 Elenco degli argomenti troppo lungo
```

- Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente


---

# I File

perror e gli errori in C

- Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all'interno del nostro codice C
- La libreria C ci viene in aiuto mettendoci a disposizione la funzione


`void perror(const char *s);`

- Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio **s**, che descrive il motivo del fallimento dell'ultima chiamata a funzione
- In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly

---

# I File

perror e gli errori in C

- Trasformiamo il programma precedente in modo che usi la funzione perror

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    return 0;
}

# ./file
# Impossibile aprire il file: No such file or directory
```

- Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento

---

# I File

Chiusura di un file con fclose

`int fclose(FILE *stream)`

- Chiude un file puntato da *stream*

dove: 
- **stream**: il puntatore a file restituito da fopen

restituisce:
  - **0**: in caso di esecuzione corretta (chiusura del file)
  - **EOF**: in caso di fallimento. errno è settato con il codice di errore appropriato


---

# I File

Chiusura di un file con fclose

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    //codice che interagisce con il file

    if(fclose(fp)) // se != 0 c'è un errore
        perror("Impossibile chiudere il file");
    
    return 0;
}
```

---

# I File

Output formattato su file con fprintf

`int fprintf(FILE *stream, const char *format, ...);`

dove:
- **stream**: puntatore a file restituito da fopen

- Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file
- Ovviamente il file va aperto in scrittura

---

# I File

Output formattato su file con fprintf

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "Linea di testo #1\n");
    fprintf(fp, "Linea di testo #2\n");
    fprintf(fp, "Linea di testo #...\n");
    fprintf(fp, "Linea di testo #N\n");
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");

    printf("File test.txt generato correttamente\n");
    return 0;
}
```

---

# I File

Output formattato su file con fprintf

```bash
# ./file            
# File test.txt generato correttamente

# more test.txt

Linea di testo #1
Linea di testo #2
Linea di testo #...
Linea di testo #N
```

- Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt
- Mentre l'ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file
- Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità **w**
- Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall'esecuzione del programma

---

# I File

Output formattato su file con fprintf

- Proviamo ora a scrivere un output formattato su file

```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp;
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "LE TABELLINE\n");
    fprintf(fp, "------------\n");
    for(int i = 1; i < 11; i++)
        for(int j = 1; j < 11; j++)
            fprintf(fp, "%d x %d = %d\n", i, j, i * j);
    fprintf(fp, "------------\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    printf("File test.txt generato correttamente\n");
    return 0;
}
```

---

# I File

Output formattato su file con fprintf

```bash
# ./file                                      
File test.txt generato correttamente
# more test.txt  
LE TABELLINE
------------
1 x 1 = 1
1 x 2 = 2
...
1 x 10 = 10
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
...
4 x 5 = 20
...
...
```

---

# I File

Esercizio file_01

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file
- Per il nome del file usare un percorso assoluto
- Consegnare il file con nome: *|cognome|_file_01.c*

Output

```bash
# ./_file01 && more test.txt
4

# ./_file01 &&  more test.txt
22

# ./_file01 &&  more test.txt
53
```

---

# I File

Esercizio file_02

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti
- Per il nome del file usare un percorso relativo
- Consegnare il file con nome: *|cognome|_file_02.c*
  
Output

```bash
# ./_file02 &&  more test.txt
4

# ./_file02 &&  more test.txt
4
22

# ./_file02 &&  more test.txt
4
22
53
```


---

# I File

Esercizio file_03

- Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV
- Consegnare il file con nome: *|cognome|_file_03.c*

Output

```bash
# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286
Mirko,Bianchi,63,3984368763
```

---

# I File

Lettura formattata di un file con fscanf

`int fscanf(FILE *stream, const char *format, ...);`

dove:
- **stream**: è il file pointer restituito da fopen

- Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file


---

# I File

Lettura formattata di un file con fscanf

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    bzero(buff, MAX_BUFF);
    fscanf(fp, "%s", &buff[0]);
    printf("Linea letta da file\n%s\n", buff);
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

---

# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

```bash
Linea1
Linea2
Linea3
```

<br>

- L'output che otterremo è il seguente

```bash
# ./file            

Linea letta da file
Linea1
```

- Come ci aspettavamo solo la prima linea è stata letta. 
- Vediamo ora come leggere tutte le linee usando feof



---

# I File

Verifica fine file con feof

`int feof(FILE *stream);`

- Verifica se il file puntato da *stream* ha raggiunto la fine
- In altre parole verifica se è ancora possibile leggere fdati dal file oppure no

restituisce:
- **0 (false)**: se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere
- **1 (true)**: se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere

---

# I File

Verifica fine file con feof

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    printf("EOF?: %d\n", feof(fp));

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    
    printf("EOF?: %d\n", feof(fp));
    
    return 0;
}
```

---

# I File

Verifica fine file con feof

```bash
# ./file            

EOF?: 0 //il file non ha raggiunto la fine

EOF?: 1 //il file ha raggiunto la fine
```

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>



---

# I File

Lettura formattata di un file con fscanf

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];
    
    //codice di apertura del file

    printf("Linee lette da file\n");
    while(!feof(fp)) {
        bzero(buff, MAX_BUFF);
        fscanf(fp, "%s", &buff[0]);
        printf("%s\n", buff);
    }
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

---

# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

```bash
Linea1
Linea2
Linea3
```

<br>

- L'output che otterremo è il seguente

```bash
# ./file            

Linee lette da file
Linea1
Linea2
Linea3

```

- Quindi in questo caso tutte le linee del file sono state correttamente lette


---

# I File

Esercizio file_04

- Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio


```bash
Mario Rossi 32 3786543213
Giuseppe Verdi 45 3217864286
Mirko Bianchi 63 3984368763

```

---

# I File

Esercizio file_04

- Il programma deve generare il seguente output:

```bash
### Utente 1 ###
Nome:     Mario
Cognome:  Rossi
Età:      32
Telefono: 3786543213

...
...

### Utente 3 ###
Nome:     Mirko
Cognome:  Bianchi
Età:      63
Telefono: 3984368763
```

- Consegnare il file con nome: *|cognome|_file_04.c*


---

# I File

Esercizio file_05

- Scrivere un programma in C, che legga un file con lo stesso formato dell'esercizio 04
- Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)
- Il programma deve poi stampare l'ouput come l'esercizio 04, scandendo l'array di strutture


- Consegnare il file con nome: *|cognome|_file_05.c*

---

# I File

Scrittura di un file binario con fwrite

`size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);`


fwite scrive *nmemb* record, ciascuno di dimensione *size*, sul file puntato da *stream*

Il puntatore della posizione all'interno del file viene spostata in avanti di *nmemb x size* byte

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da scrivere
- **nmemb**: numero di record da scrivere sul file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente scritti su disco
- **0**: in caso di errore o di impossibilità di scrivere i record su file 

---

# I File

Scrittura di un file binario con fwrite

- E' importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe
- Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari
- Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi
- In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli
- La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali 


---

# I File

Scrittura di un file binario con fwrite

- Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario

<br> 

```bash
struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
}
```

---

# I File

Scrittura di un file binario con fwrite

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;

    studente alunnno = {
        "Mario",
        "Rossi",
        18,
        8.5
    };
    ...
```

---

# I File

Scrittura di un file binario con fwrite

```c
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    if(fwrite(&alunnno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella scrittura su file\n");
    else
        printf("Record salvato correttamente\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

---

# I File

Scrittura di un file binario con fwrite

- Eseguiamo ora il programma e verifichiamo il file generato

```bash
# ./file                                      
Record salvato correttamente

#more test.txt 
MarioRossA

```

- Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale

```bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044
```


---

# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*


---

# I File

Lettura di un file binario con fread

` size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);`

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da leggere
- **nmemb**: numero di record da leggere da file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente letti dal disco
- **0**: in caso di errore o di impossibilità nel legegre i record dal file 

---

# I File

Lettura di un file binario con fread

- Vediamo ora come leggere il file generato precedentemente con fwrite

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;
    studente alunno;
    
    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    ...
```

  
---

# I File

Lettura di un file binario con fread

```c
    if(fread(&alunno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella lettura da file\n");
    else {
        printf("Record letto correttamente\n");
        printf("Nome: %s\n", alunno.nome);
        printf("Cognome: %s\n", alunno.cognome);
        printf("Anni: %d\n", alunno.anni);
        printf("Voto: %.2f\n", alunno.voto);
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

---

# I File

Lettura di un file binario con fread

- Eseguiamo ora il programmma e vediamo l'output generato

```bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044


# ./file

Record letto correttamente
Nome: Mario
Cognome: Rossi
Anni: 18
Voto: 8.50
```

---

# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*


---

# I File

Persistenza di un array 

- Vediamo ora come è possibile scrivere e leggere un array su un file
- In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 10

int main() {
    FILE *fp;
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
```

---

# I File

Persistenza di un array 

```c
    for(int i = 0; i < NUM; i++) {
        if(fwrite(&numeri[i], sizeof(int), 1, fp) != 1)
            printf("Errore nella scrittura del record!\n");
        else {
            printf("numeri[%d] scritto du file\n", i);
        }
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

- Quindi abbiamo scritto 10 record (NUM elementi dell'array)
  
---

# I File

Persistenza di un array 

- Il file generato è il seguente

```bash
# hexdump -C test.txt

00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  |................|
00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  |................|
00000020  09 00 00 00 0a 00 00 00                           |........|
00000028

```

<br>

- Come mai quest'ordine nel salvare gli elementi dell'array su file? E' giusto?

---

# I File

Persistenza di un array 

- Vediamo come modificare il programma per scrivere tutto l'array in una sola operazione

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM 10

int main() {
    FILE *fp;
    
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
```


---

# I File

Persistenza di un array 

```c
    if(fwrite(&numeri, sizeof(int) * NUM, 1, fp) != 1)
        printf("Errore nella scrittura del record!\n");
    else {
        printf("Array scritto su file\n");
    }
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
```

---

# I File

Persistenza di un array

- Ma quindi che differenza c'è tra le due verisoni del programma?
- Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000 

100 x 1.000.000 di record da 4 byte (int)

[src code](https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037)

```bash
#  time ./file

Array scritto su file
./file  5,50s user 1,08s system 99% cpu 6,627 total
```

---

# I File

Persistenza di un array


100 x 1 record da 4 * 1.000.000 byte (int)

[src code](https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea)

```bash
# time ./file       
Array scritto su file
./file  0,01s user 0,63s system 94% cpu 0,672 total
```

- Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno

---

# I File

Persistenza di un array 

---

# I File

Persistenza di un array 

---

# I File

Persistenza di un array 

---

# I File

Persistenza di un array 

---

# I File

Persistenza di un array 

---

# I File

Persistenza di un array 