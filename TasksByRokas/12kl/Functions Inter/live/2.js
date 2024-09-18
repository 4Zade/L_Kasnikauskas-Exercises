const person = {
    name: "Jaunius",
    age: 18,
    job: "Programuotojas",
    city: "Vilnius"
  };
  
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(`${key}: ${value}`);
    }
  }