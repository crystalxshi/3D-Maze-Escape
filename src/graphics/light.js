class Light {
  constructor(x, y, z) {
    this.pos = new Vector3([x, y, z]);

    // light colors
    this.ambient = [0.5, 0.5, 0.5];
    this.diffuse = [1.0, 1.0, 1.0];
    this.specular = [0.8, 0.8, 0.8];

    // Later you will add specular here too.
  }
}
