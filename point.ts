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
distancetolorign():number{
    let devolver=Math.sqrt(((Math.pow(this.x,2))+(Math.pow(this.y,2))));
    return devolver;
}
calculatedistance(a:point):number{
    let devolver=Math.sqrt((Math.pow(a.getx()-this.y,2)+Math.pow(a.gety()-this.y,2)));
    return devolver;
}

}