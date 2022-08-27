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
                    img.attr('height', '400px');
                    img.attr('position', 'absolute');
                    img.attr('top', '500px');
                    img.attr('left', '500px');
     
                    $('#map-box').append(img);
               }
          }
     },
     projectileObjects: [],
     enemyObjects: []
}
