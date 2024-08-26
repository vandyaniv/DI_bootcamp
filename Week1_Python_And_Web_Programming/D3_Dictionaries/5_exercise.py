sample_dict = {
    "class": {"student": {"name": "Mike", "marks": {"physics": 70, "history": 80}}}
}

print(sample_dict.keys())
class_key_vals = sample_dict["class"]

print(class_key_vals.keys())
student_key_vals = class_key_vals["student"]

print(student_key_vals.keys())
marks_key_vals = student_key_vals["marks"]

print(marks_key_vals["history"])
