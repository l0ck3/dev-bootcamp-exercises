# Orange Tree - Bonus

One of the best and most used exercise used to learn how to modelize objects in programming is the Orange Tree.

The goal is to represent with a single JavaScript Object the whole life of an Orange Tree, from its birth to its death.

## Specs

You should implement an `orangeTree` Object as follows:

**Attributes**
* `height` (in cm)
* `age` (in year)
* `oranges`
* `alive`

**Behaviours**
* `pickAnOrange`
* `ageOneYear`
* `seed`

**Business Rules**
* the Orange Tree should age each year.
* it should grow each year:
  * 25 centimeters until it is 10 years old.
  * 10 centimeters until it is 20 years old.
* it should produce each year:
  * 10 oranges when it's between 5 and 9 years old included.
  * 20 oranges when it's between 10 and 19 years old included.
  * 5 oranges when it's between 20 and 39 years old included.
* it should not die until it is at least 50 years old and can't get past 100 years.
* When we `seed` an `orangeTree`, it resets all its attributes.

Bonus Point:
Make it so that the probability for the Orange Tree to die gets bigger as the time passes.

Tip:
Paying attention to the tests may help you understand the expected implementation details for this exercise.

_Feel free to create as many functions as you think you need!_
