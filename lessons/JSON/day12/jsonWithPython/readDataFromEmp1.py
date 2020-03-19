""" Reads a JSON object and parses it using Python """

import json

# read file from the path
myJSONFile = open('emp1.json', 'r')

jsonData = myJSONFile.read()

# parse
obj = json.loads(jsonData)

print(str(obj['firstname']))
print(str(obj['lastname'])) 

# print length of array
addyList = obj['address']
print(addyList)

for i in range(len(addyList)):
    print("street: ", addyList[i].get("street"))
    print("city:   ", addyList[i].get("city"))
    print("state:  ", addyList[i].get("state"))