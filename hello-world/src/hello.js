import React from "react";

const Hello = () => {
   {// using jsk}
     {/*return(
        <div>
            <h1>Hello Ritu</h1>
        </div>
     )*/}

return React.createElement('div', null , React.createElement('h1',null,'Hello Ritu'))

}
}

export default Hello;