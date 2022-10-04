function centerjs(options) {
  /**
   * Set defaults.
   */
  const defaults = {
    canvas: document.createElement('canvas'),
    width: 128,
    height: 128,
    shape: 'square',
    fontColor: 'white',
    backgroundColor: 'black',
    text: 'C',
    fontFamily: 'Helvetica',
    fontSize: 64,
  };

  /**
   * Override defaults with options.
   */
  var data = Object.assign({}, defaults, options);
  const canvas = data.canvas;
  const ctx = data.canvas.getContext('2d');
  const width = data.width;
  const height = data.height;
  const shape = data.shape;
  const fontColor = data.fontColor;
  const backgroundColor = data.backgroundColor;
  const text = data.text;
  const fontFamily = data.fontFamily;
  const fontSize = data.fontSize;

  /**
   * Set the width and height of the canvas as 2x of the desired width and
   * height. Use the style attribute of the canvas to set the desired width
   * and height of the canvas then scale the content up by a factor of 2. This
   * will allow support for retina displays.
   */
  canvas.width = 2 * width;
  canvas.height = 2 * height;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(2, 2);

  /**
   * Draw and return the canvas.
   */
  drawBackground();
  drawText();
  return canvas;

  function drawBackground() {
    switch (shape) {
      case 'square':
        drawSquare();
        break;
      case 'circle':
        drawCircle();
        break;
      case 'rounded':
        drawRounded();
        break;
      default:
        drawSquare();
        break;
    }
  }

  function drawSquare() {
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = backgroundColor;
    ctx.fill();
  }

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, height / 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = backgroundColor;
    ctx.fill();
  }

  function drawRounded() {
    ctx.beginPath();
    const radius = height / 10;
    ctx.moveTo(width, height);
    ctx.arcTo(0, height, 0, 0, radius);
    ctx.arcTo(0, 0, width, 0, radius);
    ctx.arcTo(width, 0, width, height, radius);
    ctx.arcTo(width, height, 0, height, radius);
    ctx.fillStyle = backgroundColor;
    ctx.fill();
  }

  function drawText() {
    ctx.fillStyle = fontColor;
    ctx.font = 'bold ' + fontSize + 'px ' + fontFamily;
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
    const offsets = measureOffsets(text, fontFamily, fontSize);
    const x = width / 2 + offsets.horizontal;
    const y = height / 2 + offsets.vertical;
    ctx.fillText(text, x, y);
  }

  /**
   * Offsets are the differece between the center of the canvas and the center
   * of the text on the canvas.
   */
  function measureOffsets(text, fontFamily, fontSize) {
    /**
     * Create and setup canvas
     */
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = fontSize + 'px ' + fontFamily;

    /**
     * Make sure that there is enough room on the canvas for the text. Changing
     * the width or height of a canvas element clears the content so you need
     * to set the font again.
     */
    canvas.width = 2 * ctx.measureText(text).width;
    canvas.height = 2 * fontSize;

    /**
     * Center the text vertically and horizontally using the build in canvas
     * functionality (textBaseline and textAlign). We're going to measure how
     * far off the text is from the actual center since the textBaseline and
     * textAlign are not always accurate.
     */
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    /**
     * Get image data so that we can iterate of every RGBA pixel.
     */
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let textTop;
    let textBottom;
    for (let y = 0; y <= canvas.height; y++) {
      for (let x = 0; x <= canvas.width; x++) {
        let r_index = 4 * (canvas.width * y + x);
        let r_value = data[r_index];
        // let g_value = data[r_index + 1];
        // let b_value = data[r_index + 2];
        // let a_value = data[r_index + 3];

        if (r_value > 0) {
          if (!textTop) {
            textTop = y;
          }
          textBottom = y;
          break;
        }
      }
    }

    /**
     * Vertical offset is the difference between the horizontal center of the
     * canvas and the horizontal center of the text on the canvas.
     */
    const canvasHorizontalCenterLine = canvas.height / 2;
    const textHorizontalCenterLine = (textBottom - textTop) / 2 + textTop;

    let textLeft;
    let textRight;
    for (let x = 0; x <= canvas.width; x++) {
      for (let y = 0; y <= canvas.height; y++) {
        let r_index = 4 * (canvas.width * y + x);
        let r_value = data[r_index];

        if (r_value > 0) {
          if (!textLeft) {
            textLeft = x;
          }
          textRight = x;
          break;
        }
      }
    }

    /**
     * Horizontal offset is the difference between the vertical center of the
     * canvas and the vertical center of the text on the canvas.
     */
    const canvasVerticalCenterLine = canvas.width / 2;
    const textVerticalCenterLine = (textRight - textLeft) / 2 + textLeft;

    return {
      vertical: canvasHorizontalCenterLine - textHorizontalCenterLine,
      horizontal: canvasVerticalCenterLine - textVerticalCenterLine,
    };
  }
}

export default centerjs;
