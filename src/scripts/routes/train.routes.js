const url = "http://canihaztorrentz.cloud:8081";

const train = {

    get : async (start, end, departure) => {
        const req = await fetch(url + "/api/v1/trains/sort", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sorter: {
                    "stationStart": start,
                    "stationEnd" : end
                }
            })
        });

        const d = new Date();
        console.log("TEST : " + d);
                

        const res = await req.json();

        let valid = []

        res.forEach(train => {
            const date = train.departure.split(":");
            date.pop()
            const depart = departure.split(":");
            
            const hourTrain = date[0];
            const minuteTrain = date[1];

            const hourInput = depart[0];
            const minuteInput = depart[1];

            if (hourTrain >= hourInput && minuteTrain >= minuteInput) {
                valid.push(train)
            }


        });
        console.log(valid);
        
        return valid
        
    }

}

export default train