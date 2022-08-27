"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/25/22,
 Time Created: 4:52 PM,
 File Name: object-tracker.js,
 File Description:
 */
function destroy(object){
     $(object).remove();
     
}
function objectTracker(){
     let trackingInterval = setInterval(function() {
          Map.enemyObjects.forEach(enemy => {
               Map.projectileObjects.forEach(projectile => {
                    if(Math.abs(enemy.xPosition - projectile.xPosition) <= 50 &&
                         Math.abs(enemy.yPosition - projectile.yPosition) <= 50){
                         Map.enemyObjects.splice(enemy, 1)
                         $(enemy.enemyObject).remove();
                    }
               })
          })
     },seconds(.1));
}