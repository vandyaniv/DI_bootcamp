# -*- coding: utf-8 -*-
"""property,class_methods,static.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1ZNbSTIviTKuPAX3LQsOHzKpXqXrNvepx
"""

class Person:
  num_of_people=0
  def __init__(self,name):
    self.name = name
    Person.num_of_people+=1

bob = Person("Bob")
alice = Person("Alice")
print(bob.name)
print(bob.num_of_people)
print(Person.num_of_people)

# number of instance 
#! install requests

#!pip install selenium

import requests

import pandas as pd

def say_hello():
  print("Hello")

import time
def my_decorator(func):
  def wrapper(a,b):
    print("Something is happening before the function is called.")
    func(a,b)
    print("Something is happening after the function is called.")
  return wrapper

@my_decorator
def add(a,b):
  print(a+b)

add(2,3)

class MyClass:
  __counter = 0
  def __init__(self,name):
    self.name = name
    MyClass.__counter+=1

  def say_hello(self):
    return(f"Hello {self.name}")

  @staticmethod
  def add(a,b):
    return a+b

  @staticmethod
  def subtract(a,b):
    return a-b

  @classmethod
  def sub_and_add(cls,a,b, person):
    return f"person name: {cls.say_hello(person)} {cls.add(a,b)-cls.subtract(a,b)}"

bob = MyClass("Bob")
my_class_add = MyClass.sub_and_add(3,4,bob)
print(my_class_add)

class Rectangle:
  def __init__(self,length,width):
    if length < 0 or width < 0:
      raise ValueError("Length and width cannot be negative")
    else:
      self.__length = length
      self.__width = width

  @property#defining area as an attribute as well as making a getter for area
  def area(self):
    return self.length*self.width

  @property #getter for length
  def length(self):
    return self.__length

  @length.setter#setter for length
  def length(self,value):
    if value < 0:
      raise ValueError("Length cannot be negative")
    self.__length = value
try:
  rect = Rectangle(5,4)
  rect.length = 7
  print(rect.area)
except ValueError as e:
  print(e)

class weatherStation:
  def __init__(self,temp_celsius):
    self.temp_cels = temp_celsius
    self.temp_far = (self.temp_cels*9/5)+32

  @property
  def temp_far(self):
    return (self.temp_cels*9/5)+32


weather = weatherStation(30)
print(weather.temp_far)

class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = val
        MyClass.count += 1

    def set_val(self, newval):
        self.val = newval

    def get_val(self):
        return self.val

    @classmethod
    def get_count(cls):
        return cls.count

object_1 = MyClass(10)
print("\nValue of object : %s count %s" % (object_1.get_val() ,  object_1.get_count()))
print(MyClass.get_count())

object_2 = MyClass(20)
print("\nValue of object : %s" % object_2.get_val())
print(MyClass.get_count())

class BankAccount:
    # Class attributes to track total accounts, all accounts, and a default interest rate
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.03  # 3% interest rate for savings accounts

    def __init__(self, account_type: str, initial_balance: float = 0.0):
        self._balance = initial_balance
        self.account_type = account_type
        self.transaction_history = []
        self.account_number = BankAccount.total_accounts + 1
        BankAccount.total_accounts += 1
        BankAccount.all_accounts.append(self)

    @property
    def balance(self):
        """Provides read-only access to the account balance."""
        return self._balance

    @property
    def account_type(self):
        """Getter for account_type. Ensures the account type is valid."""
        return self._account_type

    @account_type.setter
    def account_type(self, value):
        """Setter for account_type. Validates the account type before setting it."""
        if not BankAccount.validate_account_type(value):
            raise ValueError("Invalid account type. Must be 'savings' or 'checking'.")
        self._account_type = value

    @classmethod
    def get_total_accounts(cls):
        """Returns the total number of accounts created."""
        return cls.total_accounts

    @classmethod
    def find_account_by_number(cls, account_number):
        """Finds and returns an account by its account number."""
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None

    @classmethod
    def total_balances(cls):
        """Returns the sum of balances across all accounts."""
        return sum(account.balance for account in cls.all_accounts)

    @staticmethod
    def validate_account_type(account_type):
        """Validates the account type to ensure it's either 'savings' or 'checking'."""
        return account_type in ["savings", "checking"]

    def deposit(self, amount):
        """Adds money to the account and logs the transaction."""
        if amount > 0:
            self._balance += amount
            self.transaction_history.append(f"Deposited: ${amount}")
        else:
            raise ValueError("Deposit amount must be positive.")

    def withdraw(self, amount):
        """Withdraws money from the account if the balance allows, and logs the transaction."""
        if amount > self._balance:
            raise ValueError("Insufficient balance.")
        self._balance -= amount
        self.transaction_history.append(f"Withdrew: ${amount}")

    def apply_interest(self):
        """Applies interest to savings accounts and logs the interest application."""
        if self._account_type == "savings":
            self._balance += self._balance * BankAccount.interest_rate
            self.transaction_history.append(f"Interest applied at rate: {BankAccount.interest_rate * 100}%")

# Example Usage
if __name__ == "__main__":
    # Create bank accounts
    account1 = BankAccount("savings", 1000)
    account2 = BankAccount("checking", 500)
    account3 = BankAccount("savings", 2000)

    # Deposit and withdraw money
    account1.deposit(300)
    account2.withdraw(200)

    # Apply interest to the savings accounts
    account1.apply_interest()
    account3.apply_interest()

    # Find account by account number
    found_account = BankAccount.find_account_by_number(2)
    if found_account:
        print(f"Found account #{found_account.account_number} with balance: ${found_account.balance}")

    # Display total balances across all accounts
    print(f"Total balances across all accounts: ${BankAccount.total_balances()}")

    # Display total accounts created
    print(f"Total accounts created: {BankAccount.get_total_accounts()}")