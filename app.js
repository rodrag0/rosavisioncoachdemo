const PUZZLES = [
  {
    id: "padelchess-volley",
    category: "Attack",
    title: "Volley Placement",
    kicker: "Tactical situation",
    prompt: "Where is it better to place your volley to make the return harder for the opponent?",
    context: "You are established at the net and the defenders are deep. Choose the toughest reply for them.",
    start: { x: 26, y: 58 },
    players: [
      { id: "opp-left", role: "opponent", side: "top", x: 18, y: 18 },
      { id: "opp-right", role: "opponent", side: "top", x: 82, y: 18 },
      { id: "self", role: "self", side: "bottom", x: 24, y: 63, tag: "YOU" },
      { id: "partner", role: "partner", side: "bottom", x: 78, y: 63 }
    ],
    options: [
      {
        id: "A",
        title: "As close to the back glass as possible",
        short: "Back glass",
        x: 44,
        y: 8,
        explanation: "It gives your shot too little margin and you might hit it out.",
        path: { end: { x: 44, y: 9 }, bend: -8 }
      },
      {
        id: "B",
        title: "Before the glass",
        short: "Before glass",
        x: 43,
        y: 23,
        explanation:
          "The opponent has to decide: take it early before the glass or let it bounce, which makes it harder to return.",
        path: { end: { x: 43, y: 18 }, bend: -3 }
      },
      {
        id: "C",
        title: "Near the middle of the court",
        short: "Middle",
        x: 43,
        y: 37,
        explanation: "It leaves the opponent a much more comfortable and predictable return.",
        path: { end: { x: 43, y: 35 }, bend: 3 }
      }
    ],
    correctId: "B"
  },
  {
    id: "padelchess-lob-call",
    category: "Communication",
    title: "Lob Communication",
    kicker: "Tactical situation",
    prompt: "Your partner is running back under a lob. What should you call?",
    context: "Both opponents are already up at the net. Choose the call that gives your partner the right picture.",
    start: { x: 76, y: 76 },
    staticPaths: [
      {
        start: { x: 73, y: 40 },
        endRef: "ball",
        bend: 8,
        variant: "neutral"
      }
    ],
    players: [
      { id: "opp-left", role: "opponent", side: "top", x: 21, y: 39 },
      { id: "opp-right", role: "opponent", side: "top", x: 73, y: 39 },
      { id: "self", role: "self", side: "bottom", x: 18, y: 82, tag: "YOU" },
      { id: "partner", role: "partner", side: "bottom", x: 73, y: 82 }
    ],
    options: [
      {
        id: "A",
        title: "\"BOTH UP\"",
        short: "\"BOTH UP\"",
        x: 46,
        y: 69,
        type: "callout",
        explanation:
          "That call tells your partner the rivals stayed forward, so the lob is on and both of you can recover together.",
        feedbackPaths: [
          { start: { x: 18, y: 81 }, end: { x: 24, y: 59 }, bend: -2, variant: "correct" },
          { start: { x: 73, y: 81 }, end: { x: 68, y: 59 }, bend: 1, variant: "correct" }
        ]
      },
      {
        id: "B",
        title: "NOTHING",
        short: "NOTHING",
        x: 46,
        y: 77,
        type: "callout",
        explanation:
          "Silence hides the key information. Your partner can miss the lob and you lose the chance to reset together.",
        feedbackPaths: []
      }
    ],
    correctId: "A"
  },
  {
    id: "pdf-rulo-zone",
    category: "Overheads",
    title: "Rulo In The Wrong Zone",
    kicker: "Tactical situation",
    prompt: "Which overhead choice makes sense from this zone?",
    context: "This is a risky rulo zone. Choose the overhead that keeps the point under control.",
    start: { x: 49, y: 56 },
    players: [
      { id: "opp-left", role: "opponent", side: "top", x: 20, y: 18 },
      { id: "opp-right", role: "opponent", side: "top", x: 81, y: 20 },
      { id: "self", role: "self", side: "bottom", x: 50, y: 60, tag: "YOU" },
      { id: "partner", role: "partner", side: "bottom", x: 75, y: 67 }
    ],
    options: [
      {
        id: "A",
        title: "Rulo",
        short: "Rulo",
        x: 79,
        y: 20,
        explanation:
          "Rulos in this area reduce success angle, increasing unforced error likeliness. Rulo is better for the recommended area. Vibora or bandeja suggested.",
        path: { end: { x: 82, y: 18 }, bend: 18 }
      },
      {
        id: "B",
        title: "Bandeja or vibora",
        short: "Bandeja / vibora",
        x: 50,
        y: 17,
        explanation: "From this zone, vibora or bandeja is the suggested overhead.",
        path: { end: { x: 50, y: 17 }, bend: 0 }
      }
    ],
    correctId: "B"
  },
  {
    id: "pdf-defensive-x3",
    category: "Groundstrokes",
    title: "Defensive x3 Or Lob",
    kicker: "Tactical situation",
    prompt: "Which shot makes more sense from this defensive zone?",
    context: "You are deep in defense and the opponents are already closing the net. Choose the percentage play.",
    start: { x: 31, y: 67 },
    players: [
      { id: "opp-left", role: "opponent", side: "top", x: 24, y: 39 },
      { id: "opp-right", role: "opponent", side: "top", x: 76, y: 39 },
      { id: "self", role: "self", side: "bottom", x: 28, y: 83, tag: "YOU" },
      { id: "partner", role: "partner", side: "bottom", x: 73, y: 83 }
    ],
    options: [
      {
        id: "A",
        title: "x3",
        short: "x3",
        x: 52,
        y: 12,
        explanation:
          "Lost point: smashed a x3 while in defensive zone, opponents were already at the front. The lob reduces pressure to defend.",
        path: { end: { x: 52, y: 12 }, bend: 2 }
      },
      {
        id: "B",
        title: "Lob",
        short: "Lob",
        x: 21,
        y: 13,
        explanation: "Defending with a lob gives you the opportunity to retake the net.",
        path: { end: { x: 21, y: 13 }, bend: -14 }
      }
    ],
    correctId: "B"
  }
];

const state = {
  index: 0,
  selectedId: null,
  locked: false,
  rating: 1200,
  streak: 0
};

const refs = {
  scenarioCategory: document.getElementById("scenarioCategory"),
  scenarioTitle: document.getElementById("scenarioTitle"),
  scenarioCounter: document.getElementById("scenarioCounter"),
  court: document.getElementById("court"),
  playersLayer: document.getElementById("playersLayer"),
  markersLayer: document.getElementById("markersLayer"),
  overlay: document.getElementById("overlay"),
  promptKicker: document.getElementById("promptKicker"),
  promptText: document.getElementById("promptText"),
  promptContext: document.getElementById("promptContext"),
  feedbackBox: document.getElementById("feedbackBox"),
  optionButtons: document.getElementById("optionButtons"),
  confirmButton: document.getElementById("confirmButton"),
  nextButton: document.getElementById("nextButton"),
  restartButton: document.getElementById("restartButton"),
  progressFill: document.getElementById("progressFill"),
  ratingValue: document.getElementById("ratingValue"),
  streakValue: document.getElementById("streakValue")
};

function currentPuzzle() {
  return PUZZLES[state.index];
}

function playerMarkup(player) {
  const roleClass =
    player.role === "self"
      ? "player--self"
      : player.role === "partner"
        ? "player--partner"
        : "player--opponent";
  const sideClass = player.side === "top" ? "player--top" : "player--bottom";
  const tag = player.tag ? `<span class="player__tag">${player.tag}</span>` : "";

  return `
    <div
      class="player ${roleClass} ${sideClass}"
      style="left:${player.x}%;top:${player.y}%"
      aria-hidden="true"
    >
      <span class="player__head"></span>
      <span class="player__body"></span>
      <span class="player__racket"></span>
      ${tag}
    </div>
  `;
}

function ballMarkup(point, pulse = false) {
  return `
    <div
      id="ballMarker"
      class="ball ${pulse ? "ball--pulse" : ""}"
      style="left:${point.x}%;top:${point.y}%"
      aria-hidden="true"
    ></div>
  `;
}

function markerClass(option, puzzle) {
  const classes = ["marker"];
  const correct = option.id === puzzle.correctId;
  const selected = option.id === state.selectedId;

  if (option.type === "callout") {
    classes.push("marker--callout");
  }

  if (selected && !state.locked) {
    classes.push("marker--selected");
  }

  if (state.locked) {
    if (selected && correct) {
      classes.push("marker--correct");
    } else if (selected && !correct) {
      classes.push("marker--wrong");
    } else if (!selected && correct) {
      classes.push("marker--correct", "marker--dimmed");
    } else {
      classes.push("marker--dimmed");
    }
  }

  return classes.join(" ");
}

function renderPlayers() {
  const puzzle = currentPuzzle();
  refs.playersLayer.innerHTML =
    puzzle.players.map(playerMarkup).join("") + ballMarkup(puzzle.start, !state.locked);
}

function buildPath(pathConfig) {
  const start = pathConfig.start;
  const end = pathConfig.end;
  const bend = pathConfig.bend ?? 0;
  const controlY = (start.y + end.y) / 2;
  const controlX = (start.x + end.x) / 2 + bend;
  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
}

function pathVariantClass(variant) {
  if (variant === "preview") {
    return "trajectory trajectory--preview";
  }
  if (variant === "correct") {
    return "trajectory trajectory--correct";
  }
  if (variant === "wrong") {
    return "trajectory trajectory--wrong";
  }
  return "trajectory trajectory--neutral";
}

function toOverlayPoint(element, fallback) {
  if (!element) {
    return fallback;
  }

  const overlayRect = refs.overlay.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  if (!overlayRect.width || !overlayRect.height) {
    return fallback;
  }

  return {
    x: Number((((elementRect.left + elementRect.width / 2 - overlayRect.left) / overlayRect.width) * 100).toFixed(2)),
    y: Number((((elementRect.top + elementRect.height / 2 - overlayRect.top) / overlayRect.height) * 100).toFixed(2))
  };
}

function ballAnchor(puzzle) {
  return toOverlayPoint(document.getElementById("ballMarker"), puzzle.start);
}

function markerAnchor(option) {
  return toOverlayPoint(
    refs.markersLayer.querySelector(`[data-option-id="${option.id}"]`),
    { x: option.x, y: option.y }
  );
}

function resolvePathPoint(pathConfig, pointKey, anchors) {
  const refKey = pathConfig[`${pointKey}Ref`];
  if (refKey && anchors[refKey]) {
    return anchors[refKey];
  }

  return pathConfig[pointKey];
}

function renderOverlay() {
  const puzzle = currentPuzzle();
  const selected = puzzle.options.find((option) => option.id === state.selectedId);
  const ballPoint = ballAnchor(puzzle);
  const selectedMarkerPoint = selected ? markerAnchor(selected) : null;
  const anchors = {
    ball: ballPoint,
    selected: selectedMarkerPoint
  };
  const selectedVariant = selected
    ? selected.id === puzzle.correctId
      ? "correct"
      : "wrong"
    : "neutral";
  const selectedPath =
    state.locked && selected && selected.path
      ? [{ start: ballPoint, end: selected.path.end, bend: selected.path.bend, variant: selectedVariant }]
      : [];
  const previewPaths =
    !state.locked && selected && selectedMarkerPoint
      ? [
          {
            start: ballPoint,
            end: selectedMarkerPoint,
            bend: 0,
            variant: "preview"
          }
        ]
      : [];
  const feedbackPaths = state.locked && selected ? selected.feedbackPaths || [] : [];
  const staticPaths = (puzzle.staticPaths || []).map((pathConfig) => ({
    ...pathConfig,
    start: resolvePathPoint(pathConfig, "start", anchors),
    end: resolvePathPoint(pathConfig, "end", anchors)
  }));
  const paths = [...staticPaths, ...previewPaths, ...selectedPath, ...feedbackPaths];

  refs.overlay.innerHTML = `
    <defs>
      <marker id="arrow-correct" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
        <path class="arrow-head--correct" d="M 0 0 L 6 3 L 0 6 z"></path>
      </marker>
      <marker id="arrow-wrong" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
        <path class="arrow-head--wrong" d="M 0 0 L 6 3 L 0 6 z"></path>
      </marker>
      <marker id="arrow-neutral" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
        <path class="arrow-head--neutral" d="M 0 0 L 6 3 L 0 6 z"></path>
      </marker>
      <marker id="arrow-preview" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
        <path class="arrow-head--preview" d="M 0 0 L 6 3 L 0 6 z"></path>
      </marker>
    </defs>
    ${paths
      .map((pathConfig) => {
        const variant = pathConfig.variant || "neutral";
        return `
          <path
            class="${pathVariantClass(variant)}"
            d="${buildPath(pathConfig)}"
            ${variant === "preview" ? "" : `marker-end="url(#arrow-${variant})"`}
          ></path>
        `;
      })
      .join("")}
  `;
}

function renderMarkers() {
  const puzzle = currentPuzzle();

  refs.markersLayer.innerHTML = puzzle.options
    .map(
      (option) => `
        <button
          type="button"
          class="${markerClass(option, puzzle)}"
          data-option-id="${option.id}"
          style="left:${option.x}%;top:${option.y}%"
          aria-label="${option.id}: ${option.title}"
        >
          <span class="marker__id">${option.type === "callout" ? option.short : option.id}</span>
        </button>
      `
    )
    .join("");

  refs.markersLayer.querySelectorAll("[data-option-id]").forEach((button) => {
    button.addEventListener("click", () => selectOption(button.dataset.optionId));
  });
}

function optionButtonClass(option, puzzle) {
  const classes = ["option-button"];
  const selected = state.selectedId === option.id;
  const correct = option.id === puzzle.correctId;

  if (selected && !state.locked) {
    classes.push("option-button--selected");
  }

  if (state.locked) {
    if (selected && correct) {
      classes.push("option-button--correct");
    } else if (selected && !correct) {
      classes.push("option-button--wrong");
    } else if (!selected && correct) {
      classes.push("option-button--correct", "option-button--dimmed");
    } else {
      classes.push("option-button--dimmed");
    }
  }

  return classes.join(" ");
}

function renderOptions() {
  const puzzle = currentPuzzle();

  refs.optionButtons.innerHTML = puzzle.options
    .map(
      (option) => `
        <button
          type="button"
          class="${optionButtonClass(option, puzzle)}"
          data-option-id="${option.id}"
        >
          <span class="option-button__letter">${option.id}</span>
          <span class="option-button__copy">
            <span class="option-button__title">${option.title}</span>
            ${
              option.short && option.short !== option.title
                ? `<span class="option-button__desc">${option.short}</span>`
                : ""
            }
          </span>
        </button>
      `
    )
    .join("");

  refs.optionButtons.querySelectorAll("[data-option-id]").forEach((button) => {
    button.addEventListener("click", () => selectOption(button.dataset.optionId));
  });
}

function renderPrompt() {
  const puzzle = currentPuzzle();
  refs.promptKicker.textContent = puzzle.kicker;
  refs.promptText.textContent = puzzle.prompt;
  refs.promptContext.textContent = puzzle.context;

  if (!state.locked) {
    refs.feedbackBox.hidden = true;
    refs.feedbackBox.innerHTML = "";
    return;
  }

  const selected = puzzle.options.find((option) => option.id === state.selectedId);
  const correct = state.selectedId === puzzle.correctId;
  const bestOption = puzzle.options.find((option) => option.id === puzzle.correctId);
  const statusLabel = correct ? "Correct decision" : "Better decision available";

  refs.feedbackBox.hidden = false;
  refs.feedbackBox.innerHTML = `
    <span class="feedback-pill ${correct ? "feedback-pill--correct" : "feedback-pill--wrong"}">
      ${correct ? "+" : "!"} ${statusLabel}
    </span>
    <p class="feedback-text">${selected.explanation}</p>
    ${
      correct
        ? ""
        : `<p class="feedback-text"><strong>Best play:</strong> ${bestOption.title}. ${bestOption.explanation}</p>`
    }
  `;
}

function renderHeader() {
  refs.scenarioCategory.textContent = currentPuzzle().category;
  refs.scenarioTitle.textContent = currentPuzzle().title;
  refs.scenarioCounter.textContent = `${state.index + 1} / ${PUZZLES.length}`;
}

function renderStatus() {
  const progressValue = ((state.index + (state.locked ? 1 : 0)) / PUZZLES.length) * 100;
  refs.progressFill.style.height = `${Math.max(progressValue, 8)}%`;
  refs.ratingValue.textContent = state.rating;
  refs.streakValue.textContent = state.streak;
  refs.confirmButton.disabled = state.locked || !state.selectedId;
  refs.confirmButton.hidden = state.locked;
  refs.nextButton.hidden = !state.locked;
}

function render() {
  renderHeader();
  renderPlayers();
  renderMarkers();
  renderOverlay();
  renderOptions();
  renderPrompt();
  renderStatus();
}

function selectOption(optionId) {
  if (state.locked) {
    return;
  }

  state.selectedId = optionId;
  render();
}

function confirmSelection() {
  if (!state.selectedId || state.locked) {
    return;
  }

  const correct = state.selectedId === currentPuzzle().correctId;
  state.locked = true;
  state.rating = Math.max(1000, state.rating + (correct ? 80 : -35));
  state.streak = correct ? state.streak + 1 : 0;
  render();
}

function nextPuzzle() {
  const nextIndex = state.index + 1;
  state.index = nextIndex >= PUZZLES.length ? 0 : nextIndex;
  state.selectedId = null;
  state.locked = false;

  if (nextIndex >= PUZZLES.length) {
    state.rating = 1200;
    state.streak = 0;
  }

  render();
}

function restartDemo() {
  state.index = 0;
  state.selectedId = null;
  state.locked = false;
  state.rating = 1200;
  state.streak = 0;
  render();
}

refs.confirmButton.addEventListener("click", confirmSelection);
refs.nextButton.addEventListener("click", nextPuzzle);
refs.restartButton.addEventListener("click", restartDemo);
window.addEventListener("resize", render);

render();
