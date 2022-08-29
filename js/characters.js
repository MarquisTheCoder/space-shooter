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
        this.speed = 17.2344;
        this.health = 100;
        
        this.xPosition = 44.0;
        this.yPosition = 300.0;
       
        /*takes given element playerObject and turns it into
        * a Player object*/
        this.playerObject = playerObject;
        
        /*sets css positioning for the player object*/
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

/*projectile object constructor*/
function Projectile(playerObject, enemyObject){
       
        /*pushes projectile object to the map
        * object array for global object tracking later*/
        Map.projectileObjects.push(this)
        /*projectile speed variable*/
        this.speed = 20.0;
        
        /*projectile Y and X offset
        * to put projectile in the middle
        * and to the right of the player
        * object*/
        this.projectileYOffset = 37.0;
        this.projectileXOffset = 137.8;
        this.xPosition = playerObject.xPosition + this.projectileXOffset;
        this.yPosition = playerObject.yPosition + this.projectileYOffset;
        
        /*Creating projectile object and displaying it by
        * appending it to the player object at its position
        * with the offset x position by projectile offset.*/
        this.projectileObject = $("<img alt='projectile-object'/>'");
        this.projectileObject.attr('src', '../images/blaster-bullet.png');
        this.projectileObject.attr('height', '120px');
        this.projectileObject.css('position', 'absolute');
        this.projectileObject.css('top', `${this.yPosition}px`);
        this.projectileObject.css('left',`${this.xPosition}px`);
        
        $('#map-box').append(this.projectileObject);
        
        
        this.updateXPosition = function (){
                this.xPosition += this.speed;
                this.projectileObject.css('left', `${this.xPosition}px`);
                return this.xPosition;
        }
        
        this.updateYPosition = function (){
                this.yPosition += this.speed;
                this.projectileObject.css('top', `${this.yPosition}px`);
                return this.yPosition;
        }
}

/*Enemy constructor*/
function Enemy(){
        
        /*pushing object to the map object to
        * be used for the object tracking system later*/
        Map.enemyObjects.push(this);
        this.range = 0;
        this.speed = Math.random() * 15  + 7;
        this.xPositionMax = 1800;
        this.xPositionMin = 1500;
        
        this.yPositionMax = spaceShip.yPosition + Math.random() * 200 + 20;
        this.yPositionMin = spaceShip.yPosition - Math.random() * 200 + 20;
        
        /* x coordinate spawn boundaries*/
        this.xRangeOffset = this.xPositionMax - this.xPositionMin;
        
        /* y coordinate spawn boundaries*/
        this.yRangeOffset = this.yPositionMax - this.yPositionMin;
        
        /* generating a random start position within xRangeOffset*/
        this.xPosition = Math.floor(Math.random() * this.xRangeOffset + 1) + this.xPositionMin;
        
        /* generating a random start position within the yRangeOffset*/
        this.yPosition = Math.floor(Math.random() * this.yRangeOffset + 1) + this.yPositionMin;
        
        /* creating an enemy image object with jquery*/
        this.enemyObject = $("<img alt='enemy-object'/>");
        this.enemyObject.attr('src','../images/enemy-d.webp');
        
        /* sets the css positioning */
        this.enemyObject.css('position', 'absolute');
        this.enemyObject.css('top',`${this.yPosition}px`);
        this.enemyObject.css('left',`${this.xPosition}px`);
        this.enemyObject.css('height',`90px`);
       
        /* adds the enemy object to the screen*/
        $('#map-box').append(this.enemyObject);
        
        /* updates the enemy x position*/
        this.updateXPosition = function (){
                this.xPosition -= this.speed;
                this.enemyObject.css('left', `${this.xPosition}px`);
                return this.xPosition;
        }
      
}




