class Bird{
    constructor(x,y){
        var options={
            restitution:0.3,
            density:1 
        }
        this.body=Bodies.rectangle(x,y,50,50);
        World .add(myworld , this.body);
        this.width=50;
        this.height=50;
    }

    display(){
        var angle = this.body.angle 
        var pose = this.body.position 
        pose.x=mouseX
        pose.y=mouseY
                push() 
        translate (pose.x, pose.y) 
        rotate (angle)
        fill ("red") 
                rect(0,0,this.width,this.height); 
                pop()   
    }
}  