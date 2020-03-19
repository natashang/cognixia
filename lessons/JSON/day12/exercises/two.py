"""  Exercise 2: 
    Write the functions json-pair?, json-object?, 
    json-array?, and json? that when given any input return a Boolean.
    These functions should only return true when the given input is valid. 
    Be sure to check the whole value (i.e. all values in an array).
"""

import json

# read file from the path
myJSONFile = open('one.json', 'r')

jsonData = myJSONFile.read()

# parse
obj = json.loads(jsonData)
charactList = obj['characters']

#get a specific key-value pair
print(charactList[0]) 
print("pair: " + charactList[0].get("name"))

print("pair: " + charactList[0].get("Mickey Mouse"))

def print_json(charactList) :
    for i in range(len(charactList)):
        print("id: ", charactList[i].get("id"))
        print("name: ", charactList[i].get("name"))
        print("movie: ", charactList[i].get("movie"))
        print("animal: ", charactList[i].get("animal"))
        print("address: ", charactList[i].get("address"))

#def json-pair(pair) {
    
#}

#print_json(charactList)