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

  const eta =
    document.getElementById("eta");

  const message =
    document.getElementById("trafficMessage");

  const ambulance =
    document.getElementById("ambulanceMarker");

  message.innerHTML =
    "⚠️ <strong>Traffic detected.</strong><br>" +
    "ResQ is recalculating the emergency route...";

  eta.textContent = "—";

  /* Small delay to make the AI feel like it is processing */

  setTimeout(() => {

    message.innerHTML =
      "🟢 <strong>Route optimized.</strong><br>" +
      "Alternative route selected. Estimated time saved: 4 min.";

    eta.textContent = "04:00";

    /* Move ambulance visually */

    ambulance.style.transition =
      "all 2s ease";

    ambulance.style.left = "63%";
    ambulance.style.top = "40%";

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
