abstract class Car {
    int seatingCapacity;
    String color;
    double mileage;
    double price;

    int getSeatingCapacity() {
        return 4;
    }

    abstract double getMileage();

    abstract double getPrice();
}

class Swift extends Car {

    Swift(String color, double price) {
        this.color = color;
        this.price = price;
    }

    String getColor() {
        return this.color;
    }

    @Override
    double getMileage() {
        return 25.75;
    }

    @Override
    double getPrice() {
        return this.price;
    }
}

class Baleno extends Car {

    Baleno(String color, double price) {
        this.color = color;
        this.price = price;
    }

    String getColor() {
        return this.color;
    }

    @Override
    double getMileage() {
        return 24.50;
    }

    @Override
    double getPrice() {
        return this.price;
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        Swift swift1 = new Swift("Blue", 11.25);
        System.out.println("Swift Car1 Color: " + swift1.getColor());
        System.out.println("Swift Car1 Mileage: " + swift1.getMileage());
        System.out.println("Swift Car1 Price: " + swift1.getPrice());
        System.out.println("Swift Car1 Seating Capacity: " + swift1.getSeatingCapacity());

        Swift swift2 = new Swift("Red", 10.50);
        System.out.println("Swift Car2 Color: " + swift2.getColor());
        System.out.println("Swift Car2 Mileage: " + swift2.getMileage());
        System.out.println("Swift Car2 Price: " + swift2.getPrice());
        System.out.println("Swift Car2 Seating Capacity: " + swift2.getSeatingCapacity());

        Baleno baleno1 = new Baleno("Orange", 9.10);
        System.out.println("Baleno Car1 Color: " + baleno1.getColor());
        System.out.println("Baleno Car1 Mileage: " + baleno1.getMileage());
        System.out.println("Baleno Car1 Price: " + baleno1.getPrice());
        System.out.println("Baleno Car1 Seating Capacity: " + baleno1.getSeatingCapacity());

        Baleno baleno2 = new Baleno("Red", 10.50);
        System.out.println("Baleno Car2 Color: " + baleno2.getColor());
        System.out.println("Baleno Car2 Mileage: " + baleno2.getMileage());
        System.out.println("Baleno Car2 Price: " + baleno2.getPrice());
        System.out.println("Baleno Car2 Seating Capacity: " + baleno2.getSeatingCapacity());
    }
}
