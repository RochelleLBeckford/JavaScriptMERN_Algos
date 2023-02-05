/* 
Given an id, an object that has keys with corresponding
updated values, and an array of objects, find the object
by the "id" key that matches the given id value and then
update that object's keys with the provided new values.

Return the updated object, or null if no object was found.
*/

// find the object that matches the id of the given value and update that object
// hasOwnProperty will help

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
  */

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */


//? One way 

function findByIdAndUpdate(id, updatedVals, collection) {
  // Your code here
    for (let i = 0; i < collection.length; i++) {
        if (collection[i]["id"] === id) {
        for (key in updatedVals) {
            if (key in collection[i]) {
            collection[i][key] = updatedVals[key];
            }
        }
        return collection[i];
        }
    }
    return null;
}
console.log(findByIdAndUpdate(id1, updateData1, students));
console.log(findByIdAndUpdate(id2, updateData2, students));
console.log(findByIdAndUpdate(id3, updateData3, students));



//? Another way 
function findByIdAndUpdate(id, updatedVals, collection) {
  // Your code here
    let idIdx = -1

    for ( let i = 0; i < collection.length; i++){
        if (collection[i]["id"] === id){
        idIdx = i
        }
    }
    if (idIdx !== -1){
        for (key in updatedVals){
        if (collection[idIdx].hasOwnProperty(key)){
            collection[idIdx][key] = updatedVals[key];
        }
        }
        return collection[idIdx];
    } else return null;
}

console.log(findByIdAndUpdate(id1, updateData1, students));
console.log(findByIdAndUpdate(id2, updateData2, students));
console.log(findByIdAndUpdate(id3, updateData3, students));