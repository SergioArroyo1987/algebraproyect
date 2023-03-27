export class point{
private x:number;
private y:number;
constructor(x:number,y:number){
    this.x=x;
    this.y=y;
}
getx():number{
    return this.x;
}
gety():number{
    return this.y;
}
setx(x:number){
    this.x=x;
}
sety(y:number){
    this.y=y;
}
tostring():string{
let devolver=`${this.x},${this.y}`;
return devolver;

}

}