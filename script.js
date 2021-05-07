
/*Absztraktció JS-ben*/


function Circle(radius) {

    this.radius = radius;

    this.defaultLocation = {
        x: 0,
        y: 0
    };

    this.computeOptimumLocation = (factor) => {

        console.log(`${factor} compute the optimum location!`);
    }

    this.draw = () => {

        this.computeOptimumLocation(5);

        console.log('draaaaaw');
    };
}


const circle = new Circle(5);

circle.draw();
console.log(circle.defaultLocation);

circle.computeOptimumLocation(34);