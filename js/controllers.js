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

const SPEED = 20;
const JUMP_SPEED = 50;
let controller = {

        player : {
                attack:{

                  projectile: function(player){
                        let projectileImg = document.createElement('img');
                        projectileImg.setAttribute('src', 'https://icon2.cleanpng.com/20180131/g' +
                                'iw/kisspng-fireball-cinnamon-whisky-image-file-for' +
                                'mats-fireball-png-transparent-image-5a71e28f57b812.' +
                                '0334942915174130073593.jpg');
                        projectileImg.setAttribute('class','bullet');
                        projectileImg.setAttribute('height', '40');
                        projectileImg.setAttribute('width', '45');
                        projectileImg.setAttribute('position', 'absolute');
                        let mapbox = document.getElementById('map-box');
                        mapbox.appendChild(projectileImg);
                        let range = 0;

                        let fizzOutTimer = setInterval(() => {
                                let currentPadding = 0;
                                if(range++ !== 25) {
                                        currentPadding += SPEED * range;
                                        projectileImg.style.paddingLeft = currentPadding + 'px';
                                }else{
                                        mapbox.removeChild(projectileImg);
                                        clearInterval(fizzOutTimer);


                                }
                        }, 30);

                  }
                },
                setPosition: function(player, x, y){
                        player.positionX += x;
                        player.positionY += y;
                        player.playerId.style.marginLeft =
                                player.positionX + 'px';
                        player.playerId.style.marginTop =
                                player.positionY + 'px';
                },
                playerMovement: function (playerObj){
                        document.addEventListener("keydown", function(event) {
                                switch(event.key){
                                        case UP:
                                        case 'ArrowUp':
                                                controller.player.setPosition(playerObj, 0, -JUMP_SPEED);
                                                break;
                                        case DOWN:
                                        case 'ArrowDown':
                                                controller.player.setPosition(playerObj, 0, SPEED);
                                                break;
                                        case LEFT:
                                        case 'ArrowLeft':
                                                controller.player.setPosition(playerObj, -SPEED, 0);
                                                break;
                                        case RIGHT:
                                        case 'ArrowRight':
                                                controller.player.setPosition(playerObj, SPEED, 0);
                                                break;
                                }
                        });
                }
        }
}