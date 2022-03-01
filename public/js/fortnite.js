const req = require("express/lib/response");

let submitBtn = document.getElementById('submit');
let gamertagInput = document.getElementById('gamertag');
let platformInput = document.getElementById('platform');
let result = document.querySelector('.result');

const fetchPlayers = async (gamertag, platform) => {
  const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/${platform}/${gamertag}`, {
    headers: {
      'TRN-Api-Key': '14df28ad- d605 - 40b7- 87f8 - 5596a4cb0140'
    }
  });
  const data = await api_call.json();
  return { data }
};

const showData = () => {
  fetchPlayers(gamertagInput.value, platformInput.value).then((res) => {
    const markup =
      <div class="stats text-center">
        <h1>${res.data.epicUserHandle} (${res.data.platformNameLong})</h1>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="stat">
              <h5>${res.data.lifeTimeStats[8].value}</h5>
              <h6>Wins</h6>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="stat">
              <h5>${res.data.lifeTimeStats[10].value}</h5>
              <h6>Kills</h6>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="stat">
              <h5>${res.data.lifeTimeStats[7].value}</h5>
              <h6>Matches played</h6>
            </div>
          </div>
        </div>
      </div>
      ;
    result.insertAdjacentHTML('beforeend', markup);
  })
    .catch(err => console.log(err));
};
const clearField = () => {
  gamertagInput.value = '';
  platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
  result.innerHTML = '';
}
submitBtn.addEventListener('click', function () {
  showData();
  clearField();
  clearPlayer();
});