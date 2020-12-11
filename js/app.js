let player_One;

$playerHealth = $('.playerHealth');
$storeMessage = $('#storeMessage');
$playerGold = $('.playerGold');
$playerArmor = $('.playerArmor');
$playerAccuracy = $('.playerAccuracy');
$playerDualWield = $('.playerDualWield');
$playerDualWieldAccuracy = $('.playerDualWieldAccuracy');
$playerText = $('#playerCombatText');
$playerName = $('.playerName');
$enemyText = $('#enemyCombatText');
$bossName = $('.bossName');
$bossHealth = $('.bossHealth');
$bossArmor = $('.bossArmor');
$dualWield = $('#dualWield');
$progressBar = $('.progress-bar');
$enemyPicture = $('#enemyPicture');
$playerPicture = $('#playerPicture');
$playerDamageDiv = $('#playerDamageDiv');
$enemyDamageDiv = $('#enemyDamageDiv');
$body = $('body');

class Player {
    constructor(name){
        this.maxHealth = 200.00;
        this.health = 200.00;
        this.healthPercent = 100;
        this.energy = 100;
        this.armor = 5;
        this.name = name;
        this.accuracy = .8;
        this.dualWieldAccuracy = .8;
        this.damage = 20;
        this.gold = 0;
        this.dualWield = 'Not Learned';
        this.magicBladeAccuracy = .65;
        this.magicBladeDamage = 30;
        this.lightningBoltAccuracy = .65;
        this.lightningBoltDamage = 45;
        this.fireBallAccuracy = .65;
        this.fireballDamage = 60;
        this.lightningBoltLearned = 'No';
        this.fireBallLearned = 'No';
        this.damageJustDone = null;
    }
    showDamageDone() {
        
        setTimeout(function(){ $enemyDamageDiv.text(`-${player.damageJustDone}!`).css('opacity', '100%').css('color', 'red').css('font-style', 'italic'); }, 1000);
        
        setTimeout(function(){ $enemyDamageDiv.css('opacity', '0%'); }, 2500);
    }
    showPlayerMiss() {
        setTimeout(function(){ $enemyDamageDiv.text(`Miss`).css('opacity', '100%').css('color', 'black').css('font-style', 'normal'); }, 1000);
        
        setTimeout(function(){ $enemyDamageDiv.css('opacity', '0%'); }, 2500);
    }   
    fireBall(){
        let randomNumber = Math.random();
        if (randomNumber <= player.fireBallAccuracy){
            let damageDone = this.fireballDamage - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} hurl a FireBall at ${boss.enemy[currentEnemy].name} scorching them for ${damageDone} DAMAGE!!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack3.gif');
            
            
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
        }else {
            $playerText.text(`${player.name} throws a FireBall at ${boss.enemy[currentEnemy].name} but they DODGE the attack!!`);
            $playerPicture.attr('src', './images/player1attack3.gif');
            
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
                player.showPlayerMiss();
            }
    }
    lightningBolt(){
        let randomNumber = Math.random();
        if (randomNumber <= player.accuracy){
            let damageDone = this.lightningBoltDamage - boss.enemy[currentEnemy].armor;
            
            $playerText.text(`${player.name} flings their Magic Blade at ${boss.enemy[currentEnemy].name} hitting them for ${damageDone} DAMAGE!!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack4.gif');
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
        }else {
            $playerText.text(`${player.name} throws their Magic Blade at ${boss.enemy[currentEnemy].name} MISSING badly!`);
            $playerPicture.attr('src', './images/player1attack4.gif');
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
                player.showPlayerMiss();
        }
    }
    magicBlade(){
        let randomNumber = Math.random();
        if (randomNumber <= player.magicBladeAccuracy){
            let damageDone = this.magicBladeDamage - boss.enemy[currentEnemy].armor;
            
            $playerText.text(`${player.name} flings their Magic Blade at ${boss.enemy[currentEnemy].name} hitting them for ${damageDone} DAMAGE!!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            $playerPicture.attr('src', './images/player1attack2.gif');
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
        }else {
            $playerText.text(`${player.name} throws their Magic Blade at ${boss.enemy[currentEnemy].name} MISSING badly!`);
            $playerPicture.attr('src', './images/player1attack2.gif');
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 800);
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 800);
                player.showPlayerMiss();
        }
    }
    dualWieldAttack() {
        let randomNumber = Math.random();
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

    attack(){
        let randomNum = Math.random();
        if (randomNum < player.accuracy) {
            let damageDone = this.damage - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} strikes ${boss.enemy[currentEnemy].name}  with their sword for ${damageDone} DAMAGE!`);
            boss.enemy[currentEnemy].health -= damageDone;
            this.damageJustDone = damageDone;
            player.showDamageDone();
            $playerPicture.attr('src', './images/player1attack.gif');
            
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 1500);
                player.displayStats();
            checkIfDead();
            
            
            }else{
                $playerPicture.attr('src', './images/player1attack.gif');
                setTimeout(
                    function() 
                    {
                        player.displayStats();
                    }, 4600);
                $playerText.text(`${player.name} swings at ${boss.enemy[currentEnemy].name} but MISSES!`);
                
            checkIfDead();
            setTimeout(
                function() 
                {
                    $playerPicture.attr('src', './images/player1idle.gif');
                    
                }, 1600);
                player.showPlayerMiss();
        }
    }
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
        $playerAccuracy.empty();
        $playerAccuracy.text(player.accuracy);
        $playerDualWield.empty();
        $playerDualWield.text(player.dualWield);
        $playerDualWieldAccuracy.empty();
        $playerDualWieldAccuracy.text(player.dualWieldAccuracy);
        $bossHealth.empty();
        $bossHealth.text(boss.enemy[currentEnemy].health);
        $bossArmor.empty();
        $bossArmor.text(boss.enemy[currentEnemy].armor);
        $bossName.empty();
        $bossName.text(boss.enemy[currentEnemy].name);
        if (this.dualWield == 'Learned'){
            $dualWield.css('display', 'inline-block');
        }

    }
    
}

class Enemy {
    constructor(){
        this.energy = 50;
        this.maxHealth = 30;
        this.health = 30;
        this.armor = 2;
        this.accuracy = .5;
        this.damage = 10;
        this.weapon1 = true;
        this.weapon2 = false;
        this.weapon3 = false;
        this.weapon4 = false;
        this.weapon5 = false;
        this.damageJustDone = null;
    }
    showDamageDone() {
        
        setTimeout(function(){ $playerDamageDiv.text(`-${boss.enemy[currentEnemy].damageJustDone}!`).css('opacity', '100%').css('color', 'red').css('font-style', 'italic'); }, 1000);
        
        setTimeout(function(){ $playerDamageDiv.css('opacity', '0%'); }, 2500);
    }
    showEnemyMiss() {
        setTimeout(function(){ $playerDamageDiv.text(`Miss`).css('opacity', '100%').css('color', 'black').css('font-style', 'normal'); }, 1000);
        
        setTimeout(function(){ $playerDamageDiv.css('opacity', '0%'); }, 2500);
    }   
    enemy5Attack(){
        if (Math.random() < this.accuracy){
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy5attack.gif');
                }, 1000);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy5idle.gif');
                    }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();
            
            $enemyText.text(`${this.name} Belches a mighty Burst of Fire at ${player.name} and scorches them for ${damageDone} DAMAGE!`);
            checkPlayerDead();
            player.displayStats();
                }else {
                    $enemyText.text(`${this.name} Unleashes a mighty Burst of Fire, but ${player.name} skillfully DODGES away!`);
                player.displayStats();
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy5attack.gif');
                    }, 1000);
                    setTimeout(
                        function() 
                        {
                            $enemyPicture.attr('src', './images/enemy5idle.gif');
                        }, 2000);
                    this.showEnemyMiss();
        }
    }
    enemy4Attack(){
        if (Math.random() < this.accuracy){
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy4attack.gif');
                }, 1000);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy4idle.gif');
                    }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();

            
            $enemyText.text(`${this.name} hurls a Kinetic Bolt at ${player.name} for ${damageDone} DAMAGE with his wand!`);
            checkPlayerDead();
            player.displayStats();
                }else {
                $enemyText.text(`${this.name} Hurls a bolt of Energy from his Wand towards ${player.name} but MISSES!`);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy4attack.gif');
                    }, 1000);
                    setTimeout(
                        function() 
                        {
                            $enemyPicture.attr('src', './images/enemy4idle.gif');
                        }, 2000);
                    this.showEnemyMiss();
                player.displayStats();
        }
    }
    enemy3Attack(){
        if (Math.random() < this.accuracy){
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy3attack2.gif');
                }, 900);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy3idle.gif');
                    }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();

            
            $enemyText.text(`${this.name} summons his trusty companion Fang who bites ${player.name} for ${damageDone} DAMAGE!`);
            checkPlayerDead();
            player.displayStats();
                }else {$enemyText.text(`${this.name} calls his companion Fang who bites at ${player.name} but MISSES!!`);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy3attack2.gif');
                    }, 900);
                    setTimeout(
                        function() 
                        {
                            $enemyPicture.attr('src', './images/enemy3idle.gif');
                        }, 2000);
                    this.showEnemyMiss();
                player.displayStats();
            }
    }
    enemy2Attack(){
        if (Math.random() < this.accuracy){
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy2attack.gif');
                }, 800);
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy2idle.gif');
                    }, 2000);
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            this.damageJustDone = damageDone;
            this.showDamageDone();

            
            $enemyText.text(`${this.name} lurch forward and pierce ${player.name} for ${damageDone} DAMAGE!!`);
            checkPlayerDead();
            player.displayStats();
                }else{
                    $enemyText.text(`${this.name} inches forth towards ${player.name} on but MISSES the attack!`);
                    setTimeout(
                        function() 
                        {
                            $enemyPicture.attr('src', './images/enemy2attack.gif');
                        }, 800);
                        setTimeout(
                            function() 
                            {
                                $enemyPicture.attr('src', './images/enemy2idle.gif');
                            }, 2000);
                        this.showEnemyMiss();
                player.displayStats();
        }
    }
    enemy1Attack(){
        if ((Math.random() < this.accuracy)){
        
        
                $enemyPicture.attr('src', './images/enemy1attack.gif');
            
        let damageDone = this.damage - player.armor;
        player.health -= damageDone;
        
        this.damageJustDone = damageDone;
        this.showDamageDone();
       
        
        $enemyText.text(`${this.name} lets an arrow fly from his trusty bow and hits ${player.name} for ${damageDone} damage!`);
        checkPlayerDead();
        player.displayStats();
        
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy1idle.gif');
                }, 2000);
            }else{
                $enemyPicture.attr('src', './images/enemy1attack.gif');
                this.showEnemyMiss();
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy1idle.gif');
                    }, 2000);
                    $enemyText.text(`${this.name} shoots an arrow at ${player.name} and MISSES!`);
                    // setTimeout(
                    //     function() 
                    //     {
                            
                    //     }, 1000);
                    player.displayStats();
    }};
    //  was caught up here trying to figure out why my enemyHit()was working spent like for 45 ish mins and it was because of a single = instead of a double == argh!!! :(
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
    lightningBolt(){
        let damageDone = (this.damage * 2.5) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} hits you with a bolt of lightning for ${damageDone}`);
        player.displayStats();
    }
    doubleAttack(){
        let damageDone = (this.damage * 2) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} attacks you twice for ${damageDone}`);
        player.displayStats();
    }
    shieldBash(){
        $enemyText.text(`${this.name} bashes you for 7 damage`);
        let damageDone = 7 - player.armor;
        player.health -= damageDone;
        player.displayStats();
    };
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
//  owned, cost, damage, armor, healing
const weaponsOwned = {
    item1: [1, 0, 20],
    item2: [0, 20, 30],
    item3: [0, 30, 40],
    item4: [0, 40, 50],
    item5: [0, 50, 60]
}

const player = new Player();

const boss = new EnemyBoss();
boss.createEnemies(1);
boss.createEnemies(2);
boss.createEnemies(3);
boss.createEnemies(4);
boss.createEnemies(5);

let currentEnemy = 0;
let reportedEnemy = 1;

let checkPlayerDead = function() {
    if (player.health <= 0){
        $playerPicture.attr('src', './images/player1death2.gif');
    }
}

let checkIfDead = function(){
    if (boss.enemy[4].health <= 0){
        player.displayStats();
        /// load boss 5 death gif here with timeout
        setTimeout(
            function() 
            {
                $enemyPicture.attr('src', './images/enemy5death.gif');
            }, 500);
        // load celebratory player image with timeout//
        // reset game button popsup 
        console.log(`you have won!`);
        
            }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 3){
            // load boss 4 death gif here with settimout
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy4death.gif');
                }, 500);
            $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
            currentEnemy ++;
            reportedEnemy ++;
            player.gold += 20;
            console.log(player);
            player.displayStats();
            // load boss 5 idle image here
            setTimeout(
                function() 
                {
                    $enemyPicture.attr('src', './images/enemy5idle.gif');
                }, 5800);

                }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 2){
                // load boss 3 death gif here with settimeout
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy3death.gif');
                    }, 500);
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                // load boss 4 idle image here
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy4idle.gif');
                    }, 5800);
                
                }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 1){
                // load boss 2 death gif here with settimeout
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy2death.gif');
                    }, 500);
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                // load boss 3 idle image here
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy3idle.gif');
                    }, 5800);
                
                }else if(boss.enemy[0].health <= 0 && currentEnemy == 0){
                // load boss 1 death gif here with settimeout
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy1dead.gif');
                    }, 500);
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                // load boss 2 idle image here
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', './images/enemy2idle.gif');
                    }, 5800);
                
                } else {
                    // might need a settimeout here to delay from player to enemy attack animation and text
                    boss.enemy[currentEnemy].enemyHit();
                    console.log(boss.enemy[currentEnemy]);
    }
}


$(document).ready(function() {
        $("#newGame").submit(function(e) {
        e.preventDefault();
        var player_One = $('#nameOne').val();
        player.name = player_One;
        player.displayStats();
    });
  });

  $('.fancy').click(function(){
      $('#startbutton').css('visibility', 'visible');
  })

//  updates/sets stats on various bosses
boss.enemy[0].name='Taz\'dingo';
boss.enemy[1].weapon2 = true;
boss.enemy[1].name = 'Pozzik & Sluggo';
boss.enemy[1].damage = 20;
boss.enemy[1].health = 40;
boss.enemy[1].armor = 5;
boss.enemy[2].weapon3 = true;
boss.enemy[2].name = 'Goldrinn';
boss.enemy[2].damage = 20;
boss.enemy[2].health = 50;
boss.enemy[2].armor = 8;
boss.enemy[3].name='Djinn';
boss.enemy[3].damage = 40;
boss.enemy[3].health = 50;
boss.enemy[3].weapon4 = true;
boss.enemy[3].armor = 11;
boss.enemy[4].name='Vaelastrasz';
boss.enemy[4].damage = 60;
boss.enemy[4].health = 70;
boss.enemy[4].weapon5 = true;
boss.enemy[4].armor = 14;



///  upgrade store modal
$('#upgradeStore').on('click', () => {
    document.getElementById("myModal").style.display = "block";
})

$('#buyHealthUpgrade').on('click', () => {
    if (player.gold >= 10 ){
            player.health += 5;
            player.gold -= 10;
            player.displayStats();
        }else {
        $storeMessage.text(`Sorry you don\'t have enough Gold to buy a Health upgrade`);
        }});

$('#buyArmorUpgrade').on('click', () => {
    if (player.gold >= 10 ){
        player.armor += 2;
        player.gold -= 10;
        player.displayStats();
            }else {
                $storeMessage.text(`Sorry you don\'t have enough Gold to buy an Armor upgrade`);
                }});        

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


//  close upgrade store popup
// let span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//     document.getElementById("myModal").style.display = "none";
//   }

  //  player attack
$('#attackButton').on('click', ()=>{
    player.attack()
})

// player dual wield attack
$('#dualWield').on('click', ()=>{
    player.dualWieldAttack();
})

$('#magicBladeButton').on('click', ()=>{
    player.magicBlade();
})

$('#lightningButton').on('click', ()=>{
    player.lightningBolt();
})
$('#fireBallButton').on('click', ()=>{
    player.fireBall();
})

let changeStage = function() {
    let randStage = Math.random();
    if (randStage < .25){
        $body.css('background-image','url(./images/game_background_1.png)').css('width', '100%');
}else if (randStage >= .25 &&  randStage < .5){
        $body.css('background-image','url(./images/game_background_2.png)').css('width', '100%');
}else if (randStage >= .5 &&  randStage < .75){
    $body.css('background-image','url(./images/game_background_3.png)').css('width', '100%');
}else if (randStage >= .75 &&  randStage <= 1){
    $body.css('background-image','url(./images/game_background_4.png)').css('width', '100%');
}
}
changeStage();