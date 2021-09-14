class Log{
    constructor(x,y,height,angle){ 
        var options={
            restitution:0.3,
            friction:5,
                    density:3

        }
        this.body=Bodies.rectangle(x,y,20,height); 
        World .add(myworld , this.body);
        this.width=20;
        this.height=height;
Matter . Body.setAngle(this.body,angle) 
    }

    display(){
        var angle = this.body.angle 
        var pose = this.body.position 
        push() 
        translate (pose.x, pose.y) 
        rotate (angle)
                rect(0,0,this.width,this.height); 
                pop()   
    }
}  