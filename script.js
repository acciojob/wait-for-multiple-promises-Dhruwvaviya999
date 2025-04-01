let loadingRow = document.querySelector("#loading");
let outputDiv = document.querySelector("#output");

let output = "";

function createPromise(name){
	let time = (Math.random() * 3) + 1;
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res({name: name, time: time});
		},time*1000);	
	});
};

async function createAndResolvePromises() {
    let promises = [createPromise("Promise 1"), createPromise("Promise 2"), createPromise("Promise 3")];
    let responses = await Promise.all(promises);

    let maxTime = Math.max(...responses.map(res => res.time));
    loadingRow.style.display = "none";

    let outputHTML = '';

    responses.forEach((res) => {
        outputHTML +=
        `
        <tr>
            <td>${res.name}</td>
            <td>${(res.time).toFixed(3)}</td>
        </tr>
        `;
    })

    outputHTML += 
    `
    <tr>
        <td>Total</td>
        <td>${maxTime.toFixed(3)}</td>
    </tr>
    `

    outputDiv.innerHTML = outputHTML;
}

createAndResolvePromises();




