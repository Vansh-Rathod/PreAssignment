interface Vehicle {

    // fully abstract methods, public and abstract by default
    void changeGear(int gear);

    void speedUp(int increment);

    void applyBrakes(int decrement);
}

class Bike implements Vehicle {
    int gear;
    int speed;

    @Override
    public void changeGear(int newGear) {
        this.gear = newGear;
    }

    @Override
    public void speedUp(int increment) {
        this.speed = this.speed + increment;
    }

    @Override
    public void applyBrakes(int decrement) {
        this.speed = this.speed - decrement;
    }

    public int currentSpeed() {
        return this.speed;
    }

    public int currentGear() {
        return this.gear;
    }

}
public class InterfaceExample {

    public static void main(String[] args) {
        Bike pulsar = new Bike();

        System.out.println("Current Gear: " + pulsar.currentGear());
        System.out.println("Current Speed: " + pulsar.currentSpeed());
        pulsar.changeGear(5);
        System.out.println("Current Gear: " + pulsar.currentGear());
        pulsar.speedUp(20);
        System.out.println("Current Speed: " + pulsar.currentSpeed());
        pulsar.applyBrakes(5);
        System.out.println("Current Speed: " + pulsar.currentSpeed());

    }
}
