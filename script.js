let form = document.querySelector("form");
let input = document.querySelector("input");
let addbtn = document.querySelector("#btn");
let container = document.querySelector(".container");
let clearbtn = document.querySelector("#clearbtn");
let msg = document.querySelector(".task-count span");

let arr = [];
let checkedit = null;
let total = 0;


function creatediv(id, inputval) {

    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.innerText = inputval;

    let editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerHTML = `<i class="fa-solid fa-pen"></i> Edit`;

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete");
    deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`;

    div.append(h1);
    div.append(editbtn);
    div.append(deletebtn);
    container.append(div);

    h1.addEventListener("click", () => {

        h1.classList.toggle("line");

    });


    deletebtn.addEventListener("click", () => {

        container.removeChild(div);

        arr = arr.filter((element) => {
            return element.id !== id;
        });

        total = total - 1;

        msg.textContent = total;

    });


    editbtn.addEventListener("click", () => {

        input.value = inputval;

        addbtn.innerHTML = `<i class="fa-solid fa-check"></i> UPDATE`;

        arr.forEach((element) => {

            if (element.id === id) {

                element.h1 = h1;

                checkedit = element;

            }

        });

    });

}


form.addEventListener("submit", (eve) => {

    eve.preventDefault();


    
    if (checkedit === null) {

        let inputval = input.value.trim();

        if (inputval !== "") {

            let id = Date.now();

            let detail = {
                id: id,
                inputval: inputval
            };

            arr.push(detail);

            creatediv(id, inputval);

            input.value = "";

            total = total + 1;

            msg.textContent = total;

        }

    }

    else {

        let inputval = input.value.trim();

        if (inputval !== "") {

            checkedit.inputval = inputval;

            checkedit.h1.textContent = inputval;

            addbtn.innerHTML = `<i class="fa-solid fa-plus"></i> ADD`;

            checkedit = null;

            input.value = "";

        }

    }

});


clearbtn.addEventListener("click", () => {

    container.textContent = "";

    arr = [];

    total = 0;

    msg.textContent = total;

    input.value = "";

    addbtn.innerHTML = `<i class="fa-solid fa-plus"></i> ADD`;

    checkedit = null;

});
