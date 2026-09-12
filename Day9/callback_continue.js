const dataobj = [
    {
        name : "Rambhau", age:21
    },
    {
        name : "Gana", age:14
    }
] 

function getData(){
    setTimeout(() =>{ 
    let output = "";
    dataobj.forEach((data, index) => {
        output+=`${data.name}`
    })
    console.log(output);
}, 1000);
}

function createData(newData, callback){
    setTimeout(() => {
        dataobj.push(newData);
        callback();
    }, 3000);
}

createData({name:"Balasaheb", age:19}, getData);
//getData();