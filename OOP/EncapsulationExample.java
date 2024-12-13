class Employee {
    private String name, designation, email, empId;
    private int age;
    private double salary;
    private long phone;

    // setters
    public void setName(String name) {
        this.name = name;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEmpID(String empID) {
        this.empId = empID;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    // getters
    public String getName() {
        return this.name;
    }

    public String getDesignation() {
        return this.designation;
    }

    public String getEmail() {
        return this.email;
    }

    public String getEmpID() {
        return this.empId;
    }

    public int getAge() {
        return this.age;
    }

    public double getSalary() {
        return this.salary;
    }

    public long getPhone() {
        return this.phone;
    }
}

public class EncapsulationExample {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        e1.setName("Ram");
        e1.setDesignation("Software Engineer");
        e1.setEmail("ram12@gmail.com");
        e1.setEmpID("ram12");
        e1.setAge(25);
        e1.setSalary(60000);
        e1.setPhone(1234567891);

        System.out.println("Name: " + e1.getName());
        System.out.println("Designation: " + e1.getDesignation());
        System.out.println("Email: " + e1.getEmail());
        System.out.println("EmpID: " + e1.getEmpID());
        System.out.println("Age: " + e1.getAge());
        System.out.println("Salary: " + e1.getSalary());
        System.out.println("Phone: " + e1.getPhone());
    }
}
