let loadingRow = document.querySelector("#loading");

function createPromise(name){
	let time = (Math.random() * 3) + 1;
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res({name: name, time: time});
		},time*1000);	
	});
};

Promise.all([createPromise("Promise 1"), createPromise("Promise 2"), createPromise("Promise 3")]).then((responses)=>{
	loadingRow.style.display = "none";
	let totalTime = 0;
	responses.map((res) => {
		totalTime += res.time;
		document.querySelector("#output").innerHTML +=
		`
		<tr>
			<td>${res.name}</td>
			<td>${(res.time).toFixed(3)}</td>
		</tr>
		`;
	})

	document.querySelector("#output").innerHTML += 
		`
		<tr>
			<td>Total</td>
			<td>${totalTime.toFixed(3)}</td>
		</tr>
		`
});




