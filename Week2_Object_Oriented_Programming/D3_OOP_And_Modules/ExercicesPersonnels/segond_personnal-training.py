# explanation by practice of the course 

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"{self.title} by {self.author}"

    def __repr__(self):
        return f"Book('{self.title}', '{self.author}')"

    def __add__(self, other):
        return Book(self.title + " & " + other.title, self.author + " and " + other.author)

# Create two instances of Book
book1 = Book("1984", "George Orwell")
book2 = Book("Brave New World", "Aldous Huxley")

# Demonstrating __str__ method
print(str(book1))  # Output: 1984 by George Orwell
print(str(book2))  # Output: Brave New World by Aldous Huxley

# Demonstrating __repr__ method
print(repr(book1))  # Output: Book('1984', 'George Orwell')
print(repr(book2))  # Output: Book('Brave New World', 'Aldous Huxley')

# Demonstrating __add__ method
combined_book = book1 + book2
print(combined_book)  # Output: 1984 & Brave New World by George Orwell and Aldous Huxley