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
       
        /*adds Player object to the map players object
        * array for global object tracking later*/
        
        this.speed = 12.2344;
        this.health = 100.0;
        
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
        this.type = 'projectile';
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
        this.projectileObject.attr('src', '../images/projectiles/energy-ball.png');
        this.projectileObject.attr('height', '40px');
        this.projectileObject.css('position', 'absolute');
        this.projectileObject.css('top', `${this.yPosition}px`);
        this.projectileObject.css('left',`${this.xPosition}px`);
        $('#map-box').append(this.projectileObject);
        
        
        this.updateXPosition = function (xIncrement){
                this.xPosition += xIncrement;
                this.projectileObject.css('left', `${this.xPosition}px`);
                return this.xPosition;
        }
        
        this.updateYPosition = function (yIncrement){
                this.yPosition += yIncrement;
                this.projectileObject.css('top', `${this.yPosition}px`);
                return this.yPosition;
        }
}

/*Enemy constructor*/
function Enemy(){
        
        /*pushing object to the map object to
        * be used for the object tracking system later*/
        objects.addObject(Enemy);
        this.type = 'enemy';
        this.xPositionMax = 1200;
        this.xPositionMin = 800;
        
        this.yPositionMax = 600;
        this.yPositionMin = 100;
        
        /* x coordinate spawn boundaries*/
        this.xRangeOffset = this.xPositionMax - this.xPositionMin;
        
        /* y coordinate spawn boundaries*/
        this.yRangeOffset = this.yPositionMax - this.yPositionMin;
        
        /* generating a random start position within xRangeOffset*/
        this.startXPosition = Math.floor(Math.random() * this.xRangeOffset + 1) + this.xPositionMin;
        
        /* generating a random start position within the yRangeOffset*/
        this.startYPosition = Math.floor(Math.random() * this.yRangeOffset + 1) + this.yPositionMin;
        
        /* creating an enemy image object with jquery*/
        this.enemyObject = $("<img alt='enemy-object'/>");
        this.enemyObject.attr('src','../images/gnome.png');
        
        /* sets the css positioning */
        this.enemyObject.css('position', 'absolute');
        this.enemyObject.css('top',`${this.startYPosition}px`);
        this.enemyObject.css('left',`${this.startXPosition}px`);
        this.enemyObject.css('height',`90px`);
       
        /* adds the enemy object to the screen*/
        $('#map-box').append(this.enemyObject);
        
        /* updates the enemy x position*/
        this.updateXPosition = function (xIncrement){
                this.xPosition += xIncrement;
                this.enemyObject.css('left', `${this.xPosition}px`);
                return this.xPosition;
        }
        
        /* updates the enemy y position*/
        this.updateYPosition = function (yIncrement){
                this.yPosition += yIncrement;
                this.enemyObject.css('top', `${this.yPosition}px`);
                return this.yPosition;
        }
}




