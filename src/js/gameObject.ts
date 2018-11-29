import {Vector} from "./vector";


export interface GameObject 
{
    position: Vector;
    height : number;
    width : number;

    moveObject(time: number): void;
    onCollision(obj: GameObject):void;
    drawObject(ctx:CanvasRenderingContext2D) : void;
    
}
