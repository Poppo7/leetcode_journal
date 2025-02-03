// 1. Declare an array named 'fruits' with three fruit names
const fruits: string[] = ["Pomegranate", "Orange", "Cranberry"];

// 2. Add a new fruit to the end of the array
fruits.push("Mango"); //push = add

// 3. Remove the first fruit from the array
fruits.shift(); //shift = delete

// 4. Find the index of "Banana" in the array
const bananaIndex: number = fruits.indexOf("Banana"); 
//❌ Mistake: .find() does not return the index; it returns the element that matches the condition.
//✅ Fix: Using .indexOf() instead.

// 5. Replace the second element with "Peach"
fruits[1] = "Peach";
//❌ Mistake: Array elements should be accessed by index, not by the value.
//✅ Fix: Replace the second element (index 1).
//   Remember: 0 = 1st array, 1 = 2nd array.

// 6. Render the array in a React component
const FruitList: React.FC = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => ( 
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;