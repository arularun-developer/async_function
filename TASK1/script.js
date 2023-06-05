let vehicle = document.getElementById('vehicle');
async function vehicles(){
    try{
         let urldata =await fetch( 'https://parallelum.com.br/fipe/api/v1/carros/marcas');
        let result = await urldata.json()
         console.log(result);
         result.forEach((ele)=> { 
            let data =document.createElement('div');
            data.innerText=`Name:${ele.nome}
            Code:${ele.codigo}`
            vehicle.appendChild(data)
            // let code_data =document.createElement('div')
            // code_data.innerText=`Code:${ele.codigo}`
            // vehicle.appendChild(code_data)
         })

        }
        catch{
            console.log(err)
        }
    }
    
vehicles()