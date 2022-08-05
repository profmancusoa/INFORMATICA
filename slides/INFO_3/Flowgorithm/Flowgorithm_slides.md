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

# Flowgorithm

Ambiente di sviluppo basato su flowchart 

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>

--- #slide 1

# Titolo

sottotitolo

- descrivere cos'è Flowgorithm
- fornire step installazione windows e linunx
- fornire linka manuale e risorse flogorithm


--- 

# Installazione

Linux e Wine

sudo dpkg --add-architecture i386
sudo apt update

wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo mv winehq.key /usr/share/keyrings/winehq-archive.key

wget -nc https://dl.winehq.org/wine-builds/ubuntu/dists/jammy/winehq-jammy.sources
sudo mv winehq-jammy.sources /etc/apt/sources.list.d/
sudo apt update


sudo apt install --install-recommends winehq-devel
wine --version
winecfg


sudo apt-get -y install ttf-mscorefonts-installer
sudo fc-cache -vr

http://www.flowgorithm.org/download/index.html


wine64 uninstaller (per installare mono e poi flowgorithm)
winefile per lanciarlo

---

# Desktop

Shortcut

creare il file Flowgorith.desktop in ~/.local/share/applications

```bash
[Desktop Entry]
Name=Flowgorithm
Exec=wine "C:\Program Files\Flowgorithm\Flowgorithm.exe"
Terminal=false
Type=Application
Icon=/home/antonio/.wine/dosdevices/c:/Program Files/Flowgorithm/Flowgorithm Logo.ico
```