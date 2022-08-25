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
                          let energyBall = new Projectile(spaceShip);
                          projectile.mechanisms.projectileInterval(energyBall);
                     })
               }

       }
}
      
let projectile = {
     mechanisms:{
          projectileInterval:function(projectile){
               setInterval(function(){
               let xPosition = projectile.updateXPosition(projectile.speed);
               if(xPosition >= 700){
                    $('#map-box').remove(projectile);
                    clearInterval(projectile.mechanisms.projectileInterval);
               }
          }, 495.5 / projectile.speed);
          }
     }
}




                //
                //
                //   projectile: function(player){
                //           /*Creating image and taking it out of page flow with absolute*/
                //         let projectileImg = document.createElement('img');
                //
                //         let playerPosX = player.positionX;
                //         let playerPosY = player.positionY;
                //
                //         projectileImg.setAttribute('src', '../images/energy-ball.png');
                //         projectileImg.setAttribute('class','bullet');
                //         projectileImg.setAttribute('height', '40');
                //         projectileImg.setAttribute('width', '45');
                //         projectileImg.setAttribute('position', 'absolute');
                //         projectileImg.setAttribute('left', `${playerPosX}px`);
                //         projectileImg.setAttribute('top', `${playerPosY}px`);
                //
                //         /*Showing the projectile by making it a child of the map container*/
                //         let mapbox = document.getElementById('player');
                //         mapbox.appendChild(projectileImg);
                //
                //
                //         let range = 0;
                //
                //
                
                //
                //   }
                // },
                //

