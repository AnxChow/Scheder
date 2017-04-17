import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      // 	<div className="App-header">
      //     Schedule Maker!
      //   </div>
      // 	<form id="survey" method="get">
      // 		<div>
      // 			<p> How much time do you have to work today?</p> <input type="text" name="total"> hours</input><br></br>
      // 			<p> Do you want to take breaks?</p><br></br>
      // 				<input type="radio" name="bre" id="yes">Yes</input>
      // 				<input type="radio" name="bre" id="no">No</input>
      // 			<p>If so, how long?</p>
      // 				<input type="text" name="breaks"> minutes</input><br></br>
      // 		</div> <br></br>
      // 			<table id="activities">
      // 				<tr>
      // 					<th>Things to do: </th>
      // 				</tr>
      // 				<tr>
      // 				<td>
      // 					<label>Thing to do: </label><br/><input type="text" name="act1" class='activity'></input>
      // 				</td>
      //                 <td>
      //                 	<label>Time (minutes): </label><br/><input type="text" name="time1" class='time'></input>
      //                 </td>
      //             	</tr>
      //             </table>
      //             <input type="submit" onClick="makeSched(this.form)"/>
      //             <button type="button"id="add_activity">Add Activity</button>
      // 	</form>
      // </div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
      
      </div>
    );
  }
}

export default App;
