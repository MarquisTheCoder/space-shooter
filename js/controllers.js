"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/22/22,
 Time Created: 10:55 AM,
 File Name: controllers.js,
 File Description:
 */

const UP = 'w' ;
const DOWN = 's';
const LEFT = 'a';
const RIGHT = 'd';

const SPEED = 30.45;
const BULLET_SPEED = 15;
const JUMP_SPEED = 50;
let controller = {

        player : {
                attack:{

                  projectile: function(player){
                          /*Creating image and taking it out of page flow with absolute*/
                        let projectileImg = document.createElement('img');

                        let playerPosX = player.positionX;
                        let playerPosY = player.positionY;

                        projectileImg.setAttribute('src', '../images/energy-ball.png');
                        projectileImg.setAttribute('class','bullet');
                        projectileImg.setAttribute('height', '40');
                        projectileImg.setAttribute('width', '45');
                        projectileImg.setAttribute('position', 'absolute');
                        projectileImg.setAttribute('left', `${playerPosX}px`);
                        projectileImg.setAttribute('top', `${playerPosY}px`);

                        /*Showing the projectile by making it a child of the map container*/
                        let mapbox = document.getElementById('player');
                        mapbox.appendChild(projectileImg);


                        let range = 0;


                        let fizzOutTimer = setInterval(() => {

                                if(range++ < 10){
                                        console.log(range)
                                        console.log(projectileImg.style.left)
                                        playerPosX += BULLET_SPEED * range;
                                        projectileImg.style.paddingLeft = `${playerPosX}px`;
                                }else{
                                        mapbox.removeChild(projectileImg);
                                        clearInterval(fizzOutTimer);
                                }
                        }, 18);

                  }
                },
                setPosition: function(player, x, y){
                        player.positionX += x;
                        player.positionY += y;
                        player.playerId.style.position = 'absolute';

                        player.playerId.style.left =
                                        player.positionX + 'px';

                        player.playerId.style.top =
                                player.positionY + 'px';
                },
                playerMovement: function (playerObj){
                        document.addEventListener("keydown", function(event) {
                                switch(event.key){
                                        case UP:
                                        case 'ArrowUp':
                                                if(playerObj.positionY <= 40){
                                                        break;
                                                }
                                                controller.player.setPosition(playerObj, 0, -SPEED);
                                                break;
                                        case DOWN:
                                        case 'ArrowDown':

                                                if(playerObj.positionY >= 750){
                                                        break;
                                                }
                                                controller.player.setPosition(playerObj, 0, SPEED);
                                                break;
                                }
                        });
                }
        },


        enemy:{
                createEnemy: function(){
                        let enemy = document.createElement('img');
                        enemy.setAttribute('src', 'https://static.wikia.nocookie.net/gears_esports_gamepedia_en/image' +
                                's/7/71/Enemylogo_square.png');
                        enemy.setAttribute('height','40');
                        enemy.setAttribute('width', '45');
                        enemy.setAttribute('position', 'absolute');
                        enemy.setAttribute('left', `${Math.random()*101+500}`);
                        document.getElementById('map-box').appendChild(enemy);
                        character.enemy.enemyId = enemy;
                },
                setEnemyPosition: function (enemy, x, y){
                        enemy.positionX += Math.random() * 1000;
                        enemy.positionY += y;
                        enemy.enemyId.style.position = 'absolute';
                        enemy.enemyId.style.left = x + 'px';

                        enemy.enemyId.style.top = y + 'px';
                }
        }
}