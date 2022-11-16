function createGame(player1, hour, player2) {
  return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
      
      <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}" />
    </li>
  `;
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
        </div>
        `;
}
document.querySelector("#cards").innerHTML =
  createCard("20/11/2022", "domingo", createGame("qatar", "13:00", "equador")) +
  createCard(
    "21/11/2022",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11/2022",
    "terça",
    createGame("argentina", "07:00", "saudi-arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("franca", "16:00", "australia")
  ) +
  createCard(
    "23/11/2022",
    "quarta",
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("spain", "13:00", "costa-rica") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11/2022",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11/2022",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "equador") +
      createGame("england", "16:00", "usa")
  ) +
  createCard(
    "26/11/2022",
    "sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("polonia", "10:00", "saudi-arabia") +
      createGame("franca", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11/2022",
    "domingo",
    createGame("japao", "07:00", "costa-rica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("spain", "16:00", "alemanha")
  ) +
  createCard(
    "28/11/2022",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south-korea", "10:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11/2022",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "usa") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11/2022",
    "quarta",
    createGame("tunisia", "12:00", "franca") +
      createGame("australia", "12:00", "denmark") +
      createGame("polonia", "16:00", "argentina") +
      createGame("saudi-arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12/2022",
    "quinta",
    createGame("croacia", "12:00", "belgica") +
      createGame("canada", "12:00", "marrocos") +
      createGame("japao", "16:00", "spain") +
      createGame("costa-rica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12/2022",
    "sexta",
    createGame("south-korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  );
