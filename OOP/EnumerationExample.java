enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thrusday,
    Friday,
    Saturday,
    Sunday
}

public class EnumerationExample {
    public static void main(String[] args) {

        Weekdays day = Weekdays.Friday;

        System.out.println("Day: " + day);

        // switch case variance
        switch (day) {
            case Monday:
                System.out.println("Today is Monday!");
                break;
            case Tuesday:
                System.out.println("Today is Tuesday!");
                break;
            case Wednesday:
                System.out.println("Today is Wednesday!");
                break;
            case Thrusday:
                System.out.println("Today is Thrusday!");
                break;
            case Friday:
                System.out.println("Today is Friday!");
                break;
            case Saturday:
                System.out.println("Today is Saturday!");
                break;
            case Sunday:
                System.out.println("Today is Sunday!");
                break;
        }

        // looping in enum
        for (Weekdays myDay : Weekdays.values()) {
            System.out.println(myDay);
        }

    }
}
