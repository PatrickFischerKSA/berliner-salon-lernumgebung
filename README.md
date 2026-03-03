# Berliner Salonlabor (1815-1848)

Interaktive Lernumgebung für ein zweiphasiges Unterrichtsprojekt:

1. Inhaltssicherung zu **Religion, Philosophie, Politik** auf Basis der Jenny-Papers und Transkripte.
2. Kreative Reinszenierung als **Salon-Diskussion im Kostümfilm** mit GitHub-basierter Abgabe.

## Schnellstart

1. Repo klonen.
2. Trailer-Datei selbst hinzufügen (wegen Korruptionsrisiko bei Integrationen):
   - `knoblauchhaus.mp4` (direkt im Root)
3. `index.html` im Browser öffnen.

## Pflichtressourcen (integriert als Links)

- [Knoblauchhaus (Dropbox)](https://www.dropbox.com/scl/fi/rc4cg0kpdkkx9cnq5pvon/Das-Knoblauchhaus-Wie-hat-man-im-Knoblauchhaus-in-der-Berliner-Biedermeierzeit-gewohnt.mp4?rlkey=rfd38xpgegrn1xr6c8r08rl84&st=blr3mct3&dl=0)
- [Wir Deutschen Folge 11 (Dropbox)](https://www.dropbox.com/scl/fi/a6upq17nx4bjlg8vnd7x7/Wir-Deutschen-Folge-11-Biedermeier-und-Revolution-1813-1848.mp4?rlkey=kr8nc6vjf8yn1sgzzeqgykdn6&st=czuco9oe&dl=0)

## Struktur

```text
berliner-salon-lernumgebung/
├── README.md
├── index.html
├── styles.css
├── app.js
├── PR_TEMPLATE.md
├── VIDEO_ASSET_README.md
├── SUBMISSIONS_README.md
├── factsheets-religion-philosophie-politik.md
├── rollen-und-inszenierung.md
├── bewertungsraster.md
├── quellenbasis.md
└── knoblauchhaus.mp4 (manuell hinzufügen, Root)
```

## Was die Lernumgebung abdeckt

- Dynamische Faktenkarten und Mini-Quiz für Religion, Philosophie, Politik.
- Quellenbezogene Arbeitsaufträge für salonfähige Debatten.
- Rollenverteilung, Diskussions-Timer, Raumskizze.
- Produktionscheckliste und Storyboard-Export.
- Manifest-Generator für standardisierte GitHub-Abgaben.

## Abgabeprozess (Kurzfassung)

1. In der App `manifest.json` und PR-Text generieren.
2. Zielordner gemäß Manifest anlegen (z. B. `submissions/YYYY-MM-DD_gruppenname/`).
3. Video + `manifest.json` + optionale Skriptdatei ablegen.
4. Pull Request mit `PR_TEMPLATE.md` eröffnen.

## Quellenbasis des Inhalts

- `Dokument_JennyI.docx`
- `Dokument_JennyII.docx`
- `Dokument Jenny 3.docx`
- `Dok 4.docx`
- `Transkript Knoblauchhaus.docx`
- `TranskriptBiedermeier.docx`
- PDF zu Berliner Salons (Inhaltsstruktur/Kapitelrahmen)
