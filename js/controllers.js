"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/22/22,
 Time Created: 10:55 AM,
 File Name: controllers.js,
 File Description:
 */
const TOP_BORDER = 80;
const BOTTOM_BORDER = 700;
const LEFT_BORDER = 10;
const RIGHT_BORDER = 450;
/*object for all controllers relating to the player*/
let player = {
       
       controller: {
            
               /*keyboard controller for player movement*/
               movement: function(playerObject) {
                    document.addEventListener("keydown", function (event) {
                         switch (event.key) {
                              case 'w':
                              case 'ArrowUp':
                                   if (playerObject.yPosition <= TOP_BORDER)
                                        break;
                                   playerObject.updateYPosition(-playerObject.speed);
                                   break;
               
                              case 's':
                              case 'ArrowDown':
                    
                                   if (playerObject.yPosition >= BOTTOM_BORDER)
                                        break;
                                   playerObject.updateYPosition(playerObject.speed);
                                   break;
                              case 'a':
                              case 'ArrowLeft':
                                   if(playerObject.xPosition <= LEFT_BORDER)
                                        break;
                                   playerObject.updateXPosition(-playerObject.speed);
                                   break;
                              case 'd':
                              case 'ArrowRight':
                                   if(playerObject.xPosition >= RIGHT_BORDER)
                                        break;
                                   playerObject.updateXPosition(playerObject.speed);
                                   break;
                         }
                    });
               },
               attack: function(){
                     $(document).mousedown(function(){
                          console.log(Map.projectileObjects.length)
                          let energyBallSound = new Audio('../sounds/laser-gun.mp3');
                          let promiseResult = energyBallSound.play();
                          let energyBall = new Projectile(spaceShip);
                          projectile.mechanisms.projectileInterval(energyBall);
                     })
               }

       }
}

let projectile = {
     mechanisms:{
          projectileInterval:function(projectile){
               this.interval = setInterval(function(){
               let xPosition = projectile.updateXPosition();
               if(xPosition >= 1450){
                    Map.projectileObjects.splice(projectile, 1)
                    $(projectile.projectileObject).remove();
                    delete  projectile.constructor;
               }
          }, 650 / projectile.speed);
          }
     }
}

let enemies = {
     moveForward: function (){
          
          let movementIntervals = setInterval(function(){
               
               Map.enemyObjects.forEach(enemy => {
                    enemy.updateXPosition();
                    enemy.range += 1;
                    if(enemy.range >= 2000){
                         clearInterval()
                    }
               })
          }, 20);
     }
}