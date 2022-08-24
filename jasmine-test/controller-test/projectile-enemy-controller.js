"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 8/24/22,
 Time Created: 12:18 PM,
 File Name: projectile-enemy-controller.js,
 File Description:
 testing suite for jasmine tester and collision
 between bullet and enemy
 */


describe('controller.projectileEnemyCollision.check', function (){
        it('should be a function', function (){
                expect(typeof controller.projectileEnemyCollision.check).toBe('function');
        });
        it('should return a boolean', function(){
                expect(typeof controller.projectileEnemyCollision.check()).toBe('boolean');
        })


});