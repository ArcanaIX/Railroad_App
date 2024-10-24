const url = "http://canihaztorrentz.cloud:8081";

const trainstation = {
    get : async (input, token) => {

        if (input != "") {
            const b = JSON.stringify({
                nameStation : input
            });
            
            
            const req = await fetch(url + "/api/v1/stations/sort", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer" + token,
                },
                body: b
            });
    
            const res = await req.json();
            
    
            for (let i = 0; i < res.length; i++) {
                const normalName = res[i].nameStation.toLowerCase();
                const normalInput = input.toLowerCase();
                
                if (normalName.includes(normalInput)) {
                    return res[i];
                }
                
            }
        }else {
            return {};
        }


        

    }
}

export default trainstation;