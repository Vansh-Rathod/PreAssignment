class Person {
    String name;
    long phone;
    String email;

    Person(String personName, long personPhone, String personEmail) {
        this.name = personName;
        this.phone = personPhone;
        this.email = personEmail;
    }

    void displayDetails() {
        System.out.println("Name: " + this.name);
        System.out.println("Phone: " + this.phone);
        System.out.println("Email: " + this.email);
    }
}

class Employee extends Person {
    String empId;
    String designation;
    double salary;

    Employee(String personName, long personPhone, String personEmail, String empId, String designation, double salary) {
        super(personName, personPhone, personEmail);
        this.empId = empId;
        this.designation = designation;
        this.salary = salary;
    }

    void displayDetails() {
        super.displayDetails();
        System.out.println("Employee ID: " + this.empId);
        System.out.println("Designation: " + this.designation);
        System.out.println("Salary: " + this.salary);
    }
}

class Customer extends Person {
    String custId;
    String invoiceId;

    Customer(String personName, long personPhone, String personEmail, String customerId, String invoiceId) {
        super(personName, personPhone, personEmail);
        this.custId = customerId;
        this.invoiceId = invoiceId;
    }

    void displayDetails() {
        super.displayDetails();
        System.out.println("Customer ID: " + this.custId);
        System.out.println("Invoice ID: " + this.invoiceId);
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Employee e1 = new Employee("Ram", 1234567891, "ram12@gmail.com", "ram12", "Software Developer", 50000);
        e1.displayDetails();

        Customer c1 = new Customer("Krishna", 945364512, "krishna31@gmail.com", "krishna31", "53421");
        c1.displayDetails();
    }
}
