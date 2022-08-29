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
          display:{
               gameOver: function (){
                    let img = $("<img/>");
                    img.attr('src','../../images/game-over.png');
                    img.css('height', '600px');
                    img.css('position', 'absolute');
                    img.css('top', '15vh');
                    img.css('left', '22vw');
     
                    $('#map-box').append(img);
               },
               explosion: function(xPosition, yPosition){
                    let img =  $('<img alt=""/>');
                    img.attr('src', '../../images/explosion.png');
                    img.attr('height', '70px');
                    img.css('position', 'absolute');
                    img.css('top', `${yPosition}`);
                    img.css('left', `${xPosition}`);
                    
                    $('#map-box').append(img);
               }
          }
     },
     projectileObjects: [],
     enemyObjects: []
}
