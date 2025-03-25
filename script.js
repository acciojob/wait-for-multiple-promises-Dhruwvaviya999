 function createPromise(id) {
            let time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
            return new Promise(resolve => {
                setTimeout(() => resolve({ id, time: time.toFixed(3) }), time * 1000);
            });
        }

        const promises = [createPromise(1), createPromise(2), createPromise(3)];

        const startTime = performance.now();
        Promise.all(promises).then(results => {
            const output = document.getElementById("output");
            output.innerHTML = ""; // Remove loading row

            results.forEach(result => {
                let row = document.createElement("tr");
                row.innerHTML = `<td>Promise ${result.id}</td><td>${result.time}</td>`;
                output.appendChild(row);
            });

            const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
            let totalRow = document.createElement("tr");
            totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
            output.appendChild(totalRow);
        });