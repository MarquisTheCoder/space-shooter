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
                speed: 25,
                playerId: document.getElementById('player'),
                hasWeapon: false,
                positionX: 0,
                positionY: 60,
                getPositionX: () => character.player.positionX,
                getPositionY: () => character.player.positionY
                },
        enemyArray: [],
        enemy:{
                enemyId: 0,
                positionX: 800,
                positionY: 400
        }

}