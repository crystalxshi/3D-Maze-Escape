/**
 * Specifies a Door. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Door}
 */
class Door extends Geometry {
  /**
   * Constructor for Door.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Door} Door created
   */
  constructor(shader, image, x, y, z) {
    super(shader);

    this.vertices = this.generateDoorVertices(x, y, z);
    this.faces = { 0: [0, 1, 2] };

    this.image = image;

    // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
    this.interleaveVertices();
  }

  generateDoorVertices(x, y, z) {
    var vertices = [];

    var vertex0 = new Vertex(0 - 5 + x, 0 - 0.9, 0 + 10 + z);
    var vertex1 = new Vertex(0 - 5 + x, 2 - 0.9, 0 + 10 + z);
    var vertex2 = new Vertex(3 - 5 + x, 2 - 0.9, 0 + 10 + z);
    var vertex3 = new Vertex(0 - 5 + x, 0 - 0.9, 0 + 10 + z);
    var vertex4 = new Vertex(3 - 5 + x, 2 - 0.9, 0 + 10 + z);
    var vertex5 = new Vertex(3 - 5 + x, 0 - 0.9, 0 + 10 + z);

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 0 - 5 + x;
    vertex0.normal.elements[1] = 0 - 0.9;
    vertex0.normal.elements[2] = 0 + 10 + z;

    vertex1.normal.elements[0] = 0 - 5 + x;
    vertex1.normal.elements[1] = 2 - 0.9;
    vertex1.normal.elements[2] = 0 + 10 + z;

    vertex2.normal.elements[0] = 3 - 5 + x;
    vertex2.normal.elements[1] = 2 - 0.9;
    vertex2.normal.elements[2] = 0 + 10 + z;

    vertex3.normal.elements[0] = 0 - 5 + x;
    vertex3.normal.elements[1] = 0 - 0.9;
    vertex3.normal.elements[2] = 0 + 10 + z;

    vertex4.normal.elements[0] = 3 - 5 + x;
    vertex4.normal.elements[1] = 2 - 0.9;
    vertex4.normal.elements[2] = 0 + 10 + z;

    vertex5.normal.elements[0] = 3 - 5 + x;
    vertex5.normal.elements[1] = 0 - 0.9;
    vertex5.normal.elements[2] = 0 + 10 + z;

    vertices.push(vertex0);
    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);

    return vertices;
  }
}
