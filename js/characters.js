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
        this.xPosition = 5.0;
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

function Projectile(playerObject){
       
        this.speed = 20.0;
        this.xPosition = 5.0;
        this.yPosition = 300.0;
        this.projectileOffset = 5;
        /*Creating projectile object and displaying it by
        * appending it to the player object at its position
        * with the offset x position by projectile offset.*/
        this.projectileObject = $("<img alt=''/>'");
        this.projectileObject.attr('src', '../images/projectiles/energy-ball.png');
        this.projectileObject.css('position', 'absolute');
        this.projectileObject.css('top', `${playerObject.yPosition}px`);
        this.projectileObject.css('left',`${playerObject.xPosition + this.projectileOffset}px`);
        // $(playerObject).append(this.projectileObject);
}



