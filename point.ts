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
calcularcuadrant():number{
    let devolver:number=0;
    if(this.x==0||this.y==0){
        devolver=0;
    }
    if(this.x>0&&this.y>0){
        devolver=1;
    }
    if(this.x<0&&this.y>0){
        devolver=2;
    }
    if(this.x<0&&this.y<0){
        devolver=3;
    }
    if(this.x>0&&this.y<0){
        devolver=4;
    }
    return devolver;

}
calculatenearest(a:point[]):point{
    let c=this.calculatedistance(a[0]);
    let b=1;
    let devolver:point=a[0];
    for(b=1;b<a.length;b++){
        if(this.calculatedistance(a[b])<c){
            c=this.calculatedistance(a[b]);
            devolver=a[b];

        }
    }
    return devolver;
}

}