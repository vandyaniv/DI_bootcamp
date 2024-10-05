import React from 'react';


class ExempleClass extends React.Component {
constructor() {
   super()

const getUser = async () => {
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      console.log(data)
   }catch (error){
      console.log(error); 
   }
}
   render (){
      return( 
         <>
         <h2>{this.props.num}</h2>
         </>
      )
   }
}

}