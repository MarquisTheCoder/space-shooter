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
                              if(Math.abs(enemy.xPosition - projectile.xPosition) <= 200 &&
                                   Math.abs(enemy.yPosition - projectile.yPosition) <= 100){
                                        points += 1;
                                        Map.methods.display.explosion(enemy.xPosition, enemy.yPosition);
                                        Map.enemyObjects.splice(Map.enemyObjects.indexOf(enemy), 1);
                                        Map.methods.destroy(enemy.enemyObject);
                                        delete enemy.constructor;
                                        let demonDying = new Audio('../../sounds/dying.mp3').play();
                                       
                    }
               })
          })
               },seconds(.00))
          },
     playerCollisionTracker:  function (){
               setInterval(function () {
                    Map.enemyObjects.forEach(enemy => {
                         if (Math.abs(enemy.xPosition - spaceShip.xPosition) <= 50 &&
                              Math.abs(enemy.yPosition - spaceShip.yPosition) <= 55) {
                              spaceShip.health -= 1;
                         }
                    })
               }, 150)
          },
}

               
