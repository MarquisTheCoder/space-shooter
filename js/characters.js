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
        
        map.players.push(Player);
        
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

function Projectile(playerObject, enemyObject){
       
        
        map.projectiles.push(Projectile);
        
        this.speed = 20.0;
        this.xPosition = playerObject.xPosition + 137.8;
        this.yPosition = playerObject.yPosition + 37.0;
        this.projectileOffset = 5;
        /*Creating projectile object and displaying it by
        * appending it to the player object at its position
        * with the offset x position by projectile offset.*/
        this.projectileObject = $("<img alt='projectile-object'/>'");
        this.projectileObject.attr('src', '../images/projectiles/energy-ball-red.png');
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

function Enemy(){
        
        map.enemies.push(Enemy);
        
        this.xPositionMax = 1200;
        this.xPositionMin = 800;
        
        this.yPositionMax = 600;
        this.yPositionMin = 100;
        
        this.xRangeOffset = this.xPositionMax - this.xPositionMin;
        this.yRangeOffset = this.yPositionMax - this.yPositionMin;
        
        this.startXPosition = Math.floor(Math.random() * this.xRangeOffset + 1) + this.xPositionMin;
        this.startYPosition = Math.floor(Math.random() * this.yRangeOffset + 1) + this.yPositionMin;
        
        this.enemyObject = $("<img alt='enemy-object'/>");
        this.enemyObject.attr('src','../images/gnome.png');
        
        this.enemyObject.css('position', 'absolute');
        this.enemyObject.css('top',`${this.startYPosition}px`);
        this.enemyObject.css('left',`${this.startXPosition}px`);
        this.enemyObject.css('height',`90px`);
        
        $('#map-box').append(this.enemyObject);
        
        this.updateXPosition = function (xIncrement){
                this.xPosition += xIncrement;
                this.enemyObject.css('left', `${this.xPosition}px`);
                return this.xPosition;
        }

        this.updateYPosition = function (yIncrement){
                this.yPosition += yIncrement;
                this.enemyObject.css('top', `${this.yPosition}px`);
                return this.yPosition;
        }
}




