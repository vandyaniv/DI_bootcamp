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


# Exceptions: Provides robust error handling, maintaining program stability and ensuring that cleanup tasks are always executed.
# Tools:
# - `try`: Wraps code that might cause an exception.
# - `except`: Catches and handles exceptions.
# - `finally`: Ensures that specific code runs regardless of whether an exception occurred.