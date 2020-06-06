# ERCO XML zu mySQL Import


## Vorraussetzungen
  - Docker
  - Abzug der mam Daten (siehe unten)
  
## Installation (Prod)
  1. Config Datei erstellen `cp config.sample.cfg Dockerconfig.cfg`
  2. `mamDataRoot` in der `Dockerconfig.cfg` anpassen sodass der Pfad auf den lokalen XML Ordner zeigt
  3. `make build` ausführen (`make build-dev` zum Bauen des Dev-images)
  4. `make run` ausführen (`make run-dev` zum mounten des Dev-images)

## Benutzung (Prod)
  - `make` stoppt den laufenden container (falls er existiert) und startet eine neue Instanz
  - `make build` buildet das Image
  - `make run` startet den Container
  - `make stop` stoppt den Container
  - `make rebuild` stoppt den Container (falls er existiert), baut das Image neu und startet den Container erneut
  - `make enter` wählt einen in den Container ein
  - `make import` startet den Import

## Benutzung (Dev)
Im Dev-mode wird das Programm per Mount in den Server geladen - es kann also auf dem Hostsystem daran gearbeitet werden. Ein Neubauen bei Codeänderungen ist nicht notwendig.

  - `make build-dev` buildet das Dev Image
  - `make run-dev` startet den Dev Container
  - `make stop-dev` stoppt den Dev Container
  - `make rebuild-dev` stoppt den Dev Container (falls er existiert), baut das Dev Image neu und startet den Container erneut
  - `make enter-dev` wählt einen in den Dev Container ein
  - `make import-dev` startet den Import im Dev Container
