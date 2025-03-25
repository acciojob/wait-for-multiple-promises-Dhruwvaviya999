//your JS code here. If required.

function promise1 (){
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res({name: "Promise 1", time: 2})
		},2000);
	});
}

function promise2 (){
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res({name: "Promise 2", time: 2})
		},2000);
	});	
}

function promise3 (){
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res({name: "Promise 3", time: 3})
		},3000);
	});	
}

Promise.all([promise1(), promise2(), promise3()]).then((values)=>{
	let tBody = document.querySelector("#output");
	values.forEach((value)=>{
		tBody.innerHTML += 
		`
		<tr>
			<td>${value.name}</td>
			<td>${value.time}</td>
		</tr>
		`
	})
})


