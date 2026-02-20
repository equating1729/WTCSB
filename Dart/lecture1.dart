import 'dart:io';

void main() {
  print("Hello"); //with print line
  stdout.write("Enter your name: "); //without print line
  String name = stdin.readLineSync() ?? "Guest";

  stdout.write("enter your age: ");
  int age = int.parse(stdin.readLineSync() ?? "0");

  if (age >= 18) {
    print("Hi $name, you are an adult.");
  } else {
    print("Hi $name, you are a minor");
  }
  //var and dynamic
}
