# Berliner Salonlabor (1815-1848)

Interaktive Lernumgebung für ein zweiphasiges Unterrichtsprojekt:

1. Inhaltssicherung zu **Religion, Philosophie, Politik** auf Basis der Jenny-Papers und Transkripte.
2. Kreative Reinszenierung als **Salon-Diskussion im Kostümfilm** mit Abgabe **ohne GitHub-Account**.

## Schnellstart

1. Repo klonen.
2. `index.html` im Browser öffnen.
3. In der App bei **Abgabe ohne GitHub-Zugang** den Dropbox-Abgabeordner-Link prüfen/anpassen (Standard-Link ist hinterlegt).

## Pflichtressourcen (Dropbox)

- [Knoblauchhaus](https://www.dropbox.com/scl/fi/rc4cg0kpdkkx9cnq5pvon/Das-Knoblauchhaus-Wie-hat-man-im-Knoblauchhaus-in-der-Berliner-Biedermeierzeit-gewohnt.mp4?rlkey=rfd38xpgegrn1xr6c8r08rl84&st=blr3mct3&dl=0)
- [Wir Deutschen Folge 11](https://www.dropbox.com/scl/fi/a6upq17nx4bjlg8vnd7x7/Wir-Deutschen-Folge-11-Biedermeier-und-Revolution-1813-1848.mp4?rlkey=kr8nc6vjf8yn1sgzzeqgykdn6&st=czuco9oe&dl=0)
- [Roman einer ungelösten Epoche](https://www.dropbox.com/scl/fi/eybabejkhl6xrri8z10q2/roman_epoche.mp4?rlkey=a5ej6bdynincwffct79fl2dbo&st=0lok9v1m&dl=0)
- [Berlins Salons: Macht und Geist](https://www.dropbox.com/scl/fi/rzmziaipgntj0kk3mdyfh/berlins_salons_macht_geist.mp4?rlkey=xauic0dx303yk4y30ddcwe9h5&st=hyvfz9fl&dl=0)

## Struktur

```text
berliner-salon-lernumgebung/
├── README.md
├── index.html
├── styles.css
├── app.js
├── papers-data.js
├── ORIGINAL_Dokument_JennyI.txt
├── ORIGINAL_Dokument_JennyII.txt
├── ORIGINAL_Dokument_Jenny_3.txt
├── ORIGINAL_Dok_4.txt
├── ORIGINAL_Transkript_Knoblauchhaus.txt
├── ORIGINAL_Transkript_Biedermeier.txt
└── ...weitere Materialdateien
```

## Was die Lernumgebung abdeckt

- Dynamische Faktenkarten für Religion, Philosophie, Politik.
- Differenzierte Freitextfragen mit Sofortkorrektur, Rubrikfeedback und Musterlösungen.
- Strenge Bewertung mit KO-Kriterien:
  - Pflichtstruktur (These + Beleg + Begründung + Gegeneinwand)
  - Pflicht-Quellenverweis
  - Pflicht-Direktzitat
- Exportfunktion für Antworten + Korrektur + Musterlösung als Markdown.
- Vollständige Originaltexte der Jenny-Papers und Transkripte direkt sichtbar in der App.
- Rollenverteilung, Diskussions-Timer, Raumskizze, Storyboard-Export.

## Abgabeprozess ohne GitHub

1. Lehrperson stellt einen Dropbox-Abgabeordner-Link bereit.
2. Schüler*innen laden Film dort hoch (mit standardisiertem Dateinamen).
3. App erzeugt:
   - `abgabe_metadaten.json`
   - `abgabeprotokoll.md`
4. Diese Metadaten gehen an die Lehrperson/LMS (E-Mail, Teams, Moodle, etc.).

## Quellenbasis des Inhalts

- `Dokument_JennyI.docx`
- `Dokument_JennyII.docx`
- `Dokument Jenny 3.docx`
- `Dok 4.docx`
- `Transkript Knoblauchhaus.docx`
- `TranskriptBiedermeier.docx`
- PDF zu Berliner Salons (Inhaltsstruktur/Kapitelrahmen)
