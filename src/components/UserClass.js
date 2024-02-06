import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
   
    this.state={
      count:0,
    }
   
  }
  componentDidMount(){
    console.log("rendered")
  }
  render(){

    const{count} = this.state;
    return(
      <div className="user-card">
        <h1>count:{count}</h1>
        <button onClick={() =>{
          //Never update state variables directly
          this.setState = ({
            count: this.state.count + 1,
            // count: count + 1,
          });
        }}>Count Increase</button>
      <h1>Name:Haritha</h1>
      <h2>location:Kanchipuram</h2>
      </div>
    )
   

  }
}
export default UserClass;