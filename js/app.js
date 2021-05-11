// ////////////////////////////////////
// ///  kevinmathews.cs@gmail.com   ///
// ////////////////////////////////////
let bladeCounter = 0;
let lightningBoltCounter = 2;
let fireBallCounter = 0;
let newEntry = '';
let img1 = document.createElement("img");
img1.src = "./images/stageCleared.gif"+"?a="+Math.random();
let img2 = document.createElement("img");
img2.src = "./images/victory.gif";
let img3 = document.createElement("img");
img3.src = "./images/gameover.gif";
let img4 = document.createElement("img");
img4.src = "./images/reloadGame.gif";
let img5 = document.createElement("img");

let leaderOne = {
    name: 'Luke',
    health: 20,
    attack: '26',
    armor: '2',
    accuracy: '80',
    magic: '65',
    round: 4,
    bossHealth1: 0,
    bossHealth2: 0,
    bossHealth3: 0,
    bossHealth4: 0,
    bossHealth5: 0,
    currentBossHealth: 0,
    purchased : [
        {
            'purchasedHealth': 0,
            'purchasedAttack': 2,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,

        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 1,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 4,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 1,
        },
    ]
};
let leaderTwo = {
    name: 'Timmeh',
    health: 10,
    attack: '20',
    armor: '2',
    accuracy: '80',
    magic: '65',
    round: 4,
    bossHealth1: 0,
    bossHealth2: 0,
    bossHealth3: 0,
    bossHealth4: 0,
    bossHealth5: 0,
    currentBossHealth: 0,
    purchased : [
        {
            'purchasedHealth': 2,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,

        },
        {
            'purchasedHealth': 3,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 4,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 5,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
    ]
};
let leaderThree = {
    name: 'Susan',
    health: 10,
    attack: '20',
    armor: '2',
    accuracy: '80',
    magic: '65',
    round: 3,
    bossHealth1: 0,
    bossHealth2: 0,
    bossHealth3: 0,
    bossHealth4: 70,
    bossHealth5: 200,
    currentBossHealth: 70,
    purchased : [
        {
            'purchasedHealth': 0,
            'purchasedAttack': 1,
            'purchasedArmor': 1,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,

        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 1,
            'purchasedArmor': 2,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 1,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 1,
            'learnedFireball': 0,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': 0,
            'learnedFireball': 0,
        },
    ]
};
let leaderFour = {
    name: 'johnny',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 86,
    currentBossHealth: 86,
};
let leaderFive = {
    name: 'johnny',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 87,
    currentBossHealth: 87,
};
let leaderSix = {
    name: 'Timmeh',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 88,
    currentBossHealth: 88,
};
let leaderSeven = {
    name: 'Luke',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 89,
    currentBossHealth: 89,
};
let leaderEight = {
    name: 'Sky',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 90,
    currentBossHealth: 90,
};
let leaderNine = {
    name: 'Tony',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 91,
    currentBossHealth: 91,
};
let leaderTen = {
    name: 'Kevin',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 92,
    currentBossHealth: 92,
};

let leaderBoard = [
    leaderOne, 
    leaderTwo, 
    leaderThree, 
    leaderFour, 
    leaderFive, 
    leaderSix, 
    leaderSeven, 
    leaderEight, 
    leaderNine, 
    leaderTen
]
img5.src = "./images/1x1.png";
$playerHealth = $('.playerHealth');
$storeMessage = $('#storeMessage');
$playerGold = $('.playerGold');
$playerArmor = $('.playerArmor');
$playerAttack = $('.playerAttack');
$playerAccuracy = $('.playerAccuracy');
$playerMagicAccuracy = $('.playerMagicAccuracy');
$playerDualWield = $('.playerDualWield');
$playerDualWieldAccuracy = $('.playerDualWieldAccuracy');
$playerText = $('#playerCombatText');
$playerName = $('.playerName');
$enemyText = $('#enemyCombatText');
$bossName = $('.bossName');
$bossHealth = $('.bossHealth');
$bossAttack = $('.bossAttack');
$bossArmor = $('.bossArmor');
$bossAccuracy = $('.bossAccuracy');
$dualWield = $('#dualWield');
$progressBar = $('.progress-bar');
$enemyPicture = $('#enemyPicture');
$playerPicture = $('#playerPicture');
$playerDamageDiv = $('#playerDamageDiv');
$enemyDamageDiv = $('#enemyDamageDiv');
$body = $('body');
$victoryImage = $('#victoryImage');
$stageClearedImage = $('#stageClearedImage');
$defeatImage = $('#defeatImage');
$storeModalText = $('#modal-footer');
$lightningButton = $('#lightningButton');
$fireBallButton = $('#fireBallButton');
$magicBladeButton = $('#magicBladeButton');
$purchasedRound1Health = $('.purchasedRound1Health');
$purchasedRound2Health = $('.purchasedRound2Health');
$purchaseAfterBoss1 = $('.purchaseAfterBoss1');
// Define the Player Class
class Player {
    constructor(name){
        this.maxHealth = 500;
        this.health = 500;
        this.healthPercent = 100;
        this.energy = 100;
        this.armor = 5;
        this.name = name;
        this.accuracy = 80;
        this.magicAccuracy = 65;
        this.dualWieldAccuracy = .8;
        this.damage = 20;
        this.gold = 0;
        this.dualWield = 'Not Learned';
        this.magicBladeAccuracy = .65;
        this.magicBladeDamage = 35;
        this.lightningBoltAccuracy = .65;
        this.lightningBoltDamage = 45;
        this.fireBallAccuracy = .65;
        this.fireballDamage = 65;
        this.magicBladeLearned = false;
        this.fireBallLearned = false;
        this.damageJustDone = null;
        this.round = 0;
        this.bossHealth1= 75,
        this.bossHealth2= 100,
        this.bossHealth3= 125,
        this.bossHealth4= 150,
        this.bossHealth5= 200,
        this.currentBossHealth = 75,
        this.purchased = [
            {
                'purchasedHealth': 0,
                'purchasedAttack': 0,
                'purchasedArmor': 0,
                'purchasedAccuracy': 0,
                'purchasedMagic': 0,
                'learnedBlade': 0,
                'learnedFireball': 0,

            },
            {
                'purchasedHealth': 0,
                'purchasedAttack': 0,
                'purchasedArmor': 0,
                'purchasedAccuracy': 0,
                'purchasedMagic': 0,
                'learnedBlade': 0,
                'learnedFireball': 0,
            },
            {
                'purchasedHealth': 0,
                'purchasedAttack': 0,
                'purchasedArmor': 0,
                'purchasedAccuracy': 0,
                'purchasedMagic': 0,
                'learnedBlade': 0,
                'learnedFireball': 0,
            },
            {
                'purchasedHealth': 0,
                'purchasedAttack': 0,
                'purchasedArmor': 0,
                'purchasedAccuracy': 0,
                'purchasedMagic': 0,
                'learnedBlade': 0,
                'learnedFireball': 0,
            },
        ]
    };
    
//  method to display floating combat text of damage player does over boss    
    showDamageDone() {
        setTimeout(function(){ 
            $enemyDamageDiv.text(`-${player.damageJustDone}!`)
                .css('opacity', '100%')
                .css('color', 'red')
                .css('font-style', 'italic'); 
            }, 1000);
        setTimeout(function(){ 
            $enemyDamageDiv.css('opacity', '0%'); 
        }, 2500);}
//   method to display floating combat text of misses over the boss      
    showPlayerMiss() {
        setTimeout(function(){ 
            $enemyDamageDiv.text(`Miss`)
                .css('opacity', '100%')
                .css('color', 'black')
                .css('font-style', 'normal'); 
            }, 1000);
        setTimeout(function(){ 
            $enemyDamageDiv.css('opacity', '0%'); 
        }, 2500);
    }
//  Method to cast Fireball       
    fireBall(){
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber <= player.magicAccuracy){
            let damageDone = this.fireballDamage - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} hurl a FireBall at ${boss.enemy[currentEnemy].name} scorching them for ${damageDone} DAMAGE!!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack3.gif');
            bladeCounter += 1;
            lightningBoltCounter += 1;
            fireBallCounter = 0;
            setTimeout(function() {
                player.displayStats();
                }, 800);
                checkIfDead();
                setTimeout(
                function() {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    }, 800);
                }else {
                    $playerText.text(`${player.name} throws a FireBall at ${boss.enemy[currentEnemy].name} but they DODGE the attack!!`);
                    $playerPicture.attr('src', './images/player1attack3.gif');
                    bladeCounter += 1;
                    lightningBoltCounter += 1;
                    fireBallCounter = 0;
                    setTimeout(function() {
                        player.displayStats();
                        }, 800);
                    checkIfDead();
                    setTimeout(function()
                        { $playerPicture.attr('src', './images/player1idle.gif');
                        }, 800);
                        player.showPlayerMiss();
                }
    }
//  Method to cast Lightning Bolt    
    lightningBolt(){
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber <= player.magicAccuracy){
            let damageDone = this.lightningBoltDamage - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} flings their Magic Blade at ${boss.enemy[currentEnemy].name} hitting them for ${damageDone} DAMAGE!!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack4.gif');
            bladeCounter += 1;
            lightningBoltCounter = 0;
            fireBallCounter += 1;
            setTimeout(
                function(){
                    player.displayStats();
                    }, 800);
            checkIfDead();
            setTimeout(
                function(){
                    $playerPicture.attr('src', './images/player1idle.gif');
                    }, 800);
                }else {
                    $playerText.text(`${player.name} throws their Magic Blade at ${boss.enemy[currentEnemy].name} MISSING badly!`);
                    $playerPicture.attr('src', './images/player1attack4.gif');
                    bladeCounter += 1;
                    lightningBoltCounter = 0;
                    fireBallCounter += 1;
                    setTimeout(function() {
                    player.displayStats();
                    }, 800);
                    checkIfDead();
                    setTimeout(function() {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    }, 800);
                    player.showPlayerMiss();
                }
    }
//  Method to throw Magic Blade    
    magicBlade(){
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber <= player.accuracy){
            let damageDone = this.magicBladeDamage - boss.enemy[currentEnemy].armor;
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack2.gif');
            bladeCounter = 0;
            lightningBoltCounter += 1;
            fireBallCounter += 1;
            setTimeout(function() {
                player.displayStats();
                }, 800);
                checkIfDead();
                setTimeout(function() {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    }, 800);
                }else {
                    $playerText.text(`${player.name} throws their Magic Blade at ${boss.enemy[currentEnemy].name} MISSING badly!`);
                    $playerPicture.attr('src', './images/player1attack2.gif');
                    bladeCounter = 0;
                    fireBallCounter += 1;
                    lightningBoltCounter += 1;
                    setTimeout(function() {
                            player.displayStats();
                            }, 800);
                    checkIfDead();
                    setTimeout(function() {
                        $playerPicture.attr('src', './images/player1idle.gif');
                        }, 800);
                        player.showPlayerMiss();
                }
    }
//  Method for Dual Wield which I haven't decided it I want to incorporate yet because of game balance issues    
    dualWieldAttack() {
        let randomNumber = Math.floor(Math.random() * 101);
        if (randomNumber <= player.dualWieldAccuracy){
            let damageDone = (this.damage * 2) - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} strikes ${boss.enemy[currentEnemy].name} twice for a total of ${damageDone} damage`);
            boss.enemy[currentEnemy].health -= damageDone;
            player.displayStats();
            checkIfDead();
            }else {
                $playerText.text(`${player.name} completely misses ${boss.enemy[currentEnemy].name} with their Dual Wield Attack`);
                checkIfDead();
            }
    }
//  Method for Basic Attack    
    attack(){
        let randomNum = Math.floor(Math.random() * 101);
        if (randomNum < player.accuracy) {
            let damageDone = this.damage - boss.enemy[currentEnemy].armor;
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            player.showDamageDone();
            $playerPicture.attr('src', './images/player1attack.gif');
            bladeCounter += 1;
            lightningBoltCounter += 1;
            fireBallCounter += 1;
            player.displayStats();
            checkIfDead();
            }else{
                $playerPicture.attr('src', './images/player1attack.gif');
                bladeCounter += 1;
                lightningBoltCounter += 1;
                fireBallCounter =+ 1;
                // setTimeout(function() {
                //     player.displayStats();
                // }, 4600);
                player.displayStats();
                checkIfDead();
                player.showPlayerMiss();
            }
    }
//  Method to refresh shown stats and also to check on Weapon Cooldowns    
    displayStats() {
        $storeMessage.empty();
        $playerName.text(player.name);
        $playerHealth.empty();
        $playerHealth.text(player.health);
        $progressBar.empty();
        $progressBar.text(player.health);
        $playerGold.empty();
        $playerGold.text(player.gold);
        $playerArmor.empty();
        $playerArmor.text(player.armor);
        $playerAttack.empty();
        $playerAttack.text(player.damage);
        $playerAccuracy.empty();
        $playerAccuracy.text(player.accuracy);
        $playerMagicAccuracy.empty();
        $playerMagicAccuracy.text(player.magicAccuracy);
        $playerDualWield.empty();
        $playerDualWield.text(player.dualWield);
        $playerDualWieldAccuracy.empty();
        $playerDualWieldAccuracy.text(player.dualWieldAccuracy);
        $bossHealth.empty();
        $bossHealth.text(boss.enemy[currentEnemy].health);
        $bossAttack.empty();
        $bossAttack.text(boss.enemy[currentEnemy].damage);
        $bossArmor.empty();
        $bossArmor.text(boss.enemy[currentEnemy].armor);
        $bossAccuracy.empty();
        $bossAccuracy.text(boss.enemy[currentEnemy].accuracy);
        $bossName.empty();
        $bossName.text(boss.enemy[currentEnemy].name);
        $purchasedRound1Health.empty();
        $purchasedRound1Health.text(player.purchased[0].purchasedHealth);
        $purchasedRound2Health.empty();
        $purchasedRound2Health.text(player.purchased[1].purchasedHealth);
        bladeCounterFunction();
        lightningBoltCounterFunction();
        fireBallCounterFunction();
        }
    }

// Define Enemy Class
class Enemy {
    constructor(){
        this.energy = 75;
        this.maxHealth = 75;
        this.health = 75;
        this.armor = 2;
        this.accuracy = 50;
        this.damage = 15;
        this.gold = 20;
        this.weapon1 = true;
        this.weapon2 = false;
        this.weapon3 = false;
        this.weapon4 = false;
        this.weapon5 = false;
        this.damageJustDone = null;
    }
//  Method to show floating combat text of damage the Enemy does over the Player    
    showDamageDone() {
        setTimeout(function(){ 
            $playerDamageDiv.text(`-${boss.enemy[currentEnemy].damageJustDone}!`)
                .css('opacity', '100%')
                .css('color', 'red')
                .css('font-style', 'italic'); 
            }, 1000);
        setTimeout(function(){ 
            $playerDamageDiv.css('opacity', '0%'); 
            }, 2500);
    }
//  Method to show floating combat text Miss messages over player's head   
    showEnemyMiss() {
        setTimeout(function(){ 
            $playerDamageDiv.text(`Miss`)
                .css('opacity', '100%')
                .css('color', 'black')
                .css('font-style', 'normal'); 
            }, 1000);
        setTimeout(function(){ 
            $playerDamageDiv.css('opacity', '0%'); 
        }, 2500);
    }
//  Method Boss #5 uses for it's attack's (not sure how DRY these boss methods are or aren't, it feels like I could have written them much better)     
    enemy5Attack(){
        if (Math.floor(Math.random() * 101) < this.accuracy){
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy5attack.gif');
                }, 400);
                setTimeout(function(){
                    $enemyPicture.attr('src', './images/enemy5idle.gif');
                }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            player.displayStats();
            checkPlayerDead();
                }else {
                    player.displayStats();
                    setTimeout(function() {
                        $enemyPicture.attr('src', './images/enemy5attack.gif');
                        }, 400);
                    setTimeout(function() {
                        $enemyPicture.attr('src', './images/enemy5idle.gif');
                        }, 2000);
                    this.showEnemyMiss();
                    checkPlayerDead();
                }
    }
//  Method Boss 4 uses for it's attack    
    enemy4Attack(){
        if (Math.floor(Math.random() * 101) < this.accuracy){
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy4attack.gif');
                }, 1000);
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy4idle.gif');
                }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            player.displayStats();
            checkPlayerDead();
                }else {
                    setTimeout(function() {
                        $enemyPicture.attr('src', './images/enemy4attack.gif');
                    }, 1000);
                    setTimeout(function() {
                        $enemyPicture.attr('src', './images/enemy4idle.gif');
                    }, 2000);
                    this.showEnemyMiss();
                    player.displayStats();
                    checkPlayerDead();
                }
    }
//  Method Boss 3 uses for it's attack    
    enemy3Attack(){
        if (Math.floor(Math.random() * 101) < this.accuracy){
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy3attack2.gif');
            }, 600);
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy3idle.gif');
            }, 2500);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            player.displayStats();
            checkPlayerDead();
                }else { 
                    setTimeout(function(){
                    $enemyPicture.attr('src', './images/enemy3attack2.gif');
                    }, 600);
                    setTimeout(function() {
                    $enemyPicture.attr('src', './images/enemy3idle.gif');
                    }, 2500);
                    this.showEnemyMiss();
                    player.displayStats();
                    checkPlayerDead();
                }
    }
//  Method Boss 2 uses to attack    
enemy2Attack(){
    if (Math.floor(Math.random() * 101) < this.accuracy){
        setTimeout(function() {
            $enemyPicture.attr('src', './images/enemy2attack.gif');
        }, 800);
        setTimeout(function() {
            $enemyPicture.attr('src', './images/enemy2idle.gif');
        }, 2000);
        let damageDone = this.damage - player.armor;
        player.health -= damageDone;
        this.damageJustDone = damageDone;
        this.showDamageDone();
        checkPlayerDead();
        player.displayStats();
            }else{
                setTimeout(function() {
                    $enemyPicture.attr('src', './images/enemy2attack.gif');
                }, 800);
                setTimeout(function() {
                    $enemyPicture.attr('src', './images/enemy2idle.gif');
                }, 2000);
                this.showEnemyMiss();
                checkPlayerDead();
                player.displayStats();
            }
}
//  Method Boss 1 uses to attack    
    enemy1Attack(){
        if (Math.floor(Math.random() * 101) < this.accuracy){
        $enemyPicture.attr('src', './images/enemy1attack.gif');
        let damageDone = this.damage - player.armor;
        player.health -= damageDone;
        this.damageJustDone = damageDone;
        checkPlayerDead();
        setTimeout(function() {
            $enemyPicture.attr('src', './images/enemy1idle.gif');
        }, 2000);
        this.showDamageDone();
        player.displayStats();
            }else{
                $enemyPicture.attr('src', './images/enemy1attack.gif');
                
                setTimeout(function() {
                    $enemyPicture.attr('src', './images/enemy1idle.gif');
                    }, 2000);
                checkPlayerDead();
                this.showEnemyMiss();
                player.displayStats();
    }};
//  Method to determine what boss you are on and then use appropriate method for attack   
    enemyHit () {
        if(this.weapon2 == true){
            this.enemy2Attack();
        }else if (this.weapon3 == true){
            this.enemy3Attack();
        }else if (this.weapon4 == true){
            this.enemy4Attack();
        }else if (this.weapon5 == true){
            this.enemy5Attack();
        }else {
            this.enemy1Attack();
        }
    }
//  Method not yet implemented for boss attacks   
    lightningBolt(){
        let damageDone = (this.damage * 2.5) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} hits you with a bolt of lightning for ${damageDone}`);
        player.displayStats();
    }
//  Method not yet implemented for boss attacks    
    doubleAttack(){
        let damageDone = (this.damage * 2) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} attacks you twice for ${damageDone}`);
        player.displayStats();
    }
//  Method not yet implemented for boss attacks    
    shieldBash(){
        $enemyText.text(`${this.name} bashes you for 7 damage`);
        let damageDone = 7 - player.armor;
        player.health -= damageDone;
        player.displayStats();
    };
//  Method not yet implemented for boss attacks    
    attack() {
        if ((Math.random() < this.accuracy)){
            this.enemyHit();
            }else {
                $enemyText.text(`${this.name} misses ${player.name}`);
            }
    }
}
class EnemyBoss {
    constructor(){
        this.enemy = [];
        this.name;
    }
    createEnemies(i){
        const newEnemy = new Enemy(i);
        this.enemy.push(newEnemy);
    }
}
//  create player
const player = new Player();
// create bosses
const boss = new EnemyBoss();
boss.createEnemies(1);
boss.createEnemies(2);
boss.createEnemies(3);
boss.createEnemies(4);
boss.createEnemies(5);
let currentEnemy = 0;
let reportedEnemy = 1;

//  function to see if player has been killed
let checkPlayerDead = function() {
    if (player.health <= 0){
        $playerPicture.attr('src', './images/player1death2.gif');
        player.bossHealth1 = boss.enemy[0].health;
        player.bossHealth2 = boss.enemy[1].health;
        player.bossHealth3 = boss.enemy[2].health;
        player.bossHealth4 = boss.enemy[3].health;
        player.bossHealth5 = boss.enemy[4].health;
        player.currentBossHealth = boss.enemy[currentEnemy].health;
        leaderBoardOneDisplay();
        console.log('dead')
        console.log(player)
        console.log(leaderBoard)
        defeat();

        
        player.displayStats();
        setTimeout(
            function() {
                $("#leaderModal").modal('show');
                // resetGame();
            }, 5900);
            
    } else {
        setTimeout(function() {
            $playerPicture.attr('src', './images/player1idle.gif');
            }, 1300);
    }
}
//  function to see if the various bosses have been killed
let checkIfDead = function(){
    if (boss.enemy[4].health <= 0){
        player.displayStats();
        setTimeout(function() {
            $enemyPicture.attr('src', './images/enemy5death.gif');
        }, 100);
        setTimeout(function() {
            victory();
        }, 1500);
        setTimeout(
            function() {
                $("#leaderModal").modal('show');
                // resetGame();
            }, 5900);
        
        }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 3){
            setTimeout(function() {
                $enemyPicture.attr('src', './images/enemy4death.gif');
            }, 500);
            currentEnemy ++;
            reportedEnemy ++;
            player.round ++;
            console.log(player.round);
            player.gold += 50;
            player.displayStats();
            stageCleared();
            setTimeout(
                function() {
                    $enemyPicture.attr('src', './images/enemy5idle.gif');
                }, 5800);
                }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 2){
                    setTimeout(
                    function() {
                        $enemyPicture.attr('src', './images/enemy3death.gif');
                    }, 500);
                    currentEnemy ++;
                    reportedEnemy ++;
                    player.round ++;
                    player.gold += 40;
                    player.displayStats();
                    stageCleared();
                    setTimeout(
                    function() {
                        $enemyPicture.attr('src', './images/enemy4idle.gif');
                    }, 5800);
                        }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 1){
                            setTimeout(
                            function(){
                            $enemyPicture.attr('src', './images/enemy2death.gif');}, 500);
                            currentEnemy ++;
                            reportedEnemy ++;
                            player.round ++;
                            player.gold += 30;
                            player.displayStats();
                            stageCleared();
                            setTimeout(
                            function() {
                                $enemyPicture.attr('src', './images/enemy3idle.gif');
                            }, 5800);
                            }else if(boss.enemy[0].health <= 0 && currentEnemy == 0){
                                setTimeout(function(){
                                $enemyPicture.attr('src', './images/enemy1dead.gif');}, 500);
                                currentEnemy ++;
                                reportedEnemy ++;
                                player.round ++;
                                player.gold += 20;
                                player.displayStats();
                                stageCleared();
                                setTimeout(function(){
                                $enemyPicture.attr('src', './images/enemy2idle.gif');}, 5800);
                                } else {
                                    boss.enemy[currentEnemy].enemyHit();
                                }
    }
//  function to set Player Name    
$(document).ready(function() {
        $("#newGame").submit(function(e) {
        e.preventDefault();
        let player_One = $('#nameOne').val();
        player.name = player_One;
        player.displayStats();
    });
});
//  Place holder item set to invis
$('.fancy').click(function(){
    $('#startbutton').css('visibility', 'visible');
})
//  updates stats on the bosses
boss.enemy[0].name='Taz\'dingo';
boss.enemy[1].weapon2 = true;
boss.enemy[1].name = 'Pozzik & Sluggo';
boss.enemy[1].damage = 30;
boss.enemy[1].health = 100;
boss.enemy[1].armor = 5;
boss.enemy[1].accuracy = 55;
boss.enemy[2].weapon3 = true;
boss.enemy[2].name = 'Goldrinn';
boss.enemy[2].damage = 35;
boss.enemy[2].health = 125;
boss.enemy[2].armor = 8;
boss.enemy[2].accuracy = 60;
boss.enemy[3].name='Djinn';
boss.enemy[3].damage = 45;
boss.enemy[3].health = 150;
boss.enemy[3].weapon4 = true;
boss.enemy[3].armor = 11;
boss.enemy[3].accuracy = 65;
boss.enemy[4].name='Vaelastrasz';
boss.enemy[4].damage = 75;
boss.enemy[4].health = 200;
boss.enemy[4].weapon5 = true;
boss.enemy[4].armor = 15;
boss.enemy[4].accuracy = 65;
//  function to purchase health upgrades
$('#buyHealthUpgrade').on('click', () => {
    if (player.gold >= 10 && player.health >= 491){
        $('#shopText')
            .text(`${player.name} you are already at full health`);
        player.displayStats();
        }else if (player.gold >= 10 && player.health < 491){
            player.health += 10;
            player.gold -= 10;
            player.displayStats();
            healthPurchaseHistory();
            console.log(player.purchased);
            $('#shopText')
                .text(`${player.name} Has just regained 10 health!`);
            }else {
                $('#shopText')
                    .text(`Sorry ${player.name}, but you don\'t have enough Gold to buy a Health Potion`);
                player.displayStats();
}});
//  function to purchase throwing blade upgrade
$('#buyThrowingBladeUpgrade').on('click', () => {
    if (player.gold >= 30 && player.magicBladeLearned == false){
        player.gold -= 30;
        player.magicBladeLearned = true;
        player.displayStats();
        bladePurchaseHistory();
        console.log(player.purchased)
        bladeCounter = 1;
        $magicBladeButton.css('visibility', 'visible');
        $('#shopText')
            .text(`${player.name} has just learned the skill Throwing Blade!`);
        }else if(player.gold >= 30 && player.magicBladeLearned == true){
            $('#shopText')
                .text(`${player.name}, you have already learned the Spell FireBall`);
            player
                .displayStats();
            }else {
                $('#shopText')
                    .text(`Sorry ${player.name}, but you don\'t have enough Gold to train the skill Throwing Blade`);
                player.displayStats();
}}); 
//  function to purchase FireBall upgrade
$('#buyFireBallUpgrade').on('click', () => {
    if (player.gold >= 50 && player.fireBallLearned == false){
        player.gold -= 50;
        player.fireBallLearned = true;
        fireBallCounter = 3;
        $fireBallButton.css('visibility','visible');
        player.displayStats();
        fireballPurchaseHistory();
        console.log(player.purchased);
        $('#shopText')
            .text(`${player.name} has just learned the spell Fireball!`);
        }else if(player.gold >= 50 && player.fireBallLearned == true){
            $('#shopText').text(`${player.name}, you have already learned the Spell FireBall`);
            player
                .displayStats();
            }else {
                $('#shopText')
                    .text(`Sorry ${player.name}, but you don\'t have enough Gold to purchase the Spell FireBall`);
                player
                    .displayStats();
}});   
//  Function to purchase an accuracy upgrade
$('#buyAccuracyUpgrade').on('click', () => {
    if (player.gold >= 10 && player.accuracy <= 98){
        player.accuracy += 2;
        player.gold -= 10;
        player.displayStats();
        accuracyPurchaseHistory();
        console.log(player.purchased);
        $('#shopText').text(`${player.name} has improved their Accuracy by 2 points!!`);
        }else if(player.gold >= 10 && player.accuracy >= 100){
            $('#shopText').text(`Sorry ${player.name}, but your Accuracy is already maxed!`);
        }else {
            $('#shopText').text(`Sorry ${player.name}, but you don\'t have enough Gold to train your Accuracy`);
            player.displayStats();
}});               
//  Function to purchase Armor upgrades
$('#buyArmorUpgrade').on('click', () => {
    if (player.gold >= 10 ){
        player.armor += 3;
        player.gold -= 10;
        player.displayStats();
        armorPurchaseHistory();
        console.log(player.purchased);
        $('#shopText').text(`${player.name} has just gained 3 armor!`);
            }else {
                $('#shopText').text(`Sorry ${player.name}, but you don\'t have enough Gold for an Armor upgrade`);
                player.displayStats();
}});   
//  Function to purchase Attack upgrades
$('#buyAttackUpgrade').on('click', () => {
    if (player.gold >= 10 ){
        player.damage += 3;
        player.gold -= 10;
        player.displayStats();
        attackPurchaseHistory();
        console.log(player.purchased);
        $('#shopText').text(`${player.name} has just trained their attack skill gaining 3 points!`);
            }else {
                $('#shopText').text(`Sorry ${player.name}, but you don\'t have enough Gold to train your Attack skill`);
                player.displayStats();
}});   
//  Function to purchase Magic Accuracy upgrades                
$('#buyMagicAccuracyUpgrade').on('click', () => {
    if (player.gold >= 10 && player.magicAccuracy <= 98){
        player.magicAccuracy += 2;
        player.gold -= 10;
        player.displayStats();
        magicPurchaseHistory();
        console.log(player.purchased);
        $('#shopText')
            .text(`${player.name} has improved their Magic Accuracy by 2 points!`);
        }else if(player.gold >= 10 && player.magicAccuracy >= 100) {
            $('#shopText').text(`Sorry ${player.name} but your Magic Accuracy is already maxed!`)
        }else {
            $('#shopText')
                .text(`Sorry ${player.name}, but you don\'t have enough Gold to train Magic Accuracy `);player.displayStats();
}});  
//  Function to purchase a yet to be implemented dual wield skill
$('#buyDualWield').on('click', () => {
    if (player.gold >= 30 ){
        player.gold -= 30;
        player.dualWield = 'Learned';
        player.dualWieldAccuracy = (player.accuracy / 2);
        $('.dualWieldAccuracy').css('display', 'inline-block');
        player.displayStats();
        }else {
            $storeMessage.text(`Sorry you don\'t have enough Gold to buy the Dual Wield skill`);
}});
//  Function to record what round items were purchased in




///////////////////////////////////////

//  starts basic player attack
$('#attackButton').on('click', ()=>{
    player.attack()
})
// player dual wield attack (not yet implemented)
$('#dualWield').on('click', ()=>{
    player.dualWieldAttack();
})
//  starts magic blade attack
$('#magicBladeButton').on('click', ()=>{
    player.magicBlade();
})
//  starts lightning bolt attack
$('#lightningButton').on('click', ()=>{
    player.lightningBolt();
})
//  starts fireball attack
$('#fireBallButton').on('click', ()=>{
    player.fireBall();
})
//  randomizes stage backgrounds
let changeStage = function() {
    let randStage = Math.random();
    if (randStage < .25){
        $body.css('background-image','url(./images/game_background_11.png)')
            .css('width', '100%');
        }else if (randStage >= .25 &&  randStage < .5){
            $body.css('background-image','url(./images/game_background_21.png)')
                .css('width', '100%');
        }else if (randStage >= .5 &&  randStage < .75){
            $body.css('background-image','url(./images/game_background_31.png)')
                .css('width', '100%');
        }else if (randStage >= .75 &&  randStage <= 1){
            $body.css('background-image','url(./images/game_background_41.png)')
                .css('width', '100%');
        }
}
// stage clear modal that pops up after beating a boss
let stageCleared = function() {
    $('#myModal4').modal('show');
    $('.modal-content').css('background-color', 'transparent');
    $('#modal-body4').append(img1);
    img1.id = 'stageClearedImage';
    setTimeout(
        function() {
            $('#myModal4').modal('hide');
        }, 5800);
        setTimeout(function() {
            $('.modal-content').css('background-color', 'white');
            }, 5900);  
}
//  victory modal that pops up on game win
let victory = function() {
    player.bossHealth1 = boss.enemy[0].health;
    player.bossHealth2 = boss.enemy[1].health;
    player.bossHealth3 = boss.enemy[2].health;
    player.bossHealth4 = boss.enemy[3].health;
    player.bossHealth5 = boss.enemy[4].health;
    leaderBoardOneDisplay();
    $('#myModal5').modal('show');
    $('.modal-content')
        .css('background-color', 'transparent');
    $('#modal-body5').append(img2);
    img2.id = 'victoryImage';
    setTimeout(function() {
        $('#myModal5').modal('hide');
        }, 5800);
        setTimeout(function() {
            $('.modal-content').css('background-color', 'white');
                }, 5900);
}
// defeat modal that pops up on game loss
let defeat = function() {

    $('#myModal6').modal('show');
    $('.modal-content').css('background-color', 'transparent');
    $('#modal-body6').append(img3);
    img3.id = 'defeatImage';
    setTimeout(function() {
        $('#myModal6').modal('hide');  
        }, 5800);
        setTimeout(function() {
        $('.modal-content').css('background-color', 'white');
        }, 5850);
}
// countdown modal that pops up on game restart
let restartGame = function() {
    $('#myModal7').modal('show');
    $('.modal-content').css('background-color', 'transparent');
    $('#modal-body7').append(img4);
    img4.id = 'restartGameImage';
    setTimeout(function() {
        $('#myModal7').modal('hide');
    }, 5800);
    setTimeout(function() {
        $('.modal-content').css('background-color', 'white');
        }, 5900);
}
//  function to reset game to original state
let resetGame = function() {
    player.health = 500;
    player.accuracy = 80;
    player.armor = 5;
    player.damage = 20;
    player.gold = 0;
    player.magicAccuracy = 65;
    player.magicBladeLearned = false;
    player.fireBallLearned = false;
    player.round = 0;
    player.bossHealth1= 75,
    player.bossHealth2= 100,
    player.bossHealth3= 125,
    player.bossHealth4= 150,
    player.bossHealth5= 200,
    player.currentBossHealth = 75,
    player.purchased = [
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': false,
            'learnedFireball': false,

        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': false,
            'learnedFireball': false,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': false,
            'learnedFireball': false,
        },
        {
            'purchasedHealth': 0,
            'purchasedAttack': 0,
            'purchasedArmor': 0,
            'purchasedAccuracy': 0,
            'purchasedMagic': 0,
            'learnedBlade': false,
            'learnedFireball': false,
        },
    ]
    fireBallCounter = 0;
    lightningBoltCounter = 3;
    bladeCounter = 0;
    $fireBallButton.css('visibility','hidden');
    $magicBladeButton.css('visibility', 'hidden');
    boss.enemy[0].health = 75;
    boss.enemy[1].health = 100;
    boss.enemy[2].health = 125;
    boss.enemy[3].health = 150;
    boss.enemy[4].health = 200;
    currentEnemy = 0;
    reportedEnemy = 1;
    player.displayStats();
    $playerPicture.attr('src', './images/player1idle.gif');
    $enemyPicture.attr('src', './images/enemy1idle.gif');
    console.log('after reset')
    console.log(player)
    console.log(leaderBoard)
}
// function to show countdown timer and then restart game
$('.resetGameButton').on('click', () => {
    restartGame();
    setTimeout(function(){
        resetGame();
    }, 5900);
    console.log(player)
});   


// $("#myModal").modal('show');
// function to apply cooldown timer to Throwing Blade
let bladeCounterFunction = function () {
    if(bladeCounter >= 1 && player.magicBladeLearned == true){
        $magicBladeButton.attr('src', './images/blade11.png')
                        .css('pointer-events', 'auto');
    }else{
        $magicBladeButton.attr('src', './images/bladecool11.png')
                        .css( 'pointer-events', 'none' );
    }
}
// function to apply cooldown timer to Lightning Bolt
let lightningBoltCounterFunction = function () {
    if(lightningBoltCounter >= 2){
        $lightningButton.attr('src', './images/lightning11.png')
                        .css('pointer-events', 'auto');
    }else if (lightningBoltCounter == 1){
        $lightningButton.attr('src', './images/lightningcool11.png');
        }else{ $lightningButton.attr('src', './images/lightningcool22.png')
                                .css( 'pointer-events', 'none' );
    };
};
//  function to apply cooldown timer to FireBall
let fireBallCounterFunction = function () {
    if(fireBallCounter >= 3 && player.fireBallLearned == true){
        $fireBallButton.attr('src', './images/fireball11.png')
                        .css('pointer-events', 'auto');
        } else if (fireBallCounter == 2) {
            $fireBallButton.attr('src', './images/fireballcool11.png');
            } else if (fireBallCounter == 1) {
                $fireBallButton.attr('src', './images/fireballcool22.png');
                } else {
                    $fireBallButton.attr('src', './images/fireballcool33.png')
                                    .css('pointer-events', 'none');
    }
}
//  functions to track round purchases were made
let healthPurchaseHistory = () => {
if (player.round === 1) {
    player.purchased[0].purchasedHealth ++ ;
}   else if (player.round === 2 ) {
    player.purchased[1].purchasedHealth ++ ;
} else if (player.round === 3) {
    player.purchased[2].purchasedHealth ++ ;
} else if (player.round === 4) {    
    player.purchased[3].purchasedHealth ++ ;
} else {
}};
let attackPurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].purchasedAttack ++ ;
    }   else if (player.round === 2 ) {
        player.purchased[1].purchasedAttack ++ ;
    } else if (player.round === 3) {
        player.purchased[2].purchasedAttack ++ ;
    } else if (player.round === 4) {    
        player.purchased[3].purchasedAttack ++ ;
    } else {
    }};
let armorPurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].purchasedArmor ++ ;
    }   else if (player.round === 2 ) {
        player.purchased[1].purchasedArmor ++ ;
    } else if (player.round === 3) {
        player.purchased[2].purchasedArmor ++ ;
    } else if (player.round === 4) {    
        player.purchased[3].purchasedArmor ++ ;
    } else {
    }};
let accuracyPurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].purchasedAccuracy ++ ;
    }   else if (player.round === 2 ) {
        player.purchased[1].purchasedAccuracy ++ ;
    } else if (player.round === 3) {
        player.purchased[2].purchasedAccuracy ++ ;
    } else if (player.round === 4) {    
        player.purchased[3].purchasedAccuracy ++ ;
    } else {
    }};
let magicPurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].purchasedMagic ++ ;
    }   else if (player.round === 2 ) {
        player.purchased[1].purchasedMagic ++ ;
    } else if (player.round === 3) {
        player.purchased[2].purchasedMagic ++ ;
    } else if (player.round === 4) {    
        player.purchased[3].purchasedMagic ++ ;
    } else {
    }};
let fireballPurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].learnedFireball ++;
    }   else if (player.round === 2 ) {
        player.purchased[1].learnedFireball ++;
    } else if (player.round === 3) {
        player.purchased[2].learnedFireball ++;
    } else if (player.round === 4) {    
        player.purchased[3].learnedFireball ++;
    } else {
    }};
let bladePurchaseHistory = () => {
    if (player.round === 1) {
        player.purchased[0].learnedBlade ++;
    }   else if (player.round === 2 ) {
        player.purchased[1].learnedBlade ++;
    } else if (player.round === 3) {
        player.purchased[2].learnedBlade ++;
    } else if (player.round === 4) {    
        player.purchased[3].learnedBlade ++;
    } else {
    }};
 



// let conditionalLeaderBoardCategories = () => {
    
//     checkVsLeaderBoard();
//     leaderBoardOneDisplay();
    
    
// }
//  Leader Board Display
//  1st leader spot stats displayed
let firstPositionName = ()=> {
    $('.firstPositionName').append(leaderBoard[0].name);
}
let round1HealthBought = () => {
    if (leaderBoard[0].purchased[0].purchasedHealth > 0){
    $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedHealth + '<br />');
    }
}
let round2HealthBought = () => {
    if (leaderBoard[0].purchased[1].purchasedHealth > 0){
    $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedHealth + '<br />');
    }
}
let round3HealthBought = () => {
    if (leaderBoard[0].purchased[2].purchasedHealth > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedHealth + '<br />');
    }
}
let round4HealthBought = () => {
    if (leaderBoard[0].purchased[3].purchasedHealth > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedHealth + '<br />');
    }
}
let round1AttackBought = () => {
    if (leaderBoard[0].purchased[0].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedAttack + '<br />');
    }
}
let round2AttackBought = () => {
    if (leaderBoard[0].purchased[1].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedAttack + '<br />');
    }
}
let round3AttackBought = () => {
    if (leaderBoard[0].purchased[2].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedAttack + '<br />');
    }
}
let round4AttackBought = () => {
    if (leaderBoard[0].purchased[3].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedAttack + '<br />');
    }
}
let round1ArmorBought = () => {
    if (leaderBoard[0].purchased[0].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedArmor + '<br />');
    }
}
let round2ArmorBought = () => {
    if (leaderBoard[0].purchased[1].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedArmor + '<br />');
    }
}
let round3ArmorBought = () => {
    if (leaderBoard[0].purchased[2].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedArmor + '<br />');
    }
}
let round4ArmorBought = () => {
    if (leaderBoard[0].purchased[3].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedArmor + '<br />');
    }
}
let round1AccuracyBought = () => {
    if (leaderBoard[0].purchased[0].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedAccuracy + '<br />');
    }
}
let round2AccuracyBought = () => {
    if (leaderBoard[0].purchased[1].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedAccuracy + '<br />');
    }
}
let round3AccuracyBought = () => {
    if (leaderBoard[0].purchased[2].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedAccuracy + '<br />');
    }
}
let round4AccuracyBought = () => {
    if (leaderBoard[0].purchased[3].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedAccuracy + '<br />');
    }
}
let round1MagicBought = () => {
    if (leaderBoard[0].purchased[0].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedMagic + '<br />');
    }
}
let round2MagicBought = () => {
    if (leaderBoard[0].purchased[1].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedMagic + '<br />');
    }
}
let round3MagicBought = () => {
    if (leaderBoard[0].purchased[2].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedMagic + '<br />');
    }
}
let round4MagicBought = () => {
    if (leaderBoard[0].purchased[3].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedMagic + '<br />');
    }
}
let round2FireballBought = () => {
    if (leaderBoard[0].purchased[1].learnedFireball > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3FireballBought = () => {
    if (leaderBoard[0].purchased[2].learnedFireball > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4FireballBought = () => {
    if (leaderBoard[0].purchased[3].learnedFireball > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round2BladeBought = () => {
    if (leaderBoard[0].purchased[1].learnedBlade > 0){
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3BladeBought = () => {
    if (leaderBoard[0].purchased[2].learnedBlade > 0){
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4BladeBought = () => {
    if (leaderBoard[0].purchased[3].learnedBlade > 0){
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/blade.png' />`  + '<br />');
    }
}
//  second position stats displayed
let secondPositionName = ()=> {
    $('.secondPositionName').append(leaderBoard[1].name);
}
let round1HealthBought2 = () => {
    if (leaderBoard[1].purchased[0].purchasedHealth > 0){
    $('.leaderTwoPurchaseAfterBoss1').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[1].purchased[0].purchasedHealth + '<br />');
    }
}
let round2HealthBought2 = () => {
    if (leaderBoard[1].purchased[1].purchasedHealth > 0){
    $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[1].purchased[1].purchasedHealth + '<br />');
    }
}
let round3HealthBought2 = () => {
    if (leaderBoard[1].purchased[2].purchasedHealth > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[1].purchased[2].purchasedHealth + '<br />');
    }
}
let round4HealthBought2 = () => {
    if (leaderBoard[1].purchased[3].purchasedHealth > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[1].purchased[3].purchasedHealth + '<br />');
    }
}
let round1AttackBought2 = () => {
    if (leaderBoard[1].purchased[0].purchasedAttack > 0){
        $('.leaderTwoPurchaseAfterBoss1').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[1].purchased[0].purchasedAttack + '<br />');
    }
}
let round2AttackBought2 = () => {
    if (leaderBoard[1].purchased[1].purchasedAttack > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[1].purchased[1].purchasedAttack + '<br />');
    }
}
let round3AttackBought2 = () => {
    if (leaderBoard[1].purchased[2].purchasedAttack > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[1].purchased[2].purchasedAttack + '<br />');
    }
}
let round4AttackBought2 = () => {
    if (leaderBoard[1].purchased[3].purchasedAttack > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[1].purchased[3].purchasedAttack + '<br />');
    }
}
let round1ArmorBought2 = () => {
    if (leaderBoard[1].purchased[0].purchasedArmor > 0){
        $('.leaderTwoPurchaseAfterBoss1').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[1].purchased[0].purchasedArmor + '<br />');
    }
}
let round2ArmorBought2 = () => {
    if (leaderBoard[1].purchased[1].purchasedArmor > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[1].purchased[1].purchasedArmor + '<br />');
    }
}
let round3ArmorBought2 = () => {
    if (leaderBoard[1].purchased[2].purchasedArmor > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[1].purchased[2].purchasedArmor + '<br />');
    }
}
let round4ArmorBought2 = () => {
    if (leaderBoard[1].purchased[3].purchasedArmor > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[1].purchased[3].purchasedArmor + '<br />');
    }
}
let round1AccuracyBought2 = () => {
    if (leaderBoard[1].purchased[0].purchasedAccuracy > 0){
        $('.leaderTwoPurchaseAfterBoss1').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[1].purchased[0].purchasedAccuracy + '<br />');
    }
}
let round2AccuracyBought2 = () => {
    if (leaderBoard[1].purchased[1].purchasedAccuracy > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[1].purchased[1].purchasedAccuracy + '<br />');
    }
}
let round3AccuracyBought2 = () => {
    if (leaderBoard[1].purchased[2].purchasedAccuracy > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[1].purchased[2].purchasedAccuracy + '<br />');
    }
}
let round4AccuracyBought2 = () => {
    if (leaderBoard[1].purchased[3].purchasedAccuracy > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[1].purchased[3].purchasedAccuracy + '<br />');
    }
}
let round1MagicBought2 = () => {
    if (leaderBoard[1].purchased[0].purchasedMagic > 0){
        $('.leaderTwoPurchaseAfterBoss1').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[1].purchased[0].purchasedMagic + '<br />');
    }
}
let round2MagicBought2 = () => {
    if (leaderBoard[1].purchased[1].purchasedMagic > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[1].purchased[1].purchasedMagic + '<br />');
    }
}
let round3MagicBought2 = () => {
    if (leaderBoard[1].purchased[2].purchasedMagic > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[1].purchased[2].purchasedMagic + '<br />');
    }
}
let round4MagicBought2 = () => {
    if (leaderBoard[1].purchased[3].purchasedMagic > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[1].purchased[3].purchasedMagic + '<br />');
    }
}
let round2FireballBought2 = () => {
    if (leaderBoard[1].purchased[1].learnedFireball > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3FireballBought2 = () => {
    if (leaderBoard[1].purchased[2].learnedFireball > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4FireballBought2 = () => {
    if (leaderBoard[1].purchased[3].learnedFireball > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round2BladeBought2 = () => {
    if (leaderBoard[1].purchased[1].learnedBlade > 0){
        $('.leaderTwoPurchaseAfterBoss2').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3BladeBought2 = () => {
    if (leaderBoard[1].purchased[2].learnedBlade > 0){
        $('.leaderTwoPurchaseAfterBoss3').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4BladeBought2 = () => {
    if (leaderBoard[1].purchased[3].learnedBlade > 0){
        $('.leaderTwoPurchaseAfterBoss4').append(`<img src='./images/blade.png' />`  + '<br />');
    }
}

//  third positions stats displayed
let thirdPositionName = ()=> {
    $('.thirdPositionName').append(leaderBoard[2].name);
}
let round1HealthBought3 = () => {
    if (leaderBoard[2].purchased[0].purchasedHealth > 0){
    $('.leaderThreePurchaseAfterBoss1').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[2].purchased[0].purchasedHealth + '<br />');
    }
}
let round2HealthBought3 = () => {
    if (leaderBoard[2].purchased[1].purchasedHealth > 0){
    $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[2].purchased[1].purchasedHealth + '<br />');
    }
}
let round3HealthBought3 = () => {
    if (leaderBoard[2].purchased[2].purchasedHealth > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[2].purchased[2].purchasedHealth + '<br />');
    }
}
let round4HealthBought3 = () => {
    if (leaderBoard[2].purchased[3].purchasedHealth > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[2].purchased[3].purchasedHealth + '<br />');
    }
}
let round1AttackBought3 = () => {
    if (leaderBoard[2].purchased[0].purchasedAttack > 0){
        $('.leaderThreePurchaseAfterBoss1').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[2].purchased[0].purchasedAttack + '<br />');
    }
}
let round2AttackBought3 = () => {
    if (leaderBoard[2].purchased[1].purchasedAttack > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[2].purchased[1].purchasedAttack + '<br />');
    }
}
let round3AttackBought3 = () => {
    if (leaderBoard[2].purchased[2].purchasedAttack > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[2].purchased[2].purchasedAttack + '<br />');
    }
}
let round4AttackBought3 = () => {
    if (leaderBoard[2].purchased[3].purchasedAttack > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[2].purchased[3].purchasedAttack + '<br />');
    }
}
let round1ArmorBought3 = () => {
    if (leaderBoard[2].purchased[0].purchasedArmor > 0){
        $('.leaderThreePurchaseAfterBoss1').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[2].purchased[0].purchasedArmor + '<br />');
    }
}
let round2ArmorBought3 = () => {
    if (leaderBoard[2].purchased[1].purchasedArmor > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[2].purchased[1].purchasedArmor + '<br />');
    }
}
let round3ArmorBought3 = () => {
    if (leaderBoard[2].purchased[2].purchasedArmor > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[2].purchased[2].purchasedArmor + '<br />');
    }
}
let round4ArmorBought3 = () => {
    if (leaderBoard[2].purchased[3].purchasedArmor > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[2].purchased[3].purchasedArmor + '<br />');
    }
}
let round1AccuracyBought3 = () => {
    if (leaderBoard[2].purchased[0].purchasedAccuracy > 0){
        $('.leaderThreePurchaseAfterBoss1').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[2].purchased[0].purchasedAccuracy + '<br />');
    }
}
let round2AccuracyBought3 = () => {
    if (leaderBoard[2].purchased[1].purchasedAccuracy > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[2].purchased[1].purchasedAccuracy + '<br />');
    }
}
let round3AccuracyBought3 = () => {
    if (leaderBoard[2].purchased[2].purchasedAccuracy > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[2].purchased[2].purchasedAccuracy + '<br />');
    }
}
let round4AccuracyBought3 = () => {
    if (leaderBoard[2].purchased[3].purchasedAccuracy > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[2].purchased[3].purchasedAccuracy + '<br />');
    }
}
let round1MagicBought3 = () => {
    if (leaderBoard[2].purchased[0].purchasedMagic > 0){
        $('.leaderThreePurchaseAfterBoss1').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[2].purchased[0].purchasedMagic + '<br />');
    }
}
let round2MagicBought3 = () => {
    if (leaderBoard[2].purchased[1].purchasedMagic > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[2].purchased[1].purchasedMagic + '<br />');
    }
}
let round3MagicBought3 = () => {
    if (leaderBoard[2].purchased[2].purchasedMagic > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[2].purchased[2].purchasedMagic + '<br />');
    }
}
let round4MagicBought3 = () => {
    if (leaderBoard[2].purchased[3].purchasedMagic > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[2].purchased[3].purchasedMagic + '<br />');
    }
}
let round2FireballBought3 = () => {
    if (leaderBoard[2].purchased[1].learnedFireball > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3FireballBought3 = () => {
    if (leaderBoard[2].purchased[2].learnedFireball > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4FireballBought3 = () => {
    if (leaderBoard[2].purchased[3].learnedFireball > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round2BladeBought3 = () => {
    if (leaderBoard[2].purchased[1].learnedBlade > 0){
        $('.leaderThreePurchaseAfterBoss2').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3BladeBought3 = () => {
    if (leaderBoard[2].purchased[2].learnedBlade > 0){
        $('.leaderThreePurchaseAfterBoss3').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4BladeBought3 = () => {
    if (leaderBoard[2].purchased[3].learnedBlade > 0){
        $('.leaderThreePurchaseAfterBoss4').append(`<img src='./images/blade.png' />`  + '<br />');
    }
}
//  fourth position stats displayed
let fourthPositionName = ()=> {
    $('.fourthPositionName').append(leaderBoard[3].name);
}
//  fifth position stats displayed
let fifthPositionName = ()=> {
    $('.fifthPositionName').append(leaderBoard[4].name);
}
//  sixth position stats displayed
let sixthPositionName = ()=> {
    $('.sixthPositionName').append(leaderBoard[5].name);
}
    //  seventh position stats displayed
let seventhPositionName = ()=> {
    $('.seventhPositionName').append(leaderBoard[6].name);
}
    //  eighth position stats displayed
let eighthPositionName = ()=> {
    $('.eighthPositionName').append(leaderBoard[7].name);
}
    //  ninth position stats displayed
let ninthPositionName = ()=> {
    $('.ninthPositionName').append(leaderBoard[8].name);
}
    //  tenth position stats displayed
let tenthPositionName = ()=> {
    $('.tenthPositionName').append(leaderBoard[9].name);
}
    //  tracks leader spot 1 bosses killed
let bossesKilled = () => {
    if (leaderBoard[0].round === 4 && leaderBoard[0].bossHealth5 <= 0) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss2Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss3Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss4Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss5Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss5').empty();
        $('.leaderOnePurchaseAfterBoss5').append(leaderBoard[0].health + ` player health left`);
    } else if (leaderBoard[0].round === 4) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss2Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss3Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss4Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss5').empty();
        $('.leaderOnePurchaseAfterBoss5').append(leaderBoard[0].bossHealth5 + ` health left`);
    } else if (leaderBoard[0].round === 3) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss2Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss3Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(leaderBoard[0].bossHealth4 + ` health left`);
    } else if (leaderBoard[0].round === 2) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss2Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(leaderBoard[0].bossHealth3 + ` health left`);
    } else if (leaderBoard[0].round === 1) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(leaderBoard[0].bossHealth2 + ` health left`);

    }
}
// //  tracks leader spot 2 bosses killed
// let bossesKilled2 = () => {
//     if (leaderBoard[1].round = 4 && leaderBoard[1].bossHealth5 <= 0) {
//         $('.twoBoss1name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss4Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss5Name').removeClass().addClass('boss1NameDead');
//         $('.leaderTwoPurchaseAfterBoss5').empty();
//         $('.leaderTwoPurchasedAfterBoss5').append(leaderBoard[1].health + ` player health left`);
//         console.log(player.health);
//         console.log(boss.enemy[4].health);
//     } else if (leaderBoard[1].round = 4) {
//         $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss4Name').removeClass().addClass('boss1NameDead');
//         $('.leaderTwoPurchaseAfterBoss5').empty();
//         $('.leaderTwoPurchaseAfterBoss5').append(leaderBoard[1].bossHealth5 + ` health left`);
//     } else if (leaderBoard[1].round = 3) {
//         $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
//         $('.leaderTwoPurchaseAfterBoss4').empty();
//         $('.leaderTwoPurchaseAfterBoss4').append(leaderBoard[1].bossHealth4 + ` health left`);
//     } else if (leaderBoard[1].round = 2) {
//         $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
//         $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
//         $('.leaderTwoPurchaseAfterBoss3').empty();
//         $('.leaderTwoPurchaseAfterBoss3').append(leaderBoard[1].bossHealth3 + ` health left`);

//     // } else if (leaderBoard[1].round = 1) {
//     //     $('.twoBoss1name').removeClass().addClass('boss1NameDead');
//     //     $('.leaderTwoPurchaseAfterBoss2').empty();
//     //     $('.leaderTwoPurchaseAfterBoss2').append(leaderBoard[1].bossHealth2 + ` health left`);

//     } else if (leaderBoard[1].round = 1) {
//         $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
//         $('.leaderTwoPurchaseAfterBoss2').empty();
//         $('.leaderTwoPurchaseAfterBoss2').append(leaderBoard[1].bossHealth2 + ` health left`);

//     }else console.log('meh')
// }



let bossesKilled2= () => {
    if (leaderBoard[1].round == 4 && leaderBoard[1].bossHealth5 <= 0) {
        $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss4Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss5Name').removeClass().addClass('boss1NameDead');
        $('.leaderTwoPurchaseAfterBoss5').empty();
        $('.leaderTwoPurchasedAfterBoss5').append(leaderBoard[1].health + ` player health left`);
    } else if (leaderBoard[1].round == 4) {
        $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss4Name').removeClass().addClass('boss1NameDead');
        $('.leaderTwoPurchaseAfterBoss5').empty();
        $('.leaderTwoPurchasedAfterBoss5').append(leaderBoard[1].bossHealth5 + ` health left`);
    } else if (leaderBoard[1].round == 3) {
        $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss3Name').removeClass().addClass('boss1NameDead');
        $('.leaderTwoPurchaseAfterBoss4').empty();
        $('.leaderTwoPurchaseAfterBoss4').append(leaderBoard[1].bossHealth4 + ` health left`);
    } else if (leaderBoard[1].round == 2) {
        $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
        $('.twoBoss2Name').removeClass().addClass('boss1NameDead');
        $('.leaderTwoPurchaseAfterBoss3').empty();
        $('.leaderTwoPurchaseAfterBoss3').append(leaderBoard[1].bossHealth3 + ` health left`);
    } else if (leaderBoard[1].round == 1) {
        $('.twoBoss1Name').removeClass().addClass('boss1NameDead');
        $('.leaderTwoPurchaseAfterBoss2').empty();
        $('.leaderTwoPurchaseAfterBoss2').append(leaderBoard[1].bossHealth2 + ` health left`);

    }
}


// //  tracks leader spot 3 bosses killed
let bossesKilled3 = () => {
    if (leaderBoard[2].round === 4 && leaderBoard[2].bossHealth5 <= 0) {
        $('.div3Boss1').removeClass().addClass('boss1NameDead');
        $('.div3Boss2').removeClass().addClass('boss1NameDead');
        $('.div3Boss3').removeClass().addClass('boss1NameDead');
        $('.div3Boss4').removeClass().addClass('boss1NameDead');
        $('.div3Boss5').removeClass().addClass('boss1NameDead');
        $('.leaderThreePurchaseAfterBoss5').empty();
        $('.leaderThreePurchaseAfterBoss5').append(leaderBoard[2].health + ` player health left`);
        console.log(player.health);
        console.log(boss.enemy[4].health);
    } else if (leaderBoard[2].round === 4) {
        $('.div3Boss1').removeClass().addClass('boss1NameDead');
        $('.div3Boss2').removeClass().addClass('boss1NameDead');
        $('.div3Boss3').removeClass().addClass('boss1NameDead');
        $('.div3Boss4').removeClass().addClass('boss1NameDead');
        $('.leaderThreePurchaseAfterBoss5').empty();
        $('.leaderThreePurchaseAfterBoss5').append(leaderBoard[2].bossHealth5 + ` health left`);
    } else if (leaderBoard[2].round === 3) {
        $('.div3Boss1').removeClass().addClass('boss1NameDead');
        $('.div3Boss2').removeClass().addClass('boss1NameDead');
        $('.div3Boss3').removeClass().addClass('boss1NameDead');
        console.log('round3')
        $('.leaderThreePurchaseAfterBoss4').empty();
        $('.leaderThreePurchaseAfterBoss4').append(leaderBoard[2].bossHealth4 + ` health left`);
    } else if (leaderBoard[2].round === 2) {
        $('.div3Boss1').removeClass().addClass('boss1NameDead');
        $('.div3Boss2').removeClass().addClass('boss1NameDead');
        $('.leaderThreePurchaseAfterBoss3').empty();
        $('.leaderThreePurchaseAfterBoss3').append(leaderBoard[2].bossHealth3 + ` health left`);
 
    } else if (leaderBoard[2].round === 1) {
        $('.div3Boss1').removeClass().addClass('boss1NameDead');
        $('.leaderThreePurchaseAfterBoss2').empty();
        $('.leaderThreePurchaseAfterBoss2').append(leaderBoard[2].bossHealth2 + ` health left`);

    }
}
let checkVsLeaderBoard = () => {
    if (player.round > leaderBoard[0].round) {
        let leaderOne = JSON.parse(JSON.stringify(player));
        console.log('spot1');
        leaderBoard.splice(0, 0, leaderOne);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <= leaderBoard[0].currentBossHealth && player.round == leaderBoard[0].round){
        let leaderOne = JSON.parse(JSON.stringify(player));
        console.log('spot1');
        leaderBoard.splice(0, 0, leaderOne);
        leaderBoard.splice(10, 1);
    } else if (player.round > leaderBoard[1].round) {
        let leaderTwo = JSON.parse(JSON.stringify(player));
        console.log('spot2')
        leaderBoard.splice(1, 0, leaderTwo);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[1].currentBossHealth  && player.round == leaderBoard[1].round) {
        let leaderTwo = JSON.parse(JSON.stringify(player));
        console.log('spot2')
        leaderBoard.splice(1, 0, leaderTwo);
        leaderBoard.splice(10, 1);
    } else if (player.round > leaderBoard[2].round) {
        let leaderThree = JSON.parse(JSON.stringify(player));
        console.log('spot3')
        leaderBoard.splice(2, 0, leaderThree);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[2].currentBossHealth  && player.round == leaderBoard[2].round) {
        let leaderThree = JSON.parse(JSON.stringify(player));
        console.log('spot3')
        leaderBoard.splice(2, 0, leaderThree);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[3].currentBossHealth  && player.round >= leaderBoard[3].round) {
        let leaderFour = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(3, 0, leaderFour);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[4].currentBossHealth  && player.round >= leaderBoard[4].round) {
        let leaderFive = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(4, 0, leaderFive);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[5].currentBossHealth  && player.round >= leaderBoard[5].round) {
        let leaderSix = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(5, 0, leaderSix);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <=  leaderBoard[6].currentBossHealth  && player.round >= leaderBoard[6].round) {
        let leaderSeven = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(6, 0, leaderSeven);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <= leaderBoard[7].currentBossHealth  && player.round >= leaderBoard[7].round) {
        let leaderEight = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(7, 0, leaderEight);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <= leaderBoard[8].currentBossHealth  && player.round >= leaderBoard[8].round) {
        let leaderNine = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(8, 0, leaderNine);
        leaderBoard.splice(10, 1);
    } else if (player.currentBossHealth <= leaderBoard[9].currentBossHealth  && player.round >= leaderBoard[9].round) {
        let leaderTen = JSON.parse(JSON.stringify(player));
        leaderBoard.splice(9, 0, leaderTen);
        leaderBoard.splice(10, 1);
    } else {
        console.log('not a top score')
    }
}

let leaderBoardOneDisplay = () => {
    console.log(`leader board before`);
    console.log(player);
    console.log(leaderBoard);
    $('.firstPositionName').empty();
    $('.secondPositionName').empty();
    $('.thirdPositionName').empty();
    $('.fourthPositionName').empty();
    $('.fifthPositionName').empty();
    $('.sixthPositionName').empty();
    $('.seventhPositionName').empty();
    $('.eighthPositionName').empty();
    $('.ninthPositionName').empty();
    $('.tenthPositionName').empty();
    $('.leaderOnePurchaseAfterBoss1').empty();
    $('.leaderOnePurchaseAfterBoss2').empty();
    $('.leaderOnePurchaseAfterBoss3').empty();
    $('.leaderOnePurchaseAfterBoss4').empty();
    $('.leaderOnePurchaseAfterBoss5').empty();
    $('.leaderTwoPurchaseAfterBoss1').empty();
    $('.leaderTwoPurchaseAfterBoss2').empty();
    $('.leaderTwoPurchaseAfterBoss3').empty();
    $('.leaderTwoPurchaseAfterBoss4').empty();
    $('.leaderTwoPurchaseAfterBoss5').empty();
    $('.leaderThreePurchaseAfterBoss1').empty();
    $('.leaderThreePurchaseAfterBoss2').empty();
    $('.leaderThreePurchaseAfterBoss3').empty();
    $('.leaderThreePurchaseAfterBoss4').empty();
    $('.leaderThreePurchaseAfterBoss5').empty();
    checkVsLeaderBoard();
    firstPositionName();
    secondPositionName();
    thirdPositionName();
    fourthPositionName();
    fifthPositionName();
    sixthPositionName();
    seventhPositionName();
    eighthPositionName();
    ninthPositionName();
    tenthPositionName();

    round1HealthBought();
    round2HealthBought();
    round3HealthBought();
    round4HealthBought();
    round1AttackBought();
    round2AttackBought();
    round3AttackBought();
    round4AttackBought();
    round1ArmorBought();
    round2ArmorBought();
    round3ArmorBought();
    round4ArmorBought();
    round1AccuracyBought();
    round2AccuracyBought();
    round3AccuracyBought();
    round4AccuracyBought();
    round1MagicBought();
    round2MagicBought();
    round3MagicBought();
    round4MagicBought();
    round2FireballBought();
    round3FireballBought();
    round4FireballBought();
    round2BladeBought();
    round3BladeBought();
    round4BladeBought();
    round1HealthBought2();
    round2HealthBought2();
    round3HealthBought2();
    round4HealthBought2();
    round1AttackBought2();
    round2AttackBought2();
    round3AttackBought2();
    round4AttackBought2();
    round1ArmorBought2();
    round2ArmorBought2();
    round3ArmorBought2();
    round4ArmorBought2();
    round1AccuracyBought2();
    round2AccuracyBought2();
    round3AccuracyBought2();
    round4AccuracyBought2();
    round1MagicBought2();
    round2MagicBought2();
    round3MagicBought2();
    round4MagicBought2();
    round2FireballBought2();
    round3FireballBought2();
    round4FireballBought2();
    round2BladeBought2();
    round3BladeBought2();
    round4BladeBought2();
    round1HealthBought3();
    round2HealthBought3();
    round3HealthBought3();
    round4HealthBought3();
    round1AttackBought3();
    round2AttackBought3();
    round3AttackBought3();
    round4AttackBought3();
    round1ArmorBought3();
    round2ArmorBought3();
    round3ArmorBought3();
    round4ArmorBought3();
    round1AccuracyBought3();
    round2AccuracyBought3();
    round3AccuracyBought3();
    round4AccuracyBought3();
    round1MagicBought3();
    round2MagicBought3();
    round3MagicBought3();
    round4MagicBought3();
    round2FireballBought3();
    round3FireballBought3();
    round4FireballBought3();
    round2BladeBought3();
    round3BladeBought3();
    round4BladeBought3();
    console.log(player);
    console.log(`leader board after`);
    console.log(leaderBoard);
    console.log(leaderTwo);
    console.log(leaderOne);
    bossesKilled();
    bossesKilled2();
    bossesKilled3();
}
console.log(leaderBoard[1].currentBossHealth)
console.log(leaderBoard[1].bossHealth5)
console.log(leaderBoard[1].round)
leaderBoardOneDisplay();

changeStage();