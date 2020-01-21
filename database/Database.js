const fs = require('fs').promises;
class Database {
    constructor(path){
        this.path = path;
    }
    add(item){
        return new Promise((reslove,reject) => {
            this.list()
            .then(data => {
                let newList = JSON.parse(data);
                console.log(newList)
                newList.push(item);
                console.log(newList)
                fs.writeFile(this.path , JSON.stringify(newList));
                reslove({status : 0});
            })
            .catch(err => reject({status : '1' , msg : err.message}))
        });
    }
    delete(id){

    }
    find(id){
        return new Promise((resolve,reject) => {
            this.list()
            .then(data => {
                data = JSON.parse(data);
                let searchResult = data.filter(item => item.id == id)[0];
                searchResult ?  resolve(searchResult) :  reject({status : '1' , msg : err.message}); 
            })
            .catch(err => reject({status : '1' , msg : "No record found"}))
        });
    }
    async list(){
        return fs.readFile(this.path , {'encoding' : 'utf8'});
    }
    edit(item){

    }
}
let db = new Database('database.json');
// db.add({"id" : 2 , "useId" : 1 , "unit" : "F" , "Time" : "2020-01-20-17-59"})
// .then(data => console.log('Successful'))
// .catch(err => console.log(err.msg))
// //{"id" : 1 , "useId" : 1 , "unit" : "C" , "Time" : "2020-01-20-18-59"}
db.find(2)
.then(data => console.log(data))
.catch(err => console.log(err.msg))