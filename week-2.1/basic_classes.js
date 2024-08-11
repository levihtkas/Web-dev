
class Rectangle{
  constructor(width,height,color){
    this.w=width,
    this.h=height,
    this.c=color
  }

  area(){
    return this.w * this.h;
  }

  paint(){
    console.log("this is a print "+this.c)
  }

}

const rect = new Rectangle(1,2,"red");

const rect1 = new Rectangle(10,20,"blue");

const area = rect.area()

console.log(area)
console.log(rect1.paint())
