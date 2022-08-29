"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/26/22,
 Time Created: 4:27 PM,
 File Name: mapping.js,
 File Description:
 */

const Map = {
     methods:{
          destroy: (object) => $(object).remove(),
          utils:{
               checkDistance: function(object1, object2, hitBox){
                    let isHit = Math.abs(object1.xPosition - object2.xPosition) <= hitBox &&
                         Math.abs(object1.yPosition - object2.yPosition) <= hitBox;
                    console.log(`IsHit: ${isHit}`)
                    return isHit;
               }
          },
          display:{
               
               gameOver: function (){
                    let img = $("<img alt='game-over'/>");
                    img.attr('src','../../images/game-over.png');
                    img.css('height', '600px');
                    img.css('position', 'absolute');
                    img.css('top', '15vh');
                    img.css('left', '22vw');
     
                    $('#map-box').append(img);
               },
               
               explosion: function(xPosition, yPosition){
                    let img =  $('<img alt="explosion-enemy"/>');
                    img.attr('src', '../../images/explosion.png');
                    img.css('height', '70px');
                    img.css('position', 'absolute');
                    img.css('top', `${yPosition}px`);
                    img.css('left', `${xPosition}px`);
                    let explosion = new Audio('../../sounds/object-explode.wav').play();
                    $('#map-box').append(img);
                    setTimeout(function (){
                         $(img).remove();
                    }, seconds(.4));
               },
               
               hitMarker: function(xPosition, yPosition){
                    let img = $('<img alt="hit-marker"/>');
                    img.attr('src', '../../images/hit-marker.png');
                    img.css('height', '60px');
                    img.css('position', 'absolute');
                    img.css('top', `${yPosition}px`);
                    img.css('left',`${xPosition + 50}px`);
                    let explosion = new Audio('../../sounds/object-explode.wav').play();
                    $('#map-box').append(img);
                    
                    let minus = $('<p>-25</p>');
                    minus.css('position', 'absolute');
                    minus.css('top', `${yPosition}`);
                    minus.css('left', `${xPosition}`);
                    setTimeout(function(){
                         $(img).remove();
                    },seconds(.4));
               }
          }
     },
     projectileObjects: [],
     enemyObjects: []
}
