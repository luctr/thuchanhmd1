let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

class Circle {
    constructor(x, y, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color=color;
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill()

    }

}
let cicrle1= new Circle(10,10,100,"#000000")
cicrle1.render()