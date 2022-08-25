"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/22/22,
 Time Created: 10:56 AM,
 File Name: characters.js,
 File Description:
 */

/*player data model for the controller.js
* player controller object to update and manipulate*/


function Player(playerObject){
        this.speed = 12.2344;
        this.health = 100.0;
        this.xPosition = 0.0;
        this.yPosition = 300.0;
        this.playerObject = playerObject;
       
        
        this.playerObject.css('position', 'absolute');
        this.playerObject.css('top', `${this.yPosition}px`);
        this.playerObject.css('left', `${this.xPosition}px`);
        
        this.showXPosition = function (){
                return this.xPosition;
        }
        this.showYPosition = function (){
                return this.yPosition;
        }
        this.updateXPosition = function (xIncrement){
                 this.xPosition += xIncrement;
                 this.playerObject.css('left', `${this.xPosition}px`);
                 return this.xPosition;
        }
        this.updateYPosition = function (yIncrement){
                this.yPosition += yIncrement;
                this.playerObject.css('top', `${this.yPosition}px`);
                return this.yPosition;
        }
        
}


// function Enemy(speed) {
//         this.xPosition;
//         this.yPosition;
//         // this.setXPosition()
//
// }

