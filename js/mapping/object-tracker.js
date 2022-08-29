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
                         Map.projectileObjects.slice(Map.projectileObjects.length - 20,Map.projectileObjects.length).forEach(projectile => {
                              if(Map.methods.utils.checkDistance(enemy, projectile, 100)){
                                        points += 1;
                                        // enemy.speed += points;
                                        // spaceShip.speed += points;
                                        Map.methods.display.explosion(enemy.xPosition, enemy.yPosition);
                                        Map.enemyObjects.splice(Map.enemyObjects.indexOf(enemy), 1);
                                        Map.methods.destroy(enemy.enemyObject);
                                        delete enemy.constructor;
                                        let demonDying = new Audio('../../sounds/dying.mp3').play();
                                       
                    }
               })
          })
               },seconds(.001));
          },
     playerCollisionTracker:  function (){
               setInterval(function () {
                    Map.enemyObjects.forEach(enemy => {
                         if (Map.methods.utils.checkDistance(spaceShip, enemy, 55)){
                              spaceShip.health -= 25;
                         }
                    })
               }, seconds(.1));
               
               setInterval(function(){
                    Map.enemyObjects.forEach(enemy => {
                         if (Map.methods.utils.checkDistance(spaceShip, enemy, 55)) {
                              Map.methods.display.hitMarker(spaceShip.xPosition, spaceShip.yPosition);
                         }
                    })
               }, 150);
          },
}

               
