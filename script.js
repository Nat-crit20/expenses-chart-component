const tbody = document.querySelector("tbody");

let date = new Date();
let weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let day = weekDays[date.getDay()];

const loadData = async function () {
  let result = await fetch("./data.json").then((response) => response.json());

  return result.forEach((element) => {
    let tr = document.createElement("tr");
    let color;

    if (element.day === day) {
      color = `hsl(186, 34%, 60%)`;
    } else {
      color = `hsl(10, 79%, 65%)`;
    }

    let input = ` 
   
    <td style="--size: calc(${element.amount} / 60); --color: ${color};"></td>
    <th scope="row"> ${element.day} </th>
    `;

    tr.innerHTML = input;
    tbody.appendChild(tr);
  });
};
loadData();
