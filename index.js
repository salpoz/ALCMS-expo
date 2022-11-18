const toggleRunwayEdge = (e) => {
  const edgeLight = document
    .querySelector(".runway-top")
    .querySelectorAll(".light");
  const runwayEndLeft = document
    .querySelector(".runway-left")
    .querySelectorAll(".light");
  const runwayEndRight = document
    .querySelector(".runway-right")
    .querySelectorAll(".light");
  const runwayBottomEdge = document
    .querySelector(".runway-bottom")
    .querySelectorAll(".light");

  if (e.value === "off") {
    e.value = "on";
    edgeLight.forEach((el) => {
      el.classList.add("white");
    });
    runwayBottomEdge.forEach((el) => el.classList.add("white"));
    runwayEndLeft.forEach((el) => {
      el.classList.add("red");
    });
    runwayEndRight.forEach((el) => {
      el.classList.add("red");
    });
  } else {
    e.value = "off";
    edgeLight.forEach((el) => {
      el.classList.remove("white");
    });
    runwayBottomEdge.forEach((el) => el.classList.remove("white"));
    runwayEndLeft.forEach((el) => {
      el.classList.remove("red");
    });
    runwayEndRight.forEach((el) => {
      el.classList.remove("red");
    });
  }
  e.classList.toggle("on");
  // socket.send(`${e.name} ${e.value}`);
};

const togglePapiOneEight = (e) => {
  const oneEightPapi = document.querySelector(".papi-18");
  if (e.value === "off") {
    e.value = "on";
    oneEightPapi.style.display = "flex";
  } else {
    e.value = "off";
    oneEightPapi.style.display = "none";
  }
  e.classList.toggle("on");
};

const togglePapiThreeSix = (e) => {
  const threeSixPapi = document.querySelector(".papi-36");
  if (e.value === "off") {
    e.value = "on";
    threeSixPapi.style.display = "block";
  } else {
    e.value = "off";
    threeSixPapi.style.display = "none";
  }
  e.classList.toggle("on");
};

const toggleRunwayCenterline = (e) => {
  const runwayCenterline = document
    .querySelector(".runway-centerline")
    .querySelectorAll(".light");
  if (e.value === "off") {
    e.value = "on";
    runwayCenterline.forEach((el) => el.classList.add("white"));
  } else {
    e.value = "off";
    runwayCenterline.forEach((el) => el.classList.remove("white"));
  }
  e.classList.toggle("on");
};

const toggleThreeSixApproach = (e) => {
  const smallBars = document
    .querySelector(".approach-36")
    .querySelectorAll(".light");
  if (e.value === "off") {
    e.value = "on";
    smallBars.forEach((el) => el.classList.add("white"));
  } else {
    e.value = "off";
    smallBars.forEach((el) => el.classList.remove("white"));
  }

  e.classList.toggle("on");
};

const toggleOneEightApproach = (e) => {
  const smallBars = document
    .querySelector(".approach-18")
    .querySelectorAll(".light");
  if (e.value === "off") {
    e.value = "on";
    smallBars.forEach((el) => el.classList.add("white"));
  } else {
    e.value = "off";
    smallBars.forEach((el) => el.classList.remove("white"));
  }

  e.classList.toggle("on");
};

const toggleTaxiwayEdgeLights = (e) => {
  const taxiwayEdge = document
    .querySelector(".charlie-container")
    .querySelectorAll(".light");
  if (e.value === "off") {
    e.value = "on";
    taxiwayEdge.forEach((el) => el.classList.add("blue"));
  } else {
    e.value = "off";
    taxiwayEdge.forEach((el) => el.classList.remove("blue"));
  }
  e.classList.toggle("on");
};
