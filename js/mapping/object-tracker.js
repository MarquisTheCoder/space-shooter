"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/25/22,
 Time Created: 4:52 PM,
 File Name: object-tracker.js,
 File Description:
 */


function ObjectTracker(){
     this.projectileObjects = [];
     this.enemyObjects = [];
     
     this.addObject = function (object){
          if(object.type === 'projectile'){
               this.projectileObjects.push(object);
          }else if(object.type === 'enemy'){
               this.enemyObjects.push(object);
          }
     }
     
}