# f-strings in python
# It uses an f-string to format and print variables (name and age) inside a sentence in a clean, readable way.

# example => 1
name = "Om"
age = 22
print(f"Hello, My name is {name} and I'm {age} years old.")

# example => 2
# Prints today's date with help
# of datetime library

import datetime

today = datetime.datetime.today()
print(f"{today:%B %d, %Y}")

# example => 3
english = 78
maths = 56
hindi = 85

print(f"Ram got total marks {english + maths + hindi} out of 300")
