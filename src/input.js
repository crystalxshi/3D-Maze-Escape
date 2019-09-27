var _inputHandler = null;
var check = false;
/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
  /**
   * Initializes the event handeling functions within the program.
   */
  constructor(canvas, scene, camera) {
    this.canvas = canvas;
    this.scene = scene;
    this.camera = camera;

    _inputHandler = this;
    this.camera.truck(-1);
    for (let i = 0; i < 16; i++) {
      this.camera.dolly(-1);
    }

    // var inputHandler4 = new InputHandler(canvas, scene, camera);
    this.readTexture("objs/door.jpg", function(image) {
      var shape = new Door(shader, image, 9, 0, -30);
      scene.addGeometry(shape);
      var shape = new Door(shader, image, 18, 0, -30);
      scene.addGeometry(shape);
      var shape = new Door(shader, image, 9, 0, -1.5);
      scene.addGeometry(shape);
      var shape = new Door(shader, image, 21, 0, -1.5);
      scene.addGeometry(shape);
    });
    // this.camera.dolly(1);
    document.getElementById("start").addEventListener("click", function() {
      canvas.onmousedown = function(ev) {
        _inputHandler.mouseClick(ev);
        canvas.onmousemove = function(ev) {
          _inputHandler.mouseMove(ev);
        };
      };
      canvas.onmouseup = function() {
        canvas.onmousemove = null;
      };
      // Keyboard Events
      document.addEventListener(
        "keydown",
        function(ev) {
          _inputHandler.keyDown(ev);
        },
        false
      );
      document.addEventListener(
        "keyup",
        function(ev) {
          _inputHandler.keyUp(ev, scene);
        },
        false
      );
    });
  }

  /**
   * Function called upon mouse click.
   */
  mouseClick(ev) {
    // Print x,y coordinates.
    console.log(ev.clientX, ev.clientY);
  }

  mouseMove(ev) {
    var movementX = ev.movementX;
    console.log("movementX", movementX);

    var movementY = ev.movementY;
    console.log("movementY", movementY);

    if (movementX > 0) {
      this.camera.pan(-1);
    } else if (movementX < 0) {
      this.camera.pan(1);
    }
    if (movementY > 0) {
      this.camera.tilt(-1);
    } else if (movementY < 0) {
      this.camera.tilt(1);
    }
  }

  keyUp(ev, scene) {
    var keyName = event.key;
    console.log("key up", keyName);
    var tem = this.camera.geteye();
    console.log(tem.elements[0], tem.elements[2]);
    if (
      tem.elements[0] > 17 &&
      tem.elements[0] < 19 &&
      tem.elements[2] > 3 &&
      tem.elements[2] < 5
    ) {
      if (check == false) {
        this.readTexture("objs/check.jpg", function(image) {
          console.log("check");
          var shape1 = new Right(
            shader,
            image,
            tem.elements[0],
            0,
            tem.elements[2]
          );
          scene.addGeometry(shape1);
        });
        check = true;
      }
    }
  }

  keyDown(ev) {
    var keyName = event.key;
    console.log("key down", keyName);

    if (keyName == "a") {
      this.camera.truck(-1);
    } else if (keyName == "d") {
      this.camera.truck(1);
    } else if (keyName == "w") {
      this.camera.dolly(1);
    } else if (keyName == "s") {
      this.camera.dolly(-1);
    } else if (keyName == "z") {
      this.camera.projection(canvas);
    } else if (keyName == "ArrowRight") {
      this.camera.pan(-1);
    } else if (keyName == "ArrowLeft") {
      this.camera.pan(1);
    }
  }

  /**
   * Function called to read a selected file.
   */

  readTexture(src, onTexLoad) {
    // Create the image object
    var image = new Image();
    if (!image) {
      console.log("Failed to create the image object");
      return false;
    }

    // Register the event handler to be called on loading an image
    image.onload = function() {
      _inputHandler.image = image;
      onTexLoad(image);
    };

    // Tell the browser to load an image
    image.src = src;
    return true;
  }
}
