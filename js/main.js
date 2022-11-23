const token = "31bc79c812814555898fe45d7cdb95d3";
let baseUrl = "https://api.football-data.org/v4";

function getStandings() {
  const url = `${baseUrl}/competitions/2000/standings`;
  axios
    .get(url, {
      headers: {
        "X-Auth-Token": `${token}`,
      },
    })
    .then((response) => {
      const standings = response.data.standings;
      document.getElementById("standings").innerHTML = "";
      for (standing of standings) {
        let tableContent = "";
        for (row of standing.table) {
          tableContent += `
          <li>
              <div class="row m-0 border-none">
                  <div class="col-sm-4 d-flex justify-content-center align-items-center team">
                      <span>
                          <img class="rounded-circle flag" src=${row.team.crest} alt="">
                      </span>
                      <h5>${row.team.tla}</h5>
                  </div>
                  <div class="col-sm-2 team">
                      ${row.won}
                  </div>
                  <div class="col-sm-2 team">
                      ${row.lost}
                  </div>
                  <div class="col-sm-2 team">
                      ${row.draw}
                  </div>
                  <div class="col-sm-2 team">
                      <b> ${row.points}</b>
                  </div>
              </div>
          </li>
          `;
        }
        const content = `
        <div class="col-sm-6 mb-5">
                <div class="card shadow border-none box">
                    <div class="bg-primary">
                        ${standing.group}
                    </div>
                    <div class="row m-0 bg-secondary">
                        <div class="col-sm-4 team">
                            team
                        </div>
                        <div class="col-sm-2 team">
                            W
                        </div>
                        <div class="col-sm-2 team">
                            L
                        </div>
                        <div class="col-sm-2 team">
                            D
                        </div>
                        <div class="col-sm-2 team">
                            Pts
                        </div>
                    </div>
                    <!--Teams -->
                    <ul class="list-group list-group-flush">
                        ${tableContent}
                    </ul>
                    <!--END Teams -->
                </div>
                <!--Standigs columns-->
            </div>
        `;
        document.getElementById("standings").innerHTML += content;
      }
    });
}
getStandings();
