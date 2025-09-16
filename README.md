import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.print("What is your gpa: ");
        double gpa = scanner.nextDouble();

        boolean isStudent;
        while (true) {
            System.out.print("Are you a student (true/false): ");
            try {
                isStudent = scanner.nextBoolean();
                break;
            } catch (InputMismatchException e) {
                System.out.println("Please enter True/False for this question.");
                scanner.next();
            }
        }

        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old");
        System.out.println("Your gpa is " + gpa);

        if(isStudent){
            System.out.println("You are a student");
        }
        else {
            System.out.println("You are not a student");
        }


        scanner.close();
    }
}
