// Get the current GPU usage
var initialUsage = navigator.gpu.getMemoryInfo().usage;

// Set the target GPU usage to 2GB
var targetUsage = 2 * Math.pow(1024, 3); // 2 GB

// Calculate the rate at which we want to change the GPU usage
var stepSize = (targetUsage - initialUsage) / 5; // 0.4 GB per second

// Create a timer to update the GPU usage every 1 second
setInterval(() => {
  var currentUsage = navigator.gpu.getMemoryInfo().usage;
  var delta = currentUsage + stepSize;
  
  // Update the GPU usage
  navigator.gpu.updateMemory({
    usage: delta
  });
}, 1000);

// Wait for 5 seconds before resetting the GPU usage
setTimeout(() => {
  // Reset the GPU usage to its original value
  navigator.gpu.updateMemory({
    usage: initialUsage
  });
}, 5000);