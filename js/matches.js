const token = "31bc79c812814555898fe45d7cdb95d3";
let baseUrl = "https://api.football-data.org/v4";

function getMatches() {
  const url = `${baseUrl}/competitions/2000/matches`;
  axios
    .get(url, {
      headers: {
        "X-Auth-Token": `${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      const matches = response.data.matches;
      document.getElementById("matches").innerHTML = "";
      for (match of matches) {
        const hometeam = match.homeTeam;
        const awayteam = match.awayTeam;
        const utc = match.utcDate;
        const matchDate = new Date(utc);
        const dateString = `
        ${matchDate.getUTCFullYear()} \\ ${
          matchDate.getUTCMonth() + 1
        } \\ ${matchDate.getUTCDate()}
        `;
        utcH = ` ${matchDate.getUTCHours()} : ${matchDate.getUTCMinutes()}`;
        if (hometeam.name == null) {
          break;
        }
        const content = `
          <div class="col-sm-12 mt-5">
                <div class="card shadow rounded-pill overflow-hidden ml">
                    <div class="car-body p-0">
                        <div class="row">
                            <!--?first team column-->
                            <div class="col-sm-3 bg-primary d-flex justify-content-center flex-column align-items-center"
                                style="border-right:5px solid #5b0d25;">
                                <div class="flag mt-2">
                                    <img class="rounded-circle flag" style="height: 40px;width: 40px; object-fit: cover;"
                                        src="${hometeam.crest}" alt="HomeTeam">
                                </div>
                                <h5>${hometeam.tla}</h5>
                            </div>
                            <!--?END First team column-->
                            <!--?Start Match info-->
                            <div class="col-sm-6 d-flex ">
                                <div class="col-sm-4  d-flex justify-content-center align-items-center">
                                <h2>
                                    <b>${match.score.fullTime.home ?? "-"}</b>
                                </h2>
                                </div>
                                <div class="col-sm-4" style="text-align: center;">
                                    <h6>${match.group}</h6>
                                    <h1>X</h1>
                                    <h6>${dateString}</h6>
                                    <h6>${utcH}</h6>
                                </div>
                                <div class="col-sm-4  d-flex justify-content-center align-items-center">
                                <h2>
                                    <b>${match.score.fullTime.away ?? "-"}</b>
                                </h2>
                                </div>

                            </div>
                            <!--?END Match info-->
                            <!--?first team column-->
                            <div class="col-sm-3 bg-primary d-flex justify-content-center flex-column align-items-center"
                                style="border-left:5px solid #5b0d25;">
                                <div class="flag mt-2">
                                    <img class="rounded-circle flag" style="height: 40px;width: 40px; object-fit: cover;" 
                                        src="${awayteam.crest}" alt="AwaTeam">
                                </div>
                                <h5>${awayteam.tla}</h5>
                            </div>
                            <!--?END First team column-->
                        </div>
                    </div>
                </div>

            </div>
          `;

        document.getElementById("matches").innerHTML += content;
      }
    });
}
getMatches();
