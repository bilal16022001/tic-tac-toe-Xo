document.querySelector(".start").addEventListener("click", () => {
    document.querySelector(".login").style.display = "block";
});
document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    let player_1 = document.getElementById("player_1").value;
    let player_2 = document.getElementById("player_2").value;
    if (player_1 != null && player_2 != null) {
        document.querySelector(".one").innerHTML = player_1;
        document.querySelector(".two").innerHTML = player_2;
        document.querySelector(".login").style.display = "none";
        document.querySelector(".start").style.display = "none";
        document.querySelector(".xo2").classList.remove("activeOpa");
        document.querySelector(".xo2").style.zIndex = "99";
    }
}

// let arrXo = [
//     ["x", "o", "x"],
//     ["o", "x", "x"],
//     ["o", "x", "o"],
// ]



// let xoContent = document.querySelectorAll(".xo div");

let part1 = Array.from(document.querySelectorAll(".xo2 .part1 div"))
let part2 = Array.from(document.querySelectorAll(".xo2 .part2 div"))
let part3 = Array.from(document.querySelectorAll(".xo2 .part3 div"))
let collectArr = [part1, part2, part3]
let rndom = Math.floor(Math.random() * 2 + 1);
let c = -1;
let firstPlayer = "";
let SecondPlayer = "";
let FirstText = "";
let SecondText = "";

for (let i = 0; i < collectArr.length; i++) {
    for (let j = 0; j < collectArr[i].length; j++) {
        // collectArr[i][j].innerHTML = arrXo[j][i];
        let btn = collectArr[i][j];
        btn.classList.add("activeOpa")
        btn.addEventListener("click", (e) => {
            e.target.classList.remove("activeOpa");
            rndom++;
            c++;
            console.log("random ", rndom)
            if (rndom % 2 == 0) {
                e.target.innerHTML = "x";
                firstPlayer = document.querySelector(".one").innerHTML;
                FirstText = e.target.innerHTML;
            }

            else {
                e.target.innerHTML = "o";
                SecondPlayer = document.querySelector(".two").innerHTML;
                SecondText = e.target.innerHTML;
            }
            getElhtml()
        })
    }
}

// add style display none
let twoAr = [[], [], []];
let arrPag = [];

function getElhtml() {
    for (let i = 0; i < collectArr.length; i++) {
        for (let j = 0; j < collectArr[i].length; j++) {
            arrPag.push(collectArr[j][i])
        }
    }
    for (let i = 0; i < arrPag.length; i++) {

        if (i == 0 || i == 1 || i == 2) {
            twoAr[0].push(arrPag[i])
        }
        if (i == 3 || i == 4 || i == 5) {
            twoAr[1].push(arrPag[i])
        }
        if (i == 6 || i == 7 || i == 8) {
            twoAr[2].push(arrPag[i])
        }


    }

    compareAr();

}

function compareAr() {
    let winplayer = "";
    for (let d = 0; d < twoAr.length; d++) {
        for (let j = 0; j < twoAr[d].length; j++) {
            if (twoAr[d][j] != null) {

                if (twoAr[d][0].innerHTML == twoAr[d][1].innerHTML && twoAr[d][1].innerHTML == twoAr[d][2].innerHTML && !twoAr[d][j].classList.contains("activeOpa")) {

                    twoAr[d][j].classList.add("clr")

                    if (twoAr[d][0].textContent == FirstText) {
                        winplayer = firstPlayer;
                    } else {
                        winplayer = SecondPlayer;
                    }
                    winPlayer(winplayer)

                }

            }


            if (twoAr[0][0] != null && twoAr[1][0] != null && twoAr[2][0] != null) {
                if (twoAr[0][j].innerHTML == twoAr[1][j].innerHTML && twoAr[1][j].innerHTML == twoAr[2][j].innerHTML
                    && !twoAr[0][j].classList.contains("activeOpa") && !twoAr[1][j].classList.contains("activeOpa") && !twoAr[2][j].classList.contains("activeOpa")) {
                    twoAr[0][j].classList.add("clr")
                    twoAr[1][j].classList.add("clr")
                    twoAr[2][j].classList.add("clr")
                    if (twoAr[0][j].textContent == FirstText) {
                        winplayer = firstPlayer;
                    } else {
                        winplayer = SecondPlayer;
                    }
                    winPlayer(winplayer)

                }
            }
            if (twoAr[0][0].innerHTML == twoAr[1][1].innerHTML && twoAr[1][1].innerHTML == twoAr[2][2].innerHTML && !twoAr[0][0].classList.contains("activeOpa") && !twoAr[1][1].classList.contains("activeOpa") && !twoAr[2][2].classList.contains("activeOpa")) {
                twoAr[0][0].classList.add("clr")
                twoAr[1][1].classList.add("clr")
                twoAr[2][2].classList.add("clr")
                if (twoAr[0][0].textContent == FirstText) {
                    winplayer = firstPlayer;
                } else {
                    winplayer = SecondPlayer;
                }
                winPlayer(winplayer)

            }

            if (twoAr[0][2].innerHTML == twoAr[1][1].innerHTML && twoAr[1][1].innerHTML == twoAr[2][0].innerHTML && !twoAr[0][2].classList.contains("activeOpa") && !twoAr[1][1].classList.contains("activeOpa") && !twoAr[2][0].classList.contains("activeOpa")) {
                twoAr[0][2].classList.add("clr")
                twoAr[1][1].classList.add("clr")
                twoAr[2][0].classList.add("clr")
                if (twoAr[0][2].textContent == FirstText) {
                    winplayer = firstPlayer;
                } else {
                    winplayer = SecondPlayer;
                }
                winPlayer(winplayer)

            }
        }
    }
}

function winPlayer(winplayer) {
    document.querySelector(".modal").classList.add("sh");
    document.querySelector(".congrats").classList.remove("activeOpa");
    document.querySelector(".xo2").style.zIndex = "-99";
    document.querySelector(".winPlayer").innerHTML = winplayer;
}