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
                         }
                    });
               },
               attack: function(){
                     $(document).mousedown(function(){
                          let energyBallSound = new Audio('../sounds/laser-gun.mp3');
                          energyBallSound.play();
                          let energyBall = new Projectile(spaceShip);
                          projectile.mechanisms.projectileInterval(energyBall);
                     })
               }

       }
}
      
let projectile = {
     mechanisms:{
          projectileInterval:function(projectile){
               let projectileInterval = setInterval(function(){
               let xPosition = projectile.updateXPosition(projectile.speed);
               if(xPosition >= 1450){
                    $(projectile.projectileObject).remove();
               }
          }, 650 / projectile.speed);
          }
     }
}
