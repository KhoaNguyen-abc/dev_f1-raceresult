function changeOptionsYear():any{
    var arr:number[] = []; 
    for(var i=2023; i > 1949; i--){
        arr.push(i)
    }
    return arr;
}

function changeOptionsCategories():any{
    var arr:string[] = ["DRIVERS", "TEAMS", "DHL FASTEST LAP AWARD"];
    return arr;
}

function changeOptionsAll():any{
    var arr:string[] = ["BAHRAIN", "SAUDI ARABIA", "AUSTRALIA", "AZERBAIJAN", "MIAMI", "EMILIA ROMAGMA", "MONACO", "SPAIN",
    "CANADA", "AUSTRIA", "GREAT BRITAIN", "HUNGARY", "BELGIUM", "NEITHERLANDS", "ITALY", "SINGAPORE", "JAPAN", "QATAR", "UNITED STATES",
    "MEXICO", "BRAZIL", "LAS VEGAS", "ABU DHABI"];
    return arr;
}

function changeDanta(year: string):any{
    var arr:string[] = [];
    var arr1:string[] = [];
    fetch(`http://ergast.com/api/f1/${year}/results.json`)
    .then(res=>{
        res.json().then(data =>{
                arr.push(data)   
                arr1=JSON.parse(JSON.stringify(arr[0].MRData.RaceTable.Races[0].Results))
                console.log(arr1)
                for(var i=0; i < arr1.length; i++){
                    document.getElementById('bodyContent').innerHTML +=
                `
                    <tr>
                        <td>${arr1[i].Constructor.nationality}</td>
                        <td>${arr1[i].Driver.dateOfBirth}</td>
                        <td>${arr1[i].Driver.givenName + '' + arr1[i].Driver.familyName}</td>
                        <td>${arr1[i].Constructor.name}</td>
                        <td>${arr1[i].FastestLap.lap}</td>
                        <td>${arr1[i].FastestLap.Time.time}</td>
                    </tr>
                    
                `
                }
                
            }
        )
    })
    .catch(err=>{
        console.log('error: -s', err)
    })
    return arr1
}

export {changeOptionsYear, changeOptionsCategories, changeOptionsAll, changeDanta}