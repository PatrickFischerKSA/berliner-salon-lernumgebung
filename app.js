const themeData = {
  religion: {
    title: "Religion",
    tags: ["Pantheismus", "Trinität", "Konversion", "Abendmahl"],
    intro:
      "Kernkonflikt: Jenny kann religiöse Wahrheiten nicht einfach übernehmen, weil sie Denken und Glauben nicht gegeneinander ausspielen will.",
    facts: [
      "Die Originalpapiere markieren Jennys pantheistische Ausgangslage: Gott ist in allem gegenwärtig, nicht nur in kirchlicher Form.",
      "Der Pastor vertritt ein moderates Christentum (Liebe, Duldung), verlangt aber am Ende den Schritt zum Glaubensgehorsam.",
      "Trinität, Inkarnation und Wunder werden als intellektuelle Zumutung beschrieben; der Imperativ 'Glaube' bleibt strittig.",
      "Taufe und Abendmahl erscheinen nicht nur privat, sondern als sozial-politische Akte mit Folgen für Zugehörigkeit und Reputation."
    ],
    sources: [
      "ORIGINAL_Dokument_JennyI.txt",
      "ORIGINAL_Dokument_JennyII.txt",
      "ORIGINAL_Dokument_Jenny_3.txt",
      "ORIGINAL_Dok_4.txt"
    ],
    tasks: [
      "Zeigt im Dialog, wo Gewissen, Vernunft und Ordnung kollidieren.",
      "Baut mindestens ein wörtliches Kernzitat in eure Szene ein.",
      "Markiert im Skript klar den Unterschied zwischen Glaubensforderung und argumentativer Einsicht."
    ],
    openQuestions: [
      {
        prompt:
          "Analysiere den Konflikt zwischen pantheistischer Ausgangslage und christlicher Dogmatik bei Jenny. Zeige konkret, an welchen Punkten der Verstand widerspricht und welche sozialen Folgen daraus entstehen.",
        minWords: 140,
        rubric: [
          { concept: "Pantheistische Ausgangslage", keywords: ["pantheismus", "gott in allem", "immanenz"] },
          { concept: "Trinität/Inkarnation als Problem", keywords: ["trinität", "dreieinigkeit", "inkarnation", "menschwerdung"] },
          { concept: "Glaube vs. Vernunft", keywords: ["glaube", "vernunft", "beweis", "nicht erzwingen"] },
          { concept: "Soziale Wirkung von Konversion", keywords: ["taufe", "konversion", "ordnung", "zugehörigkeit", "reputation"] }
        ],
        modelAnswer:
          "Jennys Ausgangspunkt ist eine pantheistische Immanenzvorstellung: Gott wird in allem erfahren. Der Konflikt entsteht, sobald Dogmen wie Trinität und Inkarnation nicht nur poetisch gedacht, sondern als verbindliches Bekenntnis übernommen werden sollen. Genau dort kollidiert der Verstand mit dem Glaubensimperativ. In den Papers wird das als wiederkehrendes 'Glaube' ohne ausreichende Einsicht markiert. Zugleich hat die Entscheidung über Taufe/Konversion im Vormärz eine soziale und politische Dimension: Sie ordnet Personen neu in Zugehörigkeits- und Anerkennungsstrukturen ein. Deshalb ist der Konflikt nicht rein innerlich, sondern auch öffentlich und statusrelevant."
      },
      {
        prompt:
          "Bewerte die Rolle des Pastors differenziert: progressive Öffnung (Liebe/Duldung) versus institutioneller Dogmendruck. Ist er Vermittler oder Stabilisierungskraft der Ordnung?",
        minWords: 130,
        rubric: [
          { concept: "Moderates Christentum", keywords: ["liebe", "duldung", "protestantismus", "ohne dogmen"] },
          { concept: "Institutioneller Rahmen", keywords: ["amt", "ordnung", "symbol", "gebot"] },
          { concept: "Ambivalenz", keywords: ["ambivalent", "vermittelt", "einerseits", "andererseits"] },
          { concept: "Konsequenz für Jenny", keywords: ["gewissenskonflikt", "druck", "entscheidung", "taufe"] }
        ],
        modelAnswer:
          "Der Pastor ist ambivalent. Einerseits zeigt er eine progressive Öffnung, wenn er Liebe und Duldung als Kern des Christentums betont und sogar Christsein ohne starren Dogmenglauben denkbar macht. Andererseits bleibt er Amtsträger einer religiösen Ordnung, die am Ende auf Bekenntnis und Gehorsam beruht. Wo argumentatives Verstehen scheitert, greift er auf Symbolik und Gebot zurück. Damit vermittelt er zwar persönlich, stabilisiert aber institutionell weiterhin den normativen Rahmen. Für Jenny bedeutet das: empathische Begleitung im Ton, aber fortgesetzter Druck in der Sache."
      },
      {
        prompt:
          "Formuliere eine eigene These zur Frage, ob Religion in den Materialien primär spirituelle Suche oder gesellschaftliches Ordnungsinstrument ist. Begründe mit mindestens zwei Gegeneinwänden.",
        minWords: 150,
        rubric: [
          { concept: "Klare eigene These", keywords: ["these", "ich argumentiere", "meine position"] },
          { concept: "Ordnungsdimension", keywords: ["ordnung", "gesellschaft", "staat", "konfession"] },
          { concept: "Spirituelle Dimension", keywords: ["spirituell", "gewissen", "suche", "glaube"] },
          { concept: "Gegeneinwände", keywords: ["einwand", "gegenargument", "jedoch", "trotzdem"] }
        ],
        modelAnswer:
          "These: In den Materialien erscheint Religion primär als gesellschaftliches Ordnungsinstrument, ohne dass die spirituelle Suche verschwindet. Die Ordnungsfunktion zeigt sich daran, dass Konversion, Taufe und Bekenntnis nicht nur private Akte sind, sondern Zugehörigkeit, Anerkennung und institutionelle Stellung regeln. Gleichzeitig bleibt die spirituelle Dimension sichtbar, weil Jenny echte Gewissensfragen stellt und nicht bloß sozial taktisch handelt. Ein Einwand lautet, die Texte seien stark psychologisch und deshalb unpolitisch; dem widerspricht jedoch die explizite Verknüpfung von Religion, Öffentlichkeit und Status. Ein zweiter Einwand lautet, der Pastor öffne den Raum für persönliche Freiheit; das stimmt teilweise, ändert aber nicht die strukturelle Bindung an Ordnung und Glaubensgebot."
      }
    ]
  },
  philosophie: {
    title: "Philosophie",
    tags: ["Vernunft", "Erkenntniskritik", "Form vs. Geist", "Selbstprüfung"],
    intro:
      "Kernkonflikt: Die Figuren verhandeln Wahrheit nicht nur dogmatisch, sondern erkenntnistheoretisch und anthropologisch.",
    facts: [
      "Jenny fordert Beweisbarkeit: Was als Wahrheit gelten soll, muss vernünftig nachvollziehbar sein.",
      "Joseph relativiert 'positive Religion' historisch und betont einen moralischen Kern (Nächstenliebe, Wahrheit).",
      "Die Differenz Form/Geist erklärt, wie religiöse Formen den ethischen Gehalt überdecken können.",
      "Die Papers zeigen eine Psychologie der Selbsttäuschung: Überzeugungen können konstruiert wirken, ohne tragfähige Basis."
    ],
    sources: [
      "ORIGINAL_Dokument_JennyI.txt",
      "ORIGINAL_Dokument_JennyII.txt",
      "ORIGINAL_Dokument_Jenny_3.txt"
    ],
    tasks: [
      "Prüft jede Behauptung auf Erkenntnisstatus: Wissen, Glaube, Hoffnung, Vermutung.",
      "Zeigt, wie Form/Geist in eurer Szene als Konfliktmotor funktioniert.",
      "Baut bewusst eine Stelle ein, an der Selbsttäuschung möglich wäre."
    ],
    openQuestions: [
      {
        prompt:
          "Arbeite Jennys Vernunftforderung systematisch heraus. Was bedeutet 'bewiesen muss es mir werden' für ihre Position zwischen religiöser Tradition und moderner Erkenntniskritik?",
        minWords: 140,
        rubric: [
          { concept: "Vernunftforderung", keywords: ["bewiesen", "vernunft", "einsicht", "erkenntnis"] },
          { concept: "Traditionskonflikt", keywords: ["tradition", "dogma", "religion", "bekenntnis"] },
          { concept: "Moderne Perspektive", keywords: ["modern", "kritik", "prüfung", "autonomie"] },
          { concept: "Folgen für Handlung", keywords: ["entscheidung", "konsequenz", "gewissen", "konversion"] }
        ],
        modelAnswer:
          "Die Formel 'bewiesen muss es mir werden' markiert bei Jenny keine bloße Rechthaberei, sondern einen epistemischen Maßstab. Sie akzeptiert moralische Orientierung, verweigert aber Aussagen, die als Wahrheit gelten sollen, ohne nachvollziehbare Begründung. Damit gerät sie in einen Traditionskonflikt: Religiöse Formen erwarten Zustimmung, ihr Denken verlangt Prüfung. In moderner Perspektive steht sie für erkenntniskritische Autonomie, nicht für pauschale Religionsablehnung. Praktisch führt das zu einer tragischen Lage: Der soziale und emotionale Druck zur Konversion wächst, während die kognitive Zustimmung ausbleibt."
      },
      {
        prompt:
          "Erkläre Josephs Diagnose 'keine positive Religion mehr möglich' und diskutiere, ob daraus ein nihilistischer oder ein normativer Entwurf folgt.",
        minWords: 140,
        rubric: [
          { concept: "Historische Diagnose", keywords: ["keine positive religion", "historisch", "moderne", "wirren"] },
          { concept: "Normativer Kern", keywords: ["nächstenliebe", "wahrheit", "moral", "gott"] },
          { concept: "Kein Nihilismus", keywords: ["nicht nihilistisch", "orientierung", "ethik", "entwurf"] },
          { concept: "Eigene Bewertung", keywords: ["ich bewerte", "meiner ansicht", "folgerung"] }
        ],
        modelAnswer:
          "Josephs Satz ist eine historische Diagnose: Die alten konfessionellen Formen tragen für viele Subjekte nicht mehr selbstverständlich. Daraus folgt bei ihm aber kein Nihilismus. Im Gegenteil: Er skizziert einen normativen Kern aus Nächstenliebe, Wahrheit und Gottesbezug, nur ohne mystische Überfrachtung. Die Pointe ist daher reformatorisch-ethisch, nicht zerstörerisch. Seine Position verschiebt Legitimität von Dogmen zu prüfbaren moralischen Orientierungen."
      },
      {
        prompt:
          "Analysiere die Formel 'Form vs. Geist' als erkenntnis- und kulturphilosophisches Werkzeug. Zeige Chancen und Risiken dieser Unterscheidung.",
        minWords: 150,
        rubric: [
          { concept: "Form/Geist definiert", keywords: ["form", "geist", "oberfläche", "kern"] },
          { concept: "Erkenntniskritische Funktion", keywords: ["kritik", "prüfung", "blindheit", "wahrheit"] },
          { concept: "Soziale Folgen", keywords: ["krieg", "unterdrückung", "gesellschaft", "konflikt"] },
          { concept: "Risiken der Trennung", keywords: ["risiko", "vereinfachung", "verlust", "ambivalenz"] }
        ],
        modelAnswer:
          "Die Unterscheidung Form/Geist trennt rituelle oder institutionelle Oberfläche vom normativen Kern. Erkenntniskritisch ermöglicht sie, tradierte Praktiken zu prüfen und blinde Autorität sichtbar zu machen. Kulturphilosophisch erklärt sie, wie Konflikte eskalieren können, wenn Formen absolut gesetzt werden und den ethischen Gehalt verdrängen. Zugleich birgt die Trennung Risiken: Wer Formen nur negativ liest, unterschätzt ihre soziale Bindungsfunktion. Deshalb ist eine differenzierte Perspektive nötig, die Formen weder sakralisiert noch pauschal entwertet."
      }
    ]
  },
  politik: {
    title: "Politik",
    tags: ["Vormärz", "Emanzipation", "Zensur", "1848"],
    intro:
      "Kernkonflikt: Der Romanraum ist privat, aber politisch aufgeladen. Debatten über Recht, Nation und Zugehörigkeit laufen im Salon.",
    facts: [
      "Dok 4 verortet den Roman klar im Vormärz (1815-1848): Repression, Zensur und eingeschränkte Öffentlichkeit.",
      "Die Emanzipationsfrage erscheint als Rechts- und Staatsbürgerschaftsfrage, nicht nur als Moralappell.",
      "Nationalstaatsidee und liberales Bürgertum bleiben ambivalent: starke Rhetorik, aber geringe institutionelle Durchsetzungskraft.",
      "Das Biedermeier-Transkript zeigt den Rahmen: private Rückzüge, Informationsräume, dann Revolutionsschub 1848."
    ],
    sources: [
      "ORIGINAL_Dok_4.txt",
      "ORIGINAL_Transkript_Biedermeier.txt",
      "ORIGINAL_Transkript_Knoblauchhaus.txt"
    ],
    tasks: [
      "Baut einen Konflikt um 'Recht vs. gesellschaftliche Ordnung' in eure Szene ein.",
      "Nutzt mindestens drei historische Marker (1819, 1832, 1848) in Dialog oder Zwischentiteln.",
      "Entscheidet klar: reformistisch, resignativ oder proto-revolutionär."
    ],
    openQuestions: [
      {
        prompt:
          "Erkläre, wie die Materialien den Vormärz als Spannungsordnung darstellen. Verknüpfe Repression, Zensur und Reformimpulse in einer zusammenhängenden Argumentation.",
        minWords: 150,
        rubric: [
          { concept: "Repression/Zensur", keywords: ["zensur", "repression", "karlsbader", "überwachung"] },
          { concept: "Reformimpulse", keywords: ["reform", "verfassung", "liberal", "bürgerrechte"] },
          { concept: "Öffentlichkeit", keywords: ["öffentlichkeit", "salon", "halböffentlich", "gespräch"] },
          { concept: "Zeitliche Einordnung", keywords: ["1815", "1832", "1848", "vormärz"] }
        ],
        modelAnswer:
          "Die Materialien zeigen den Vormärz als Doppelstruktur: Einerseits staatliche Repression mit Zensur, Überwachung und Eingrenzung politischer Beteiligung, andererseits wachsende Reformimpulse aus liberalen und nationalen Bewegungen. Weil die formelle Öffentlichkeit beschränkt ist, verlagern sich Debatten in halbprivate Räume wie Salons, Vereine und literarische Texte. So entsteht eine politisierte Gesprächskultur ohne ausreichende institutionelle Durchsetzungskraft. Die Zeitschichten 1815-1848 markieren den Bogen von restaurativer Ordnung über Verdichtung der Konflikte bis zur Revolutionsdynamik."
      },
      {
        prompt:
          "Diskutiere die Judenemanzipation als Rechtsfrage: Warum reicht moralische Toleranz nicht aus, und welche strukturellen Veränderungen wären nötig?",
        minWords: 140,
        rubric: [
          { concept: "Rechtsfrage", keywords: ["recht", "gleichstellung", "bürgerrecht", "emanzipation"] },
          { concept: "Grenze der Toleranz", keywords: ["toleranz", "nicht genug", "moralisch", "strukturell"] },
          { concept: "Institutionelle Ebene", keywords: ["institution", "amt", "zugang", "gesetz"] },
          { concept: "Nation/Zugehörigkeit", keywords: ["nation", "zugehörigkeit", "anerkennung", "ausgrenzung"] }
        ],
        modelAnswer:
          "Die Emanzipationsdebatte wird in den Materialien als Rechtsfrage gefasst: Es geht nicht nur um höfliche Haltung, sondern um vollen Zugang zu Bürgerrechten, Ämtern und gesellschaftlicher Anerkennung. Moralische Toleranz bleibt ohne rechtliche Gleichstellung prekär, weil sie jederzeit widerrufbar ist. Nötig wären institutionelle Veränderungen: Abbau rechtlicher Sonderstellungen, gleicher Zugang zu Bildung und Staatsdienst, sowie die Entkopplung nationaler Zugehörigkeit von religiöser Markierung."
      },
      {
        prompt:
          "Nimm Stellung zur These: 'Politik verschwindet nach Kapitel 18 nicht, sondern wird strukturell.' Beziehe Roman- und Transkriptmaterial ein.",
        minWords: 160,
        rubric: [
          { concept: "These aufgenommen", keywords: ["politik verschwindet nicht", "strukturell", "these"] },
          { concept: "Romanbezug", keywords: ["kapitel", "jenny", "figur", "ordnung"] },
          { concept: "Transkriptbezug", keywords: ["biedermeier", "1848", "paulskirche", "revolution"] },
          { concept: "Eigenes Urteil", keywords: ["ich stimme zu", "ich widerspreche", "begründung"] }
        ],
        modelAnswer:
          "Die These ist überzeugend: Nach Kapitel 18 nimmt die explizite politische Rede zwar ab, doch die Konflikte wirken als Struktur weiter. Fragen von Zugehörigkeit, Ordnung, Geschlecht und Anerkennung bleiben handlungsbestimmend, auch wenn sie nicht mehr als programmatische Parolen auftreten. Das Transkriptmaterial stützt diese Lesart: Im Biedermeier verschiebt sich politischer Streit häufig in private und halböffentliche Formen, bevor die Spannungen 1848 wieder offen eruptiv werden. Politik ist damit nicht weg, sondern in soziale Praktiken und Lebensformen eingelagert."
      }
    ]
  }
};

const roles = [
  "Salonniere/Gastgeberin",
  "Liberal-reformerischer Jurist",
  "Konservativer Ordnungspolitiker",
  "Pastor mit Gewissenskonflikt",
  "Philosophische Skeptikerin",
  "Jüdischer Kaufmann und Bildungsbürger",
  "Student aus dem Burschenschaftsmilieu",
  "Journalistin unter Zensurdruck",
  "Bürgerliche Mutter (Ordnung/Familie)",
  "Arbeiterstimme (soziale Frage)"
];

function toDropboxRaw(url) {
  if (url.includes("raw=1")) return url;
  if (url.includes("dl=0")) return url.replace("dl=0", "raw=1");
  if (url.includes("dl=1")) return url.replace("dl=1", "raw=1");
  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}raw=1`;
}

function toDropboxStream(url) {
  return toDropboxRaw(url).replace("https://www.dropbox.com", "https://dl.dropboxusercontent.com");
}

const dropboxLinks = {
  roman:
    "https://www.dropbox.com/scl/fi/eybabejkhl6xrri8z10q2/roman_epoche.mp4?rlkey=a5ej6bdynincwffct79fl2dbo&st=0lok9v1m&dl=0",
  salons:
    "https://www.dropbox.com/scl/fi/rzmziaipgntj0kk3mdyfh/berlins_salons_macht_geist.mp4?rlkey=xauic0dx303yk4y30ddcwe9h5&st=hyvfz9fl&dl=0",
  knoblauchhaus:
    "https://www.dropbox.com/scl/fi/rc4cg0kpdkkx9cnq5pvon/Das-Knoblauchhaus-Wie-hat-man-im-Knoblauchhaus-in-der-Berliner-Biedermeierzeit-gewohnt.mp4?rlkey=rfd38xpgegrn1xr6c8r08rl84&st=blr3mct3&dl=0"
};

const defaultSubmissionDropboxLink =
  "https://www.dropbox.com/scl/fo/igd1xncgppgl836hg9n2j/AKy-98Vp0e1A3WAJIhUd-MU?rlkey=0lk0zx8gqj6369s5opkt6fimg&st=i699pgtf&dl=0";

const backgroundClip = toDropboxStream(dropboxLinks.knoblauchhaus);

const checklistKey = "salon_checklist_state_v2";
const scenes = [];
const theses = [];
let activeTheme = "religion";
let timerInterval = null;
let timerSeconds = 8 * 60;
let latestOpenEvaluation = null;
let latestProcessComment = "";
const structureSpec = {
  thesis: ["these", "ich argumentiere", "ich vertrete", "meine position", "ich behaupte", "ich zeige"],
  evidence: ["beleg", "zitat", "laut", "im text", "quelle", "kapitel", "dok", "transkript"],
  reasoning: ["weil", "daher", "folglich", "deshalb", "somit", "begruende", "begrundet"],
  counter: ["einwand", "gegenargument", "jedoch", "allerdings", "andererseits", "trotzdem"],
  conclusion: ["fazit", "insgesamt", "schluss", "daraus folgt", "zusammenfassend"]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
}

function wordsCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function includesAny(normalizedText, variants) {
  return variants.some((variant) => normalizedText.includes(normalizeText(variant)));
}

function evaluateStructure(normalizedAnswer) {
  const hits = [];
  const missing = [];

  Object.entries(structureSpec).forEach(([group, markers]) => {
    if (includesAny(normalizedAnswer, markers)) {
      hits.push(group);
    } else {
      missing.push(group);
    }
  });

  const mandatoryMissing = ["thesis", "evidence", "reasoning"].filter((mandatory) => !hits.includes(mandatory));
  const structureStrong = hits.length >= 4 && mandatoryMissing.length === 0;

  return { hits, missing, mandatoryMissing, structureStrong };
}

function deriveSourceHints(themeSources) {
  const hints = new Set(["dok 4", "kapitel", "transkript", "quelle", "original_dokument", "original_transkript"]);
  themeSources.forEach((source) => {
    const normalizedSource = normalizeText(source).replaceAll(".txt", "");
    hints.add(normalizedSource);
    hints.add(normalizedSource.replaceAll("_", " "));
    if (normalizedSource.includes("jennyi")) hints.add("jenny i");
    if (normalizedSource.includes("jennyii")) hints.add("jenny ii");
    if (normalizedSource.includes("jenny_3")) {
      hints.add("jenny iii");
      hints.add("jenny 3");
    }
    if (normalizedSource.includes("dok_4")) hints.add("dok 4");
    if (normalizedSource.includes("knoblauchhaus")) hints.add("knoblauchhaus");
    if (normalizedSource.includes("biedermeier")) hints.add("biedermeier");
  });
  return [...hints];
}

function evaluateCitation(answer, normalizedAnswer, themeSources) {
  const sourceHints = deriveSourceHints(themeSources);
  const sourceRefPattern = new RegExp(sourceHints.map((hint) => hint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i");
  const quotePattern = /[„"][^"“”]{8,}[“”"]|›[^‹]{8,}‹/;

  const hasSourceRef = sourceRefPattern.test(answer) || sourceRefPattern.test(normalizedAnswer);
  const hasQuote = quotePattern.test(answer);
  return { hasSourceRef, hasQuote };
}

function renderThemeButtons() {
  const switchWrap = document.getElementById("themeSwitch");
  switchWrap.innerHTML = "";

  Object.entries(themeData).forEach(([key, val]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `theme-btn${activeTheme === key ? " active" : ""}`;
    btn.textContent = val.title;
    btn.addEventListener("click", () => {
      activeTheme = key;
      renderThemeButtons();
      renderThemePanel();
    });
    switchWrap.appendChild(btn);
  });
}

function renderThemePanel() {
  const theme = themeData[activeTheme];
  const panel = document.getElementById("themePanel");

  panel.innerHTML = `
    <h3>${escapeHtml(theme.title)}</h3>
    <p>${escapeHtml(theme.intro)}</p>
    <div class="topic-tags">${theme.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>

    <div class="two-col">
      <div class="mini-card">
        <h4>Faktenblatt</h4>
        <ul>${theme.facts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="mini-card">
        <h4>Arbeitsauftrag</h4>
        <ul>${theme.tasks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="mini-card">
        <h4>Fragenmodus</h4>
        <ul>
          <li>Schreibe pro Frage mindestens einen klaren Gedankengang mit Beispiel.</li>
          <li>Nutze konkrete Bezüge zu den Pflichtfilmen und eurem Thema.</li>
          <li>Hole direktes Feedback und verbessere die Antwort im zweiten Durchgang.</li>
          <li>Exportiere danach Korrektur und Musterlösung für euer Portfolio.</li>
        </ul>
      </div>
    </div>

    <div class="open-questions-wrap" id="openQuestionsWrap">
      ${theme.openQuestions
        .map(
          (question, index) => `
          <article class="open-question">
            <h4>Frage ${index + 1}</h4>
            <p>${escapeHtml(question.prompt)}</p>
            <textarea id="answer-${activeTheme}-${index}" placeholder="Antwort hier eingeben..."></textarea>
            <div class="free-feedback" id="feedback-${activeTheme}-${index}">Noch nicht korrigiert.</div>
            <details>
              <summary>Musterlösung anzeigen</summary>
              <div class="model">${escapeHtml(question.modelAnswer)}</div>
            </details>
          </article>
        `
        )
        .join("")}
    </div>

    <div class="free-actions">
      <button class="btn small" type="button" id="evaluateOpenBtn">Sofortkorrektur jetzt</button>
      <button class="btn ghost small" type="button" id="exportOpenBtn">Korrektur + Musterlösung exportieren</button>
      <p id="openSummary"></p>
    </div>
  `;

  document.getElementById("evaluateOpenBtn").addEventListener("click", evaluateOpenAnswers);
  document.getElementById("exportOpenBtn").addEventListener("click", exportOpenEvaluation);
}

function evaluateOpenAnswers() {
  const theme = themeData[activeTheme];
  let totalScore = 0;
  const detail = [];

  theme.openQuestions.forEach((question, index) => {
    const answerId = `answer-${activeTheme}-${index}`;
    const feedbackId = `feedback-${activeTheme}-${index}`;
    const answer = document.getElementById(answerId).value.trim();
    const normalizedAnswer = normalizeText(answer);
    const wc = wordsCount(answer);

    const hits = [];
    const missing = [];

    question.rubric.forEach((criterion) => {
      const found = criterion.keywords.some((keyword) => normalizedAnswer.includes(normalizeText(keyword)));
      if (found) {
        hits.push(criterion.concept);
      } else {
        missing.push(criterion.concept);
      }
    });

    const structure = evaluateStructure(normalizedAnswer);
    const citation = evaluateCitation(answer, normalizedAnswer, theme.sources);

    const conceptScore = Math.round((hits.length / question.rubric.length) * 55);
    const structureScore = Math.round((structure.hits.length / Object.keys(structureSpec).length) * 25);
    const depthScore = Math.min(10, Math.round((wc / question.minWords) * 10));
    const citationScore = (citation.hasSourceRef ? 5 : 0) + (citation.hasQuote ? 5 : 0);

    let total = conceptScore + structureScore + depthScore + citationScore;

    const strictChecks = {
      lengthOk: wc >= Math.round(question.minWords * 0.7),
      sourceOk: citation.hasSourceRef,
      quoteOk: citation.hasQuote,
      structureOk: structure.structureStrong
    };

    const failedChecks = Object.entries(strictChecks)
      .filter(([, ok]) => !ok)
      .map(([name]) => name);

    const hasKo = failedChecks.length > 0;
    if (hasKo) {
      total = Math.min(total, 49);
    }

    totalScore += total;

    let level = "ausbaufähig";
    if (total >= 85) level = "sehr differenziert";
    else if (total >= 70) level = "differenziert";
    else if (total >= 55) level = "teilweise differenziert";
    if (hasKo) level = "formale Lücken - bitte überarbeiten";

    const checkLabel = {
      lengthOk: `Mindestlänge (>= ${Math.round(question.minWords * 0.7)} Wörter)`,
      sourceOk: "Quellenverweis enthalten",
      quoteOk: "Direktzitat enthalten",
      structureOk: "Struktur These+Beleg+Begründung+Gegeneinwand"
    };

    const missingFormal = Object.entries(strictChecks)
      .filter(([, ok]) => !ok)
      .map(([key]) => checkLabel[key]);

    const strengths = hits.length ? hits.join(", ") : "noch keine klaren Schwerpunktbegriffe";
    const nextStep =
      missing.length > 0
        ? `Inhaltlich nachschärfen bei: ${missing.join(", ")}.`
        : "Inhaltlich vollständig abgedeckt, jetzt sprachlich präzisieren.";
    const formalStep =
      missingFormal.length > 0
        ? `Formales Update nötig: ${missingFormal.join(" | ")}.`
        : "Formale Anforderungen sind erfüllt.";

    const feedback = `
      <strong>Auswertung: ${total}/100 (${level})</strong><br />
      Stärken: ${escapeHtml(strengths)}<br />
      Umfang: ${wc} Wörter (Ziel: ${question.minWords})<br />
      ${escapeHtml(nextStep)}<br />
      ${escapeHtml(formalStep)}
    `;

    document.getElementById(feedbackId).innerHTML = feedback;

    detail.push({
      question: question.prompt,
      answer,
      score: total,
      level,
      hits,
      missing,
      wordCount: wc,
      structureHits: structure.hits,
      structureMissing: structure.missing,
      strictChecks,
      failedChecks,
      hasKo,
      modelAnswer: question.modelAnswer
    });
  });

  const avg = Math.round(totalScore / theme.openQuestions.length);
  const summary = document.getElementById("openSummary");
  summary.textContent = `Gesamteindruck (${theme.title}): ${avg}/100`;

  latestOpenEvaluation = {
    theme: theme.title,
    average: avg,
    detail,
    generatedAt: new Date().toISOString()
  };
}

function downloadFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportOpenEvaluation() {
  if (!latestOpenEvaluation || latestOpenEvaluation.theme !== themeData[activeTheme].title) {
    evaluateOpenAnswers();
  }

  const evaluation = latestOpenEvaluation;
  if (!evaluation) return;

  const lines = [
    `# Freitext-Korrektur: ${evaluation.theme}`,
    `- Zeitpunkt: ${evaluation.generatedAt}`,
    `- Gesamteindruck: ${evaluation.average}/100`,
    ""
  ];

  evaluation.detail.forEach((item, index) => {
    lines.push(`## Frage ${index + 1}`);
    lines.push(item.question);
    lines.push("");
    lines.push("### Eigene Antwort");
    lines.push(item.answer || "(leer)");
    lines.push("");
    lines.push("### Korrektur");
    lines.push(`- Score: ${item.score}/100 (${item.level})`);
    lines.push(`- Treffer: ${item.hits.length ? item.hits.join(", ") : "keine"}`);
    lines.push(`- Fehlend: ${item.missing.length ? item.missing.join(", ") : "keine"}`);
    lines.push(`- Wortzahl: ${item.wordCount}`);
    lines.push(`- Struktur getroffen: ${item.structureHits.length ? item.structureHits.join(", ") : "keine"}`);
    lines.push(`- Struktur fehlt: ${item.structureMissing.length ? item.structureMissing.join(", ") : "keine"}`);
    lines.push(`- Quellenverweis: ${item.strictChecks.sourceOk ? "ja" : "nein"}`);
    lines.push(`- Direktzitat: ${item.strictChecks.quoteOk ? "ja" : "nein"}`);
    lines.push(`- Formale Mindestlänge: ${item.strictChecks.lengthOk ? "ja" : "nein"}`);
    lines.push(`- Pflichtstruktur erfüllt: ${item.strictChecks.structureOk ? "ja" : "nein"}`);
    lines.push(`- KO aktiv: ${item.hasKo ? "ja" : "nein"}`);
    lines.push("");
    lines.push("### Musterlösung");
    lines.push(item.modelAnswer);
    lines.push("");
  });

  const name = `freitext_korrektur_${activeTheme}.md`;
  downloadFile(name, lines.join("\n"), "text/markdown");
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function assignRoles() {
  const rawSize = Number(document.getElementById("groupSize").value);
  const size = Number.isFinite(rawSize) ? rawSize : 5;
  const list = document.getElementById("roleList");
  list.innerHTML = "";

  const picks = shuffle(roles).slice(0, Math.max(3, Math.min(size, roles.length)));
  picks.forEach((role, i) => {
    const li = document.createElement("li");
    li.textContent = `Rolle ${i + 1}: ${role}`;
    list.appendChild(li);
  });
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    if (timerSeconds <= 0) {
      timerSeconds = 0;
      clearInterval(timerInterval);
      timerInterval = null;
    }
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  if (!timerInterval) return;
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  const rawMinutes = Number(document.getElementById("timerMinutes").value);
  const inputMinutes = Number.isFinite(rawMinutes) ? rawMinutes : 8;
  timerSeconds = Math.max(1, inputMinutes) * 60;
  updateTimerDisplay();
}

function loadChecklist() {
  const saved = localStorage.getItem(checklistKey);
  const state = saved ? JSON.parse(saved) : {};
  const checks = document.querySelectorAll("#productionChecklist input[type='checkbox']");

  checks.forEach((box) => {
    box.checked = Boolean(state[box.dataset.checkId]);
    box.addEventListener("change", () => {
      state[box.dataset.checkId] = box.checked;
      localStorage.setItem(checklistKey, JSON.stringify(state));
      updateChecklistProgress();
    });
  });

  updateChecklistProgress();
}

function updateChecklistProgress() {
  const checks = [...document.querySelectorAll("#productionChecklist input[type='checkbox']")];
  const done = checks.filter((box) => box.checked).length;
  const percent = (done / checks.length) * 100;
  document.getElementById("checklistProgress").style.width = `${percent}%`;
}

function renderScenes() {
  const body = document.getElementById("sceneTableBody");
  body.innerHTML = "";
  scenes.forEach((scene) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(scene.title)}</td>
      <td>${escapeHtml(scene.goal)}</td>
      <td>${escapeHtml(scene.quote)}</td>
      <td>${escapeHtml(scene.camera)}</td>
    `;
    body.appendChild(tr);
  });
}

function renderTheses() {
  const body = document.getElementById("thesisTableBody");
  if (!body) return;
  body.innerHTML = "";
  theses.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(item.topic)}</td>
      <td>${escapeHtml(item.claim)}</td>
      <td>${escapeHtml(item.evidence)}</td>
      <td>${escapeHtml(item.counter)}</td>
      <td>${escapeHtml(item.scene)}</td>
    `;
    body.appendChild(tr);
  });
}

function setupThesisForm() {
  const form = document.getElementById("thesisForm");
  const exportBtn = document.getElementById("exportThesesBtn");
  if (!form || !exportBtn) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    theses.push({
      topic: document.getElementById("thesisTopic").value.trim(),
      claim: document.getElementById("thesisClaim").value.trim(),
      evidence: document.getElementById("thesisEvidence").value.trim(),
      counter: document.getElementById("thesisCounter").value.trim(),
      scene: document.getElementById("thesisScene").value.trim()
    });
    form.reset();
    renderTheses();
  });

  exportBtn.addEventListener("click", () => {
    if (theses.length === 0) return;
    const lines = ["# Kernthesen-Protokoll Salonfilm", ""];
    theses.forEach((item, index) => {
      lines.push(`## Kernthese ${index + 1}`);
      lines.push(`- Thema: ${item.topic}`);
      lines.push(`- These: ${item.claim}`);
      lines.push(`- Beleg: ${item.evidence}`);
      lines.push(`- Gegenposition: ${item.counter}`);
      lines.push(`- Einsatz im Film: ${item.scene}`);
      lines.push("");
    });
    downloadFile("kernthesen_protokoll.md", lines.join("\n"), "text/markdown");
  });
}

function setupProcessForm() {
  const form = document.getElementById("processForm");
  const preview = document.getElementById("processPreview");
  const exportBtn = document.getElementById("exportProcessBtn");
  if (!form || !preview || !exportBtn) return;

  function buildProcessComment() {
    const productProfile = document.getElementById("productProfile").value.trim();
    const creativeChoices = document.getElementById("creativeChoices").value.trim();
    const workProcess = document.getElementById("workProcess").value.trim();
    const learningGain = document.getElementById("learningGain").value.trim();

    latestProcessComment = `# Produktkommentar Salonfilm\n\n## 1) Produktprofil\n${productProfile}\n\n## 2) Gestalterische Entscheidungen\n${creativeChoices}\n\n## 3) Schaffensprozess\n${workProcess}\n\n## 4) Lernkommentar\n${learningGain}\n`;
    preview.textContent = latestProcessComment;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildProcessComment();
  });

  exportBtn.addEventListener("click", () => {
    if (!latestProcessComment) {
      buildProcessComment();
    }
    if (!latestProcessComment) return;
    downloadFile("produktkommentar_salonfilm.md", latestProcessComment, "text/markdown");
  });
}

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function setupSceneForm() {
  const form = document.getElementById("sceneForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    scenes.push({
      title: document.getElementById("sceneTitle").value.trim(),
      goal: document.getElementById("sceneGoal").value.trim(),
      quote: document.getElementById("sceneQuote").value.trim(),
      camera: document.getElementById("sceneCamera").value.trim()
    });
    form.reset();
    renderScenes();
  });

  document.getElementById("exportStoryboardBtn").addEventListener("click", () => {
    if (scenes.length === 0) return;

    const lines = ["# Storyboard Salonfilm", ""];
    scenes.forEach((scene, i) => {
      lines.push(`## Szene ${i + 1}: ${scene.title}`);
      lines.push(`- Ziel: ${scene.goal}`);
      lines.push(`- Schlüsselzitat: ${scene.quote}`);
      lines.push(`- Kamera: ${scene.camera}`);
      lines.push("");
    });

    downloadFile("storyboard.md", lines.join("\n"), "text/markdown");
  });
}

function setupSubmissionForm() {
  const form = document.getElementById("submissionForm");
  const preview = document.getElementById("submissionPreview");
  const openDropboxBtn = document.getElementById("openDropboxRequestBtn");
  const copyTextBtn = document.getElementById("copySubmissionTextBtn");
  const linkInput = document.getElementById("dropboxRequestLink");
  const teacherEmailInput = document.getElementById("teacherEmail");

  if (!form || !preview) return;

  const storageKey = "salon_dropbox_request_link_v1";
  const savedLink = localStorage.getItem(storageKey);
  if (!linkInput.value) {
    linkInput.value = savedLink || defaultSubmissionDropboxLink;
  }

  linkInput.addEventListener("change", () => {
    localStorage.setItem(storageKey, linkInput.value.trim());
  });

  openDropboxBtn.addEventListener("click", () => {
    const url = linkInput.value.trim();
    if (!url) {
      preview.textContent = "Bitte zuerst den Dropbox-Abgabeordner-Link eintragen.";
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  });

  copyTextBtn.addEventListener("click", async () => {
    const text = preview.textContent.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      preview.textContent += "\n\nAbgabetext in die Zwischenablage kopiert.";
    } catch {
      preview.textContent += "\n\nKonnte nicht automatisch kopieren. Bitte manuell markieren.";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const className = document.getElementById("className").value.trim();
    const groupName = document.getElementById("groupName").value.trim();
    const topicName = document.getElementById("topicName").value.trim();
    const videoFile = document.getElementById("videoFile").value.trim();
    const members = document.getElementById("members").value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const duration = document.getElementById("duration").value.trim();
    const dropboxRequestLink = linkInput.value.trim();
    const uploadedVideoLink = document.getElementById("uploadedVideoLink").value.trim();
    const teacherEmail = teacherEmailInput.value.trim();

    const isoDate = new Date().toISOString().slice(0, 10);
    const submissionId = `${isoDate}_${slugify(className)}_${slugify(groupName)}`;
    const recommendedFilename = `${slugify(className)}_${slugify(groupName)}_salonfilm.mp4`;

    const submissionManifest = {
      submission_id: submissionId,
      class: className,
      group: groupName,
      topic: topicName,
      duration,
      members,
      provided_video_filename: videoFile,
      recommended_filename: recommendedFilename,
      source_focus: activeTheme,
      dropbox_submission_link: dropboxRequestLink,
      uploaded_video_link: uploadedVideoLink || null,
      teacher_email: teacherEmail || null,
      generated_at: new Date().toISOString()
    };

    const submissionTicket = `# Abgabeprotokoll Salonfilm\n\n- Abgabe-ID: ${submissionId}\n- Klasse: ${className}\n- Gruppe: ${groupName}\n- Fokus: ${topicName}\n- Dauer: ${duration}\n- Mitglieder: ${members.join(", ")}\n- Gewählte Videodatei: ${videoFile}\n- Empfohlener Dateiname: ${recommendedFilename}\n- Dropbox-Abgabeordner: ${dropboxRequestLink}\n- Upload-Link Film: ${uploadedVideoLink || "(noch nicht eingetragen)"}\n\n## Ablauf\n1. Film in den Dropbox-Abgabeordner hochladen.\n2. Optional den öffentlichen Upload-Link eintragen.\n3. Metadatenpaket an Lehrperson senden.\n\n## Quellenbasis\n- Jenny-Papers (Originaltexte)\n- Transkript Knoblauchhaus\n- Transkript Biedermeier/1848\n`;

    downloadFile("abgabe_metadaten.json", JSON.stringify(submissionManifest, null, 2), "application/json");
    downloadFile("abgabeprotokoll.md", submissionTicket, "text/markdown");

    const messageLines = [
      `Abgabe-ID: ${submissionId}`,
      `Klasse: ${className}`,
      `Gruppe: ${groupName}`,
      `Debattenfokus: ${topicName}`,
      `Dauer: ${duration}`,
      `Mitglieder: ${members.join(", ")}`,
      `Filmdatei: ${videoFile}`,
      `Empfohlener Dateiname: ${recommendedFilename}`,
      `Dropbox-Abgabeordner: ${dropboxRequestLink}`,
      `Upload-Link Film: ${uploadedVideoLink || "(noch offen)"}`,
      teacherEmail ? `Lehrperson E-Mail: ${teacherEmail}` : ""
    ].filter(Boolean);

    preview.textContent = `Metadatenpaket erstellt.\n\n${messageLines.join("\n")}\n\nDateien heruntergeladen:\n- abgabe_metadaten.json\n- abgabeprotokoll.md`;
  });
}

function setupBackgroundVideo() {
  const video = document.getElementById("bgVideo");
  const status = document.getElementById("bgVideoStatus");
  const startBtn = document.getElementById("bgStartBtn");
  if (!video || !status || !startBtn) return;

  let fallbackUsed = false;
  video.src = backgroundClip;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const tryPlay = () => {
    const playResult = video.play();
    if (playResult && typeof playResult.then === "function") {
      playResult
        .then(() => {
          status.textContent = "Hintergrundvideo aktiv.";
          startBtn.style.display = "none";
        })
        .catch(() => {
          status.textContent = "Autoplay blockiert. Bitte auf 'Hintergrundvideo starten' klicken.";
          startBtn.style.display = "inline-block";
        });
    }
  };

  video.addEventListener("loadeddata", () => {
    status.textContent = "Hintergrundvideo geladen.";
  });

  video.addEventListener("error", () => {
    if (!fallbackUsed) {
      fallbackUsed = true;
      video.src = toDropboxRaw(dropboxLinks.knoblauchhaus);
      video.load();
      status.textContent = "Direktstream fehlgeschlagen, versuche Dropbox-raw-Link...";
      tryPlay();
      return;
    }
    status.textContent = "Video konnte nicht geladen werden. Bitte 'Film direkt testen' nutzen.";
    startBtn.style.display = "none";
  });

  startBtn.addEventListener("click", () => {
    tryPlay();
  });

  tryPlay();
}

function init() {
  renderThemeButtons();
  renderThemePanel();

  document.getElementById("assignRolesBtn").addEventListener("click", assignRoles);
  document.getElementById("startTimerBtn").addEventListener("click", startTimer);
  document.getElementById("pauseTimerBtn").addEventListener("click", pauseTimer);
  document.getElementById("resetTimerBtn").addEventListener("click", resetTimer);
  document.getElementById("timerMinutes").addEventListener("change", resetTimer);

  loadChecklist();
  setupThesisForm();
  setupSceneForm();
  setupProcessForm();
  setupSubmissionForm();
  setupBackgroundVideo();
  updateTimerDisplay();
}

init();
