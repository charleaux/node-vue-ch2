new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        youHealth: 100,
        monsterHealth: 100,
        attackMax: 10,
        attackMin: 3,
        specialAttackMax: 20,
        specialAttackMin: 10,
        healMax: 25,
        healMin: 10,
        monsterAttackMax: 12,
        monsterAttackMin: 5,
        attackLog: []
    },
    methods: {
        attack: function () {
            var damage = this.calculateDamage(this.attackMin, this.attackMax);
            this.monsterHealth - damage <= 0 ? this.monsterHealth = 0 : this.monsterHealth -= damage;
            this.attackLog.unshift({isPlayer: true, message: `PLAYER HITS MONSTER FOR ${damage}!`})
            if (!this.checkWin()) {
                this.monsterAttack();
            }     
        },
        specialAttack: function () {
            var damage = this.calculateDamage(this.specialAttackMin, this.specialAttackMax);
            this.monsterHealth - damage <= 0 ? this.monsterHealth = 0 : this.monsterHealth -= damage;
            this.attackLog.unshift({isPlayer: true, message: `PLAYER HITS MONSTER FOR ${damage} WITH A SPECIAL ATTACK!`})
            if (!this.checkWin()) {
                this.monsterAttack();
            }    
        },
        heal: function () {
            var healAmt = this.calculateDamage(this.healMin, this.healMax);
            this.youHealth + healAmt >= 100 ? this.youHealth = 100 : this.youHealth += healAmt;
            this.attackLog.unshift({isPlayer: true, message: `PLAYER HEALS FOR ${healAmt}`})
            if (!this.checkWin()) {
                this.monsterAttack();
            }   
        },
        startGame: function () {
            this.youHealth = 100;
            this.monsterHealth = 100;
            this.gameStarted = true;
            this.attackLog = [];
        },
        giveUp: function () {
            this.gameStarted = false;
            this.attackLog = [];
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(this.monsterAttackMin, this.monsterAttackMax);
            this.youHealth - damage <= 0 ? this.youHealth = 0 : this.youHealth -= damage;
            this.attackLog.unshift({isPlayer: false, message: `MONSTER HITS PLAYER FOR ${damage}`})
            this.checkWin();   
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);;
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if(confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            } else if (this.youHealth <= 0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            }
            return false;

        }
    }
});