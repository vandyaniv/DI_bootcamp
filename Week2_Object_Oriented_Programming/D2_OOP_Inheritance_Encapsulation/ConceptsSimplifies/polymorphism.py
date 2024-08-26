try:
    result = 10 / 0  # This operation will raise a ZeroDivisionError
except ZeroDivisionError as e:  # Catch the specific error
    print("Error:", e)  # Handle the exception, providing feedback to the user
finally:
    print("This block always executes.")  # Code here runs regardless of an exception

# Why this works:
# - `try` ensures that the code runs under the assumption that it might fail.
# - `except` catches specific errors and handles them, preventing the program from crashing.
# - `finally` allows for cleanup actions or guarantees that some code runs regardless of success or failure.

# Output:
# - "Error: division by zero"
# - "This block always executes."



# Polymorphism: Simplifies code by allowing the same interface to be used for different data types, enhancing uniformity and extensibility.
# Tools:
# - Method Overriding: Allows different classes to implement the same method differently.
# - `def`: Defines a method that can be overridden in child classes.