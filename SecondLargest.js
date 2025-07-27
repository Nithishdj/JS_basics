function findSecondLargestByDOM() {
  const input = document.getElementById("arrayInput").value;

  // Convert to number array
  const arr = input.split(',').map(item => Number(item.trim()));

  // Remove duplicates and sort descending
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);

  // Find second largest
  const secondLargest = uniqueSorted[1];

  // Output
  document.getElementById("result").innerText = secondLargest !== undefined 
    ? secondLargest 
    : "Not enough unique numbers.";
}