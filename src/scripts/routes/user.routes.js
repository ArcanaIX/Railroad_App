

const user = {
    login : async (pseudo, password) => {
        console.log(pseudo, password);
        
        const req = await fetch("http://192.168.1.56:8081/api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "pseudo": pseudo,
                "password": password
            })
        });
    
        console.log(await req.json());
    
    }
}

export default user;