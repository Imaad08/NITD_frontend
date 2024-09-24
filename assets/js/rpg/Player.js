import GameEnv from './GameEnv.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate

class Player {
    constructor(sprite = null) {
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        if (sprite) {
            this.scaleFactor = sprite.data.SCALE_FACTOR || SCALE_FACTOR;
            this.stepFactor = sprite.data.STEP_FACTOR || STEP_FACTOR;
            this.animationRate = sprite.data.ANIMATION_RATE || ANIMATION_RATE;

            this.spriteSheet = new Image();
            this.spriteSheet.src = sprite.src;

            this.frameIndex = 0;
            this.frameCounter = 0;
            this.direction = 'down'; // Initial direction
            this.spriteData = sprite.data;
        } else {
            this.scaleFactor = SCALE_FACTOR;
            this.stepFactor = STEP_FACTOR;
            this.animationRate = ANIMATION_RATE;
            this.spriteSheet = null;
        }

        this.size = GameEnv.innerHeight / this.scaleFactor;
        this.position = { x: 0, y: GameEnv.innerHeight - this.size };
        this.velocity = { x: 0, y: 0 };
        this.resize();
        this.markedPoint = { x: 300, y: 300 };
        this.bindEventListeners();
    }

    resize() {
        const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };
        this.position.x = (this.position.x / this.scale.width) * newScale.width;
        this.position.y = (this.position.y / this.scale.height) * newScale.height;
        this.scale = newScale;
        this.size = this.scale.height / this.scaleFactor;
        this.xVelocity = this.scale.width / this.stepFactor;
        this.yVelocity = this.scale.height / this.stepFactor;
        this.width = this.size;
        this.height = this.size;
    }

    draw() {
        if (this.spriteSheet) {
            const frameWidth = this.spriteData.pixels.width / this.spriteData.orientation.columns;
            const frameHeight = this.spriteData.pixels.height / this.spriteData.orientation.rows;
            const directionData = this.spriteData[this.direction];
            let frameX, frameY;
            frameX = (directionData.start + this.frameIndex) * frameWidth;
            frameY = directionData.row * frameHeight;

            GameEnv.ctx.drawImage(
                this.spriteSheet,
                frameX, frameY, frameWidth, frameHeight,
                this.position.x, this.position.y, this.width, this.height
            );

            this.frameCounter++;
            if (this.frameCounter % this.animationRate === 0) {
                this.frameIndex = (this.frameIndex + 1) % directionData.columns;
            }
        } else {
            GameEnv.ctx.fillStyle = 'red';
            GameEnv.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        this.drawMarkedPoint();
    }

    drawMarkedPoint() {
        GameEnv.ctx.fillStyle = "blue";
        GameEnv.ctx.fillRect(this.markedPoint.x, this.markedPoint.y, 10, 10);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.checkIfAtMarkedPoint();

        // Canvas boundary checks
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
            this.velocity.y = 0;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
            this.velocity.x = 0;
        }
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    }

    checkIfAtMarkedPoint() {
        if (
            this.position.x < this.markedPoint.x + 10 &&
            this.position.x + this.width > this.markedPoint.x &&
            this.position.y < this.markedPoint.y + 10 &&
            this.position.y + this.height > this.markedPoint.y
        ) {
            console.log("hi");
        }
    }

    bindEventListeners() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        switch (event.code) {
            case 'KeyW':
                this.velocity.y = -this.yVelocity;
                this.direction = 'up';
                break;
            case 'KeyS':
                this.velocity.y = this.yVelocity;
                this.direction = 'down';
                break;
            case 'KeyA':
                this.velocity.x = -this.xVelocity;
                this.direction = 'left';
                break;
            case 'KeyD':
                this.velocity.x = this.xVelocity;
                this.direction = 'right';
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.code) {
            case 'KeyW':
            case 'KeyS':
                this.velocity.y = 0;
                break;
            case 'KeyA':
            case 'KeyD':
                this.velocity.x = 0;
                break;
        }
    }
}

export default Player;
