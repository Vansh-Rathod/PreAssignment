class Cube {
    double height, width;

    Cube() { // non-parametrized constructor
        System.out.println("Non-Parametrized Constructor Invoked");
        this.height = 10;
        this.width = 10;
    }

    Cube(double height, double width) { // parametrized constructor
        System.out.println("Parametrized Constructor Invoked");
        this.height = height;
        this.width = width;
    }
}

public class ConstructorExample {
    public static void main(String[] args) {
        Cube cube1 = new Cube();
        System.out.println("Cube1 height: " + cube1.height);
        System.out.println("Cube1 width:" + cube1.width);

        Cube cube2 = new Cube(12, 14);
        System.out.println("Cube2 height: " + cube2.height);
        System.out.println("Cube2 width:" + cube2.width);
    }
}