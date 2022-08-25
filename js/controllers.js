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
                      document.addEventListener("keydown", function(event) {
                              switch(event.key){
                                      case 'w':
                                      case 'ArrowUp':
                                           if(playerObject.yPosition <= TOP_BORDER)
                                                break;
                                           playerObject.updateYPosition(-playerObject.speed);
                                           break;
                                           
                                      case 's':
                                      case 'ArrowDown':
                                           
                                           if(playerObject.yPosition >= BOTTOM_BORDER)
                                                break;
                                           playerObject.updateYPosition(playerObject.speed);
                                           break;
                                           
                                }
                        });
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
                //         let fizzOutTimer = setInterval(() => {
                //
                //                 if(range++ < 10){
                //                         console.log(range)
                //                         console.log(projectileImg.style.left)
                //                         document.getElementById('projectile-position').innerText = `projectile-position: ${playerPosX}`
                //                         playerPosX += BULLET_SPEED * range;
                //                         projectileImg.style.paddingLeft = `${playerPosX}px`;
                //                 }else{
                //                         mapbox.removeChild(projectileImg);
                //                         clearInterval(fizzOutTimer);
                //                 }
                //         }, 18);
                //
                //   }
                // },
                //

