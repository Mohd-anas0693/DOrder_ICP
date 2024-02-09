export const getValueByKeyFromString = (inputString, key) => {
    // Split the input string into lines
    var lines = inputString.split("\n");
  
    // Iterate through each line
    for (var i = 0; i < lines.length; i++) {
      // Split each line into key and value
      var parts = lines[i].split(":");
  
      // Trim whitespace from key and value
      var lineKey = parts[0].trim();
      var lineValue = parts[2] ? parts[2].trim() : "";
  
      // Check if the current line's key matches the target key
      if (lineKey === key) {
        return lineValue;
      }
    }
  
    // If the key is not found, return null or handle as needed
    return null;
  };
  