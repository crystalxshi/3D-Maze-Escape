/**
 * Specifies a Camera that can Dolly/Truck and Tilt/Pan.
 *
 * @author Lucas N. Ferreira
 * @this {Renderer}
 */
class Camera {
  /**
   * Constructor for Camera.
   *
   * @constructor
   * @returns {Camera} Camera object created
   */
  constructor(canvas) {
    this.speed = 0.2;

    // Camera view attributes
    this.eye = new Vector3([0, 0, 0]);
    this.center = new Vector3([0, 0, -1]);
    this.up = new Vector3([0, 1, 0]);

    this.viewMatrix = new Matrix4();
    this.updateView();

    this.check = false;
    this.projectionMatrix = new Matrix4();
  }

  geteye() {
    return this.eye;
  }
  dolly(dir) {
    // Calculate the n camera axis
    var n = this.eye.sub(this.center);
    n = n.normalize();

    // Calculate the u camera axis
    var u = this.up.cross(n);
    u = u.normalize();

    var v = this.up.cross(u);
    v = v.normalize();

    // Scale the u axis to the desired distance to move
    v = v.mul(dir * this.speed);

    // Add the direction vector to both the eye and center positions
    this.eye = this.eye.add(v);
    this.center = this.center.add(v);
    this.newCenter = this.center.add(v);

    this.updateView();
  }

  truck(dir) {
    // Calculate the n camera axis
    var n = this.eye.sub(this.center);
    n = n.normalize();

    // Calculate the u camera axis
    var u = this.up.cross(n);
    u = u.normalize();

    // Scale the u axis to the desired distance to move
    u = u.mul(dir * this.speed);

    // Add the direction vector to both the eye and center positions
    this.eye = this.eye.add(u);
    this.center = this.center.add(u);
    this.newCenter = this.center.add(u);

    this.updateView();
  }

  tilt(dir) {
    // Calculate the n camera axis
    var n = this.eye.sub(this.center);
    n = n.normalize();

    // Calculate the u camera axis
    var u = this.up.cross(n);
    u = u.normalize();

    this.newCenter = this.center.sub(this.eye);

    var transformMatrix = new Matrix4();
    transformMatrix.setRotate(dir, u.elements[0], u.elements[1], u.elements[2]);

    this.newCenter = transformMatrix.multiplyVector3(this.newCenter);

    this.center = this.newCenter.add(this.eye);

    if (Math.abs(n.mul(this.up)) >= 0.985) {
      this.up = transformMatrix.multiplyVector3(this.up);
    }
    this.updateView();
  }

  pan(dir) {
    // Calculate the n camera axis
    var n = this.eye.sub(this.center);
    n = n.normalize();

    // Calculate the u camera axis
    var u = this.up.cross(n);
    u = u.normalize();

    var v = this.up.cross(u);
    v = v.normalize();

    this.newCenter = this.center.sub(this.eye);

    var transformMatrix = new Matrix4();
    transformMatrix.setRotate(dir, 0, 1, 0);

    this.newCenter = transformMatrix.multiplyVector3(this.newCenter);

    this.center = this.newCenter.add(this.eye);

    if (Math.abs(n.mul(this.up)) >= 0.985) {
      this.up = transformMatrix.multiplyVector3(this.up);
    }
    this.updateView();
  }

  projection(canvas) {
    if (this.check == true) {
      this.projectionMatrix.setOrtho(-1.0, 1.0, -1.0, 1.0, 0.0, 2.0);
      console.log("setOrtho");
      this.check = false;
    } else {
      this.projectionMatrix.setPerspective(
        30,
        canvas.width / canvas.height,
        0.1,
        100
      );
      console.log("setPerspective");
      this.check = true;
    }
  }

  updateView() {
    this.viewMatrix.setLookAt(
      this.eye.elements[0],
      this.eye.elements[1],
      this.eye.elements[2],
      this.center.elements[0],
      this.center.elements[1],
      this.center.elements[2],
      this.up.elements[0],
      this.up.elements[1],
      this.up.elements[2]
    );
  }
}
