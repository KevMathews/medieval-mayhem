// ////////////////////////////////////
// ///  kevinmathews.cs@gmail.com   ///
// ////////////////////////////////////
let bladeCounter = 0;
let lightningBoltCounter = 2;
let fireBallCounter = 0;
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
    health: -200,
    attack: '20',
    armor: '2',
    accuracy: '80',
    magic: '65',
    round: 1,
    bossHealth1: -10,
    bossHealth2: 25,
    bossHealth3: 0,
    bossHealth4: 0,
    bossHealth5: 0,
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
let leaderTwo = {
    name: '',
};
let leaderThree = {};
let leaderFour = {};
let leaderFive = {};
let leaderSix = {};
let leaderSeven = {};
let leaderEight = {};
let leaderNine = {};
let leaderTen = {};

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
        this.health = 50;
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
        defeat();
        conditionalLeaderBoardCategories();
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
        conditionalLeaderBoardCategories();
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
        console.log(play.purchased);
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
    player.health = 50;
    player.accuracy = 80;
    player.armor = 5;
    player.damage = 20;
    player.gold = 0;
    player.magicAccuracy = 65;
    player.magicBladeLearned = false;
    player.fireBallLearned = false;
    player.round = 0;
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
}
// function to show countdown timer and then restart game
$('.resetGameButton').on('click', () => {
    restartGame();
    setTimeout(function(){
        resetGame();
    }, 5900);
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
    console.log(player.purchased[0].purchasedHealth);



let conditionalLeaderBoardCategories = () => {
    console.log(leaderBoard[0]);
    checkVsLeaderBoard();
    bossesKilled();

    leaderBoardOneDisplay();
    
    
    console.log(leaderBoard[0]);
    
}
//  Leader Board Display
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
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedHealth + '<br />');
    }
}
let round3HealthBought = () => {
    if (leaderBoard[0].purchased[2].purchasedHealth > 0){
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedHealth + '<br />');
    }
}
let round4HealthBought = () => {
    if (leaderBoard[0].purchased[3].purchasedHealth > 0){
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/heart3.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedHealth + '<br />');
    }
}
let round1AttackBought = () => {
    if (leaderBoard[0].purchased[0].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss1').empty();
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedAttack + '<br />');
    }
}
let round2AttackBought = () => {
    if (leaderBoard[0].purchased[1].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedAttack + '<br />');
    }
}
let round3AttackBought = () => {
    if (leaderBoard[0].purchased[2].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedAttack + '<br />');
    }
}
let round4AttackBought = () => {
    if (leaderBoard[0].purchased[3].purchasedAttack > 0){
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/attackicon.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedAttack + '<br />');
    }
}
let round1ArmorBought = () => {
    if (leaderBoard[0].purchased[0].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss1').empty();
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedArmor + '<br />');
    }
}
let round2ArmorBought = () => {
    if (leaderBoard[0].purchased[1].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedArmor + '<br />');
    }
}
let round3ArmorBought = () => {
    if (leaderBoard[0].purchased[2].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedArmor + '<br />');
    }
}
let round4ArmorBought = () => {
    if (leaderBoard[0].purchased[3].purchasedArmor > 0){
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/armor.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedArmor + '<br />');
    }
}
let round1AccuracyBought = () => {
    if (leaderBoard[0].purchased[0].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss1').empty();
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedAccuracy + '<br />');
    }
}
let round2AccuracyBought = () => {
    if (leaderBoard[0].purchased[1].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedAccuracy + '<br />');
    }
}
let round3AccuracyBought = () => {
    if (leaderBoard[0].purchased[2].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedAccuracy + '<br />');
    }
}
let round4AccuracyBought = () => {
    if (leaderBoard[0].purchased[3].purchasedAccuracy > 0){
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/accuracy.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedAccuracy + '<br />');
    }
}
let round1MagicBought = () => {
    if (leaderBoard[0].purchased[0].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss1').empty();
        $('.leaderOnePurchaseAfterBoss1').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[0].purchasedMagic + '<br />');
    }
}
let round2MagicBought = () => {
    if (leaderBoard[0].purchased[1].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[1].purchasedMagic + '<br />');
    }
}
let round3MagicBought = () => {
    if (leaderBoard[0].purchased[2].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss3').empty();
        $('.leaderOnePurchaseAfterBoss3').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[2].purchasedMagic + '<br />');
    }
}
let round4MagicBought = () => {
    if (leaderBoard[0].purchased[3].purchasedMagic > 0){
        $('.leaderOnePurchaseAfterBoss4').empty();
        $('.leaderOnePurchaseAfterBoss4').append(`<img src='./images/magicaccuracy.png' />` + 'x' + leaderBoard[0].purchased[3].purchasedMagic + '<br />');
    }
}
let round2FireballBought = () => {
    if (player.purchased[1].learnedFireball > 0){
        $('.purchaseAfterBoss2').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3FireballBought = () => {
    if (player.purchased[2].learnedFireball > 0){
        $('.purchaseAfterBoss3').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4FireballBought = () => {
    if (player.purchased[3].learnedFireball > 0){
        $('.purchaseAfterBoss4').append(`<img src='./images/fireball.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round2BladeBought = () => {
    if (player.purchased[1].learnedBlade > 0){
        $('.purchaseAfterBoss2').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round3BladeBought = () => {
    if (player.purchased[2].learnedBlade > 0){
        $('.purchaseAfterBoss3').append(`<img src='./images/blade.png' />&nbsp;&nbsp;`  + '<br />');
    }
}
let round4BladeBought = () => {
    if (player.purchased[3].learnedBlade > 0){
        $('.purchaseAfterBoss4').append(`<img src='./images/blade.png' />`  + '<br />');
    }
}

let bossesKilled = () => {
    if (leaderBoard[0].round === 4 && leaderBoard[0].bossHealth5 <= 0) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss2Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss3Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss4Name').removeClass().addClass('boss1NameDead');
        $('.oneBoss5Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss5').empty();
        $('.leaderOnePurchasedAfterBoss5').append(leaderBoard[0].health + ` player health left`);
        console.log(player.health);
        console.log(boss.enemy[4].health);
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
        console.log(boss.enemy[1].health);
        console.log(player.round);
    } else if (leaderBoard[0].round === 1) {
        $('.oneBoss1Name').removeClass().addClass('boss1NameDead');
        $('.leaderOnePurchaseAfterBoss2').empty();
        $('.leaderOnePurchaseAfterBoss2').append(leaderBoard[0].bossHealth2 + ` health left`);
        console.log(boss.enemy[1].health);
        console.log(player.round);
    }
}

let checkVsLeaderBoard = () => {
    if (player.health > leaderBoard[0].health && player.round >= leaderBoard[0].round){
        // saveToLeaderBoardTop();
        leaderBoard.splice(0, 0, player);
        leaderBoard.splice(10, 1);
        console.log(player);
        console.log(leaderBoard);
        console.log(leaderBoard[0]);
        console.log(leaderBoard[0].damage);
    } else if (player.health > leaderBoard[1].health && player.round >= leaderBoard[1].round) {
        saveToLeaderBoardSecond();
        leaderBoard.splice(1, 0, player);
        leaderBoard.splice(10, 1);
        console.log(player);
        console.log(leaderBoard);
        console.log(leaderBoard[0]);
        console.log(leaderBoard[0].damage);
    } else if (player.health > leaderBoard[2].health && player.round >= leaderBoard[2].round) {
        saveToLeaderBoardThird();
        leaderBoard.splice(2, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[3].health && player.round >= leaderBoard[3].round) {
        saveToLeaderBoardFourth();
        leaderBoard.splice(3, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[4].health && player.round >= leaderBoard[4].round) {
        saveToLeaderBoardFive();
        leaderBoard.splice(4, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[5].health && player.round >= leaderBoard[5].round) {
        saveToLeaderBoardSix();
        leaderBoard.splice(5, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[6].health && player.round >= leaderBoard[6].round) {
        saveToLeaderBoardSeven();
        leaderBoard.splice(6, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[7].health && player.round >= leaderBoard[7].round) {
        saveToLeaderBoardEight();
        leaderBoard.splice(7, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[8].health && player.round >= leaderBoard[8].round) {
        saveToLeaderBoardNine();
        leaderBoard.splice(8, 0, player);
        leaderBoard.splice(10, 1);
    } else if (player.health > leaderBoard[9].health && player.round >= leaderBoard[9].round) {
        saveToLeaderBoardTen(); 
        leaderBoard.splice(9, 0, player);
        leaderBoard.splice(10, 1);
    } else {

    }
}

let saveToLeaderBoardTop = () => {
    leaderBoard[0].name = player.name;
    leaderBoard[0].health = player.health;
    leaderBoard[0].health = player.health;
    leaderBoard[0].attack = player.damage;
    leaderBoard[0].armor = player.armor;
    leaderBoard[0].accuracy = player.accuracy;
    leaderBoard[0].magic = player.magicAccuracy;
    leaderBoard[0].round = player.round;
    leaderBoard[0].purchased = player.purchased;
    leaderBoard[0].bossHealth1 = boss.enemy[0].health;
    leaderBoard[0].bossHealth2 = boss.enemy[1].health;
    leaderBoard[0].bossHealth3 = boss.enemy[2].health;
    leaderBoard[0].bossHealth4 = boss.enemy[3].health;
    leaderBoard[0].bossHealth5 = boss.enemy[4].health;   
}

let saveToLeaderBoardSecond = () => {
    leaderBoard[1].name = player.name;
    leaderBoard[1].health = player.health;
    leaderBoard[1].health = player.health;
    leaderBoard[1].attack = player.damage;
    leaderBoard[1].armor = player.armor;
    leaderBoard[1].accuracy = player.accuracy;
    leaderBoard[1].magic = player.magicAccuracy;
    leaderBoard[1].round = player.round;
    leaderBoard[1].purchased = player.purchased;
    leaderBoard[1].bossHealth4 = boss.enemy[3].health;
    leaderBoard[1].bossHealth5 = boss.enemy[4].health;   
}

let saveToLeaderBoardThird = () => {
    leaderBoard[2].name = player.name;
    leaderBoard[2].health = player.health;
    leaderBoard[2].health = player.health;
    leaderBoard[2].attack = player.damage;
    leaderBoard[2].armor = player.armor;
    leaderBoard[2].accuracy = player.accuracy;
    leaderBoard[2].magic = player.magicAccuracy;
    leaderBoard[2].round = player.round;
    leaderBoard[2].purchased = player.purchased;
    leaderBoard[2].bossHealth4 = boss.enemy[3].health;
    leaderBoard[2].bossHealth5 = boss.enemy[4].health;   
}

let leaderBoardOneDisplay = () => {
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
    
    firstPositionName();
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
    bossesKilled();
}


leaderBoardOneDisplay();
console.log(leaderBoard[0].name)
changeStage();