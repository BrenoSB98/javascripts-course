function person(firstName, lastName, age, gender, height, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;

  return {
    name: firstName + " " + lastName,
    age: age,
    gender: gender,
    height: height,
    weight: weight,
  };
}

console.log(person("Hellen", "Nascimento", 23, "female", 1.6, 49));
