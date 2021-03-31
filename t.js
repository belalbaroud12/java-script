var y = document.getElementById("container")
var p = document.getElementById("b1")
var f = document.getElementById("b3")
var e = document.getElementById("b2");
var o = document.getElementById("b4");

var x = ["Rock", "Paper", "Scissors"];

function choiceUser(arr) {
   
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Rock") {
            var t1 = document.createElement("button");

            t1.textContent = arr[i]
            y.appendChild(t1)
            t1.setAttribute("id", "belal")
            t1.onclick = function() {
                p.innerHTML = "Rock"
                e.innerHTML = choiceComputer(x)



            }



        } else if (arr[i] == "Paper") {
            var t2 = document.createElement("button");

            t2.textContent = "Paper"
            y.appendChild(t2)
            t2.setAttribute("id", "belal1")
            t2.onclick = function() {
                p.innerHTML = "Paper";
                e.innerHTML = choiceComputer(x)



            }




        } else if (arr[i] == "Scissors") {
            var t3 = document.createElement("button");

            t3.textContent = arr[i]
            y.appendChild(t3)
            t3.setAttribute("id", "belal2")
            t3.onclick = function() {
                p.innerHTML = "Scissors";
                e.innerHTML = choiceComputer(x)




            }


        }

    }

    return console.log();
}





function choiceComputer(array) {

    var randomElement = array[Math.floor(Math.random() * array.length)];


    return randomElement;

}



o.onclick = () => {
    window.location.reload()
}