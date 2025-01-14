const fs = require('fs')
function login(user,pass){
    let data = fs.readFileSync('./data.txt','utf8',(err,data)=>{})
        let obj = JSON.parse(data)
        
        for(account of obj.data){
            if(account.user==user && account.pass==pass)
                return true;
        }
        return false;
        
}

function create(user,pass){
    fs.readFile('./data.txt','utf8',(err,data)=>{
        if(err){
            console.log(err)
            return;
        }
        let obj = JSON.parse(data)
        let newobj = {
            "user":user,
            "pass":pass
        }
        obj.data.push(newobj)
        let str = JSON.stringify(obj)
        fs.writeFile('data.txt',str,(err)=>{
            if(err)
                console.log(err)
            else
                console.log("File written successfully")
        })
    })
}
module.exports = {login,create}