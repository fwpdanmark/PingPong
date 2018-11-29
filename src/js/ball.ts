import {Vector} from "./vector";
import {GameObject} from "./gameObject";
import { GameEngine } from "./gameEngine";

export class Ball implements GameObject
{
    public height: number;
    public width: number;
    public position: Vector;
    public speed: number = 60;
    public direction: Vector;
    public gameEngine: GameEngine
   


    constructor(pos:Vector, eng: GameEngine){
        this.height = 10;
        this.width = 10;
        this.position = pos;
        this.direction = new Vector(0.7,1);
        this.gameEngine = eng;
    }
    
    onCollision(obj: GameObject): void{
        if(obj == this.gameEngine.player1 || obj == this.gameEngine.ai){
            this.direction.x *=-1;
        }

    }

    moveObject(time: number): void {
     
        if (this.position.x <=0 ||this.position.x >= this.gameEngine.cwidth-this.width)
        {
        this.direction.x *= -1;
            if(this.position.x < 50){
                this.gameEngine.aiScore++;
            }else if(this.position.x >650){
                this.gameEngine.playerScore++;
            }
        }
        if (this.position.y <=0 ||this.position.y >= this.gameEngine.cheight-this.height)
        {
            this.direction.y *= -1;
        } 

      
       
               
        this.position.x += this.direction.x * this.speed * time/1000;
        this.position.y += this.direction.y * this.speed * time/1000;
    }

    drawObject(ctx: CanvasRenderingContext2D): void
    {
        ctx.fillRect(this.position.x,this.position.y, this.width,this.height)
    }
}
