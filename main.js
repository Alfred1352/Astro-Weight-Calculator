var planets = [ 
  ['Pluto', 0.06], 
  ['Neptune', 1.148], 
  ['Uranus', 0.917], 
  ['Saturn', 1.139], 
  ['Jupiter', 2.640], 
  ['Mars', 0.3895], 
  ['Moon', 0.1655], 
  ['Earth', 1], 
  ['Venus', 0.9032], 
  ['Mercury', 0.377], 
  ['Sun', 27.9] 
];

  let planetsE = document.getElementById('planets');
  let calButton = document.getElementById('calculate-button');
  let outputText = document.getElementById('output');
  let checkBox = document.getElementById('pluto');
  let plutoID = planets[0][0];

  function popOptions() {
    planets.reverse().forEach(function ([planetName]) {
      let optionElem = document.createElement('option');
      optionElem.innerText = planetName;
      planetsE.appendChild(optionElem);
    });

    planetsE.selectedIndex = "3";
  }

  popOptions();



function calculateWeight(weight, planetName) { 
  // 2. Write the code to return the correct weight 
  for (var i = 0; i < planets.length; i++) {
    let planetInfo = planets[i];
    
    if (planetInfo[0] === planetName) {
      let weightElem = planetInfo[1];

      let result = (weight * weightElem);
      outputText.innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";

      if (planetName === planets[0][0]) {
        outputText.innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
      };
    };
    
  };
  
}

function hidePluto() {
  if (document.getElementById('pluto').checked === true) {
    planetsE.lastChild.style.display = "none";
  } else {
    planetsE.lastChild.style.display = "block";
  };
}



function handleClickEvent() {
  let userWeight = document.getElementById("user-weight").value; 
  let planetName = document.getElementById("planets").value;
  console.log(userWeight, planetName);
  calculateWeight(userWeight, planetName); 
  
} 


  calButton.addEventListener("click", handleClickEvent);
  checkBox.addEventListener('click', hidePluto);
  

