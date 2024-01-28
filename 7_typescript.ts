interface Drawable {
    print(): void;
}

class Circle implements Drawable {
    print(): void {
        console.log("print the values on the screen")
    }
}

let circle: Drawable = new Circle();

circle.print();

