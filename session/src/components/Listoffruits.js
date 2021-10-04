import React from 'react';   
function Listoffruits(){
    const names = ['Apple','Banana','Chiku','Dates','Emblica','Foxgrape']
    return(
        <div>
            <p><h1>This is a list of Fruits</h1></p>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}
export default Listoffruits;