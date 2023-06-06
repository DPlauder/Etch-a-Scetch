### Etch a Scetch ###

Programm in welchen man auf einer Zeichenfläche(Raster) mit Maus zeichnen kann.

```
function start()
```
- Programm startet mit klick auf Button START/RESET
- Benutzer legt über prompt die Rastergröße fest (max 100), Eingabe über 100 wird auf 100 gesetzt
- übergibt Eingabe des User in CAR
```
function grid()
```
- erstellt das Raster
- erstellt div-Objekte und fügt Klasse hinzu

```
function auswahl()
```
- erkennt Button Auswahl der Farbe

```
function malenRot/Blau/Gruen ()
```
- ändert Hintergrundfarbe je nach Auswahl bei Event mouseover