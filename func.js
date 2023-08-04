function adjustSvgSize() {
      const svgElement = document.getElementById("bat");
      const screenWidth = window.innerWidth;
      const goldenRatio = 1.618; // The golden ratio value (approximate value: 1.618).

      // Calculate the new width and height using the golden ratio.
      const newWidth = screenWidth;
      const newHeight = screenWidth / goldenRatio;

      svgElement.setAttribute("width", newWidth);
      svgElement.setAttribute("height", newHeight);
    }

    // Call the function initially to set the SVG size according to the initial screen size.
    adjustSvgSize();

    // Call the function whenever the window is resized to adjust the SVG size dynamically.
    window.addEventListener("resize", adjustSvgSize);