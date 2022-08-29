"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/25/22,
 Time Created: 4:52 PM,
 File Name: object-tracker.js,
 File Description:
 */

let objectTracker = {
     
          enemyCollisionTracker: function() {
               setInterval(function() {
                    Map.enemyObjects.forEach(enemy => {
                         Map.projectileObjects.forEach(projectile => {
                              if(Math.abs(enemy.xPosition - projectile.xPosition) <= 50 &&
                                   Math.abs(enemy.yPosition - projectile.yPosition) <= 55){
                                        points += 1;
                                        let explode = new Audio('../../sounds/object-explode.wav');
                                        let x = explode.play();
                                        Map.methods.destroy(enemy.enemyObject);
                                        Map.enemyObjects.splice(Map.enemyObjects.indexOf(enemy), 1);
                                        delete enemy.constructor;
                    }
               })
          })
     },seconds(.1))
          },
     playerCollisionTracker:  function (){
               setInterval(function () {
                    Map.enemyObjects.forEach(enemy => {
                         if (Math.abs(enemy.xPosition - spaceShip.xPosition) <= 50 &&
                              Math.abs(enemy.yPosition - spaceShip.yPosition) <= 55) {
                              spaceShip.health -= 100;
                         }
                    })
               }, 150)
          },
}

               
