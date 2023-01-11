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

# Array

Array e Puntatori

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>



---

# Array

Array e Puntatori

<img src="/media/array_01.jpg" width="650" style="position:relative;top: -1rem; left:7rem;"/>

---

# Array

Array e Puntatori

<img src="/media/array_02.jpg" width="650" style="position:relative;top: -1.3rem; left:7rem;"/>

---

# Array

Array e Puntatori

<img src="/media/array_03.jpg"  style="position:relative;top: 0.5rem; left:0rem;"/>

---

# Array

Array e Puntatori

<img src="/media/array_04.jpg" style="position:relative;top: 1rem; left:0rem;"/>

---

# Array

Inizializzazione di un array con un ciclo

```c
#include <stdio.h>
int main() {
    char char_array[5] = {'A', 'B', 'C', 'D', 'E'};
    int int_array[5] = { 65, 66, 67, 68, 69};

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    
    for(int i = 0; i < 5; i++)
        char_array[i] = '\0';
    for(int i = 0; i < 5; i++)
        int_array[i] = 0;

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    return 0;
}
```

---

# Array

Inizializzazione di un array tramite azzeramento della memoria


```bash
NAME
       memset - fill memory with a constant byte

SYNOPSIS
       #include <string.h>

       void *memset(void *s, int c, size_t n);

DESCRIPTION
       The memset() function fills the first n bytes of the memory area pointed to by s with the constant byte c.

RETURN VALUE
       The memset() function returns a pointer to the memory area s.

```

---

# Array

Inizializzazione di un array tramite azzeramento della memoria

```c
#include <stdio.h>
#include <string.h>

int main() {
    char char_array[5] = {'A', 'B', 'C', 'D', 'E'};
    int int_array[5] = { 65, 66, 67, 68, 69};

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    
    memset(char_array, '\0', sizeof(char) * 5);
    memset(int_array, 0, sizeof(int) * 5);

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    return 0;
}
```

---

# Array

Inizializzazione di un array tramite azzeramento della memoria

```bash
SYNOPSIS
       #include <strings.h>

       void bzero(void *s, size_t n);

       #include <string.h>

       void explicit_bzero(void *s, size_t n);

DESCRIPTION
       The  bzero()  function  erases the data in the n bytes of the memory starting at the location pointed to by s, by writing
       zeros (bytes containing '\0') to that area.

       The explicit_bzero() function performs the same task as bzero().  It differs from bzero() in that it guarantees that com‐
       piler optimizations will not remove the erase operation if the compiler deduces that the operation is "unnecessary".

RETURN VALUE
       None.

```

---

# Array

Inizializzazione di un array tramite azzeramento della memoria

```c
#include <stdio.h>
#include <string.h>

int main() {
    char char_array[5] = {'A', 'B', 'C', 'D', 'E'};
    int int_array[5] = { 65, 66, 67, 68, 69};

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    
    bzero(char_array, '\0', sizeof(char) * 5);
    bzero(int_array, 0, sizeof(int) * 5);

    for(int i = 0; i < 5; i++) 
        printf("char_array[%d] = %c\n", i, char_array[i]);
    for(int i = 0; i < 5; i++)
        printf("int_array[%d] = %d\n", i, int_array[i]);
    return 0;
}
```

---

# Array

Passaggio di un array come parametro di una funzione

- Possiamo passare un array come parametro di una funzione?
- L'array viene passato per valore o per referenza?
- Il linguaggio C definisce che:

<br>

> Quando un array viene passato a una funzione come parametro, viene efettivamente passato **"per valore"** il suo indirizzo base.

<br>

>  Glie elementidell'array non dunque vengono copiati.

---

# Array

Passaggio di un array come parametro di una funzione

- Quindi in altre parole, siccome passiamo l'indirizzo base di un array, la funzione può modificare l'array
- Di fatto l'array è come se fosse passato pert referenza (ricorda in C il passaggio dei parametri è sempre per valore)
- Possiamo dunque passare un array ad una funzione usando due notazioni:
  - quella con le parentesi qudre []
  - quella con il puntatore

- Importante notare che siccome passiamo l'indirizzo base dell'array la funzione **NON** può conoscerne la sua lunghezza
- Pertanto quando passiamo un array ad una funzione **DOBBIAMO** passare anche la sua lunghezza N


---

# Array

Passaggio di un array come parametro di una funzione con le parentesei []

```c
#include <stdio.h>

#define LENGTH 10

void stampa_vettore(int vettore[], int N) {
    for(int i = 0; i < N; i = i + 1) {
        printf("Array[%d] = %d\n", i, vettore[i]);       
    }
}

int main() {
    int array[LENGTH] = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};

    stampa_vettore(array, LENGTH);
    stampa_vettore(&array[0], LENGTH);

    return 0;
}
```


---

# Array

Passaggio di un array come parametro di una funzione con il puntatore

```c
#include <stdio.h>

#define LENGTH 10

void stampa_vettore(int *vettore, int N) {
    for(int i = 0; i < N; i = i + 1) {
        printf("Array[%d] = %d\n", i, *(vettore+i));       
    }
}
int main() {
    int array[LENGTH] = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};

    stampa_vettore(array, LENGTH);
    stampa_vettore(&array[0], LENGTH);

    return 0;
}
```


---

# Array

Passaggio di un array come parametro di una funzione e modifica con le parentesi []

```c
#include <stdio.h>
#define LENGTH 10

void stampa_vettore(int vettore[], int N) {
    for(int i = 0; i < N; i = i + 1) {
        printf("Array[%d] = %d\n", i, vettore[i]);       
    }
}
void inizializza_vettore(int vettore[], int N) {
    for(int i = 0; i < N; i = i + 1) {
        vettore[i] = 0;       
    }
}
int main() {
    int array[LENGTH] = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};
   
    stampa_vettore(array, LENGTH);
    inizializza_vettore(array, LENGTH);
    stampa_vettore(&array[0], LENGTH);
   
    return 0;
}
```

---

# Array

Passaggio di un array come parametro di una funzione e modifica con puntatore

```c
#include <stdio.h>
#define LENGTH 10

void stampa_vettore(int *vettore, int N) {
    for(int i = 0; i < N; i = i + 1) {
        printf("Array[%d] = %d\n", i, *(vettore+i));       
    }
}
void inizializza_vettore(int *vettore, int N) {
    for(int i = 0; i < N; i = i + 1) {
        *(vettore + i)  = 0;       
    }
}
int main() {
    int array[LENGTH] = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};

    stampa_vettore(array, LENGTH);
    inizializza_vettore(array, LENGTH);
    stampa_vettore(&array[0], LENGTH);

    return 0;
}
```

---

# Array

Passaggio di un array come parametro di una funzione e modifica


---

# Array

Passaggio di un array come parametro di una funzione e modifica


---

# Array

Passaggio di un array come parametro di una funzione


---

# Array

Passaggio di un array come parametro di una funzione


---

# Array

Passaggio di un array come parametro di una funzione


---

# Array

Passaggio di un array come parametro di una funzione

