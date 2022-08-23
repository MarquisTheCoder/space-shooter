"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/22/22,
 Time Created: 10:56 AM,
 File Name: characters.js,
 File Description:
 */

let character = {


        player: {
                health: 100,
                strength: 20,
                playerId: 0,
                hasWeapon: false,
                positionX: 0,
                positionY: 60,
                getPositionX: () => character.player.positionX,
                getPositionY: () => character.player.positionY
                },
        enemyArray: [],
        createEnemy: function(player){

                this.startingXCoordinate = Math.floor(Math.random() * 900) + 800;
                this.startingYCoordinate = Math.floor( Math.random() * 600) + 40;
                this.enemy = document.createElement('img');

                this.enemy.setAttribute('src', 'https://static.wikia.nocookie.net/gears_esports' +
                                                                 '_gamepedia_en/images/7/71/Enemylogo_square.png/');
                this.enemy.setAttribute('class', 'enemy');
                this.enemy.setAttribute('height', '40');
                this.enemy.setAttribute('width', '45');
                this.enemy.setAttribute('position', 'absolute');
                this.enemy.setAttribute('left', `${this.startingXCoordinate}px`);
                this.enemy.setAttribute('top', `${this.startingYCoordinate}px`);

                document.getElementById('map-box').appendChild(this.enemy);
                return this.enemy;

        }

}