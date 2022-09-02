const tbody = document.querySelector("tbody");

let date = new Date();

let day = date.getDay();
const loadData = async function () {
  let result = await fetch("./data.json").then((response) => response.json());

  return result.forEach((element, i) => {
    let tr = document.createElement("tr");
    //let td = document.createElement('td')
    if (i === day) {
      console.log(element.amount, element.day);
    }
    tr.innerHTML = `<td style="--size: calc(${element.amount} / 50)">${element.amount}</td>`;
    tbody.appendChild(tr);
  });
};
loadData();
