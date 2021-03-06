import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./gameEngine";

export class Player implements GameObject
{
    public position: Vector
    public gameEngine: GameEngine

    public speed:number = 40;
    public height:number = 60;
    public width: number = 10;

    constructor(pos:Vector, eng: GameEngine){
        this.position = pos;
        this.gameEngine = eng;
    }

    moveObject(time: number): void{
        if(this.gameEngine.direction == "up" && this.position.y >60)
        {
            this.position.y -= time/1000 * this.speed;
        }
        if(this.gameEngine.direction == "down" && this.position.y <400)
        {
            this.position.y += time/1000 * this.speed; 
        }

    }

     /*moveObject(time: number): void{
        if(this.gameEngine.keyPressUp)
        {
            this.position.y -= time/1000 * this.speed;
        }
        if(this.gameEngine.keyPressDown)
        {
            this.position.y += time/1000 * this.speed; 
        }

    }*/

    onCollision(obj: GameObject): void
    {
        
    }

    drawObject(ctx: CanvasRenderingContext2D): void
    {
        ctx.fillRect(this.position.x-this.width,this.position.y-this.height,this.width,this.height);
    }


}