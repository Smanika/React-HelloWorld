import React from "react";
import './button.css';

function Myform() {
      return (
        <form>
          <label for="name">Your Name:</label><br/>
          <input type="input" id="name" name="name" placeholder="Smanika"/>
          <br/><br/>
          <label for="email">E-mail id:</label><br/>
          <input type="e-mail" id="email" name="email" placeholder="abc@gmail.com"/>
        </form>
      );
    }
export default Myform;