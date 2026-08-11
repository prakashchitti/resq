/* =========================
   RESQ — DEMO ENGINE
========================= */

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* =========================
   EMERGENCY ANALYSIS
========================= */

function startAnalysis() {

  const location =
    document.getElementById("locationInput").value.trim();

  if (!location) {
    alert("Please enter the emergency location.");
    return;
  }

  showScreen("processing");

  const steps = [
    {
      id: "process1",
      text: "Emergency severity analyzed"
    },
    {
      id: "process2",
      text: "Best available ambulance identified"
    },
    {
      id: "process3",
      text: "Hospital emergency capacity checked"
    },
    {
      id: "process4",
      text: "Fastest response route optimized"
    }
  ];

  const processingText =
    document.getElementById("processingText");

  let index = 0;

  processingText.textContent =
    "Understanding emergency details";

  document.querySelectorAll(".process-item").forEach(item => {
    item.classList.remove("done");
    item.querySelector(".process-icon").textContent = "○";
  });

  const interval = setInterval(() => {

    if (index >= steps.length) {

      clearInterval(interval);

      processingText.textContent =
        "Response plan ready";

      setTimeout(() => {
        showScreen("response");
      }, 800);

      return;
    }

    const step = steps[index];

    const element =
      document.getElementById(step.id);

    element.classList.add("done");

    element.querySelector(".process-icon").textContent = "✓";

    processingText.textContent =
      step.text;

    index++;

  }, 850);
}


/* =========================
   START LIVE RESPONSE
========================= */

function startLiveResponse() {

  showScreen("live");

  const ambulance =
    document.getElementById("ambulanceMarker");

  const eta =
    document.getElementById("eta");

  /* Reset demo */
  ambulance.style.left = "46%";
  ambulance.style.top = "49%";

  eta.textContent = "08:00";

  const message =
    document.getElementById("trafficMessage");

  message.textContent =
    "Route conditions normal.";

}


/* =========================
   TRAFFIC SIMULATION
========================= */

function simulateTraffic() {

  const eta = document.getElementById("eta");
  const message = document.getElementById("trafficMessage");
  const ambulance = document.getElementById("ambulanceMarker");

  const routes = document.querySelectorAll(".route-option");

  // STEP 1 — Traffic detected
  message.innerHTML =
    "⚠️ <strong>Traffic detected.</strong><br>" +
    "ResQ AI is recalculating the emergency route...";

  eta.textContent = "--";

  // STEP 2 — Update Route A and Route B
  if (routes.length >= 2) {

    routes[0].innerHTML =
      "<div>" +
      "<strong>Route A</strong>" +
      "<small>Traffic detected</small>" +
      "</div>" +
      "<b>11 min ❌</b>";

    routes[1].innerHTML =
      "<div>" +
      "<strong>Route B</strong>" +
      "<small>AI optimized route</small>" +
      "</div>" +
      "<b>07 min ✓</b>";

    routes[0].classList.add("route-bad");
    routes[1].classList.add("route-good");
  }

  // STEP 3 — AI recalculation
  setTimeout(function () {

    message.innerHTML =
      "🧠 <strong>Route optimized.</strong><br>" +
      "Route B selected. Time saved: 4 min.";

    eta.textContent = "07:00";

    // Move ambulance
    ambulance.style.transition = "all 2s ease";
    ambulance.style.left = "63%";
    ambulance.style.top = "40%";

    // Highlight Route B
    if (routes.length >= 2) {
      routes[1].style.boxShadow =
        "0 0 18px rgba(92,230,155,0.35)";
    }

  }, 1600);
}


/* =========================
   HOSPITAL NOTIFICATION
========================= */

function completeResponse() {

  const message =
    document.getElementById("trafficMessage");

  message.innerHTML =
    "📡 Sending emergency information to hospital...";

  setTimeout(() => {

    showScreen("complete");

  }, 1200);
}


/* =========================
   SEVERITY BUTTONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const severityButtons =
    document.querySelectorAll(".severity");

  severityButtons.forEach(button => {

    button.addEventListener("click", () => {

      severityButtons.forEach(btn => {
        btn.classList.remove("active-severity");
      });

      button.classList.add("active-severity");

    });

  });

});
