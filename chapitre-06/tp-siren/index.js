let siren = "732829320";

let result = 0;

if(siren.length == 9) {
    for(let i = 0; i < siren.length; i++ ) {
        
        if(i % 2 != 0) {
            let newNum = parseInt( siren.charAt(i) ) * 2;

            for (let i2 = 0 ; i2 < newNum.toString().length; i2++) {
                result = result + parseInt(newNum.toString().charAt(i2));
            }
            
        } else {
            result = result + parseInt( siren.charAt(i) )  ;
        }
        
    }

    if (result % 10 == 0) {
        console.log("Le siren est correct");
    } else {
        console.log("Le siren est incorrect");
    }
} else {
    console.log("le numéro de siren est trop grand ou trop petit");
}
