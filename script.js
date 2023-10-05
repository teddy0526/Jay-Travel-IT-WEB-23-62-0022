const topDestinations = [
  { name: "Sri Lanka", url: "images/srilanka-ella-landscape-hill.jpg" },
  { name: "Rome", url: "images/vatican-city.jpg" },
  { name: "Maldives", url: "images/maldives-1.png" },
  { name: "Switzerland", url: "images/switzerland mountains.jpg" },
  { name: "Thailand", url: "images/tailand-greencanvas.jpg" },
];

function displayTopDestinations(array) {
  const outputDestinations = document.getElementById("top-destinations");

  array.forEach((element) => {
    const div = document.createElement("div");
    const titlesHeader = document.createElement("h3");
    const img = document.createElement("img");

    img.style.width = "220px";
    img.style.height = "80%";
    img.src = element.url;
    img.alt = `${element.name} image`;

    titlesHeader.textContent = element.name;
    titlesHeader.style.fontSize = "15px";
    titlesHeader.style.textTransform = "uppercase";

    div.appendChild(titlesHeader);
    div.appendChild(img);

    outputDestinations.appendChild(div);
  });
}

displayTopDestinations(topDestinations);

const ourTeamLeads = [
  { name: "Hugo Silva", url: "images/hugo silva.jpeg" },
  { name: "Imanoli Arias", url: "images/imanoli arias.jpg" },
  { name: "Javier Bardem", url: "images/javier bardem.jpg" },
];

function displayTeamLeads(array) {
  const outputTeamLeads = document.getElementById("team-leads-data");

  array.forEach((element) => {
    const div = document.createElement("div");
    const personName = document.createElement("h3");
    const img = document.createElement("img");

    img.style.width = "220px";
    img.style.height = "80%";
    img.src = element.url;
    img.alt = `${element.name} image`;

    personName.textContent = element.name;
    personName.style.fontSize = "15px";
    personName.style.textTransform = "capitalize";
    personName.style.marginTop = "10px";

    div.appendChild(img);
    div.appendChild(personName);

    outputTeamLeads.appendChild(div);
  });
}

displayTeamLeads(ourTeamLeads);

const testimonials = [
  { stat: "250k+", subTopic: "happy clients" },
  { stat: "800", subTopic: "Weekly Reservations" },
  { stat: "150", subTopic: "Travel Partners" },
  { stat: "15", subTopic: "Branches" },
];

function displayTestimonials(array) {
  const outputtestimonials = document.getElementById("testimonials");

  array.forEach((element) => {
    const div = document.createElement("div");
    const statValue = document.createElement("h3");
    const label = document.createElement("div");

    statValue.textContent = element.stat;

    statValue.style.fontSize = "45px";
    statValue.style.textTransform = "capitalize";
    statValue.style.marginTop = "10px";
    statValue.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

    label.textContent = element.subTopic;

    label.style.fontSize = "15px";
    label.style.fontWeight = "400";
    label.style.textTransform = "uppercase";
    label.style.color = "white";

    div.appendChild(statValue);
    div.appendChild(label);

    outputtestimonials.appendChild(div);
  });
}

displayTestimonials(testimonials);
