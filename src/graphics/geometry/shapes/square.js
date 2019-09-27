/**
 * Specifies a Square. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader, image, x, y, z, s) {
    super(shader);

    this.vertices = this.generateSquareVertices(x, y, z, s);
    this.faces = { 0: [0, 1, 2] };

    this.image = image;

    // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
    this.interleaveVertices();
  }

  generateSquareVertices(x, y, z, s) {
    var vertices = [];

    var vertex0 = new Vertex(0 - 5, -0.9, 0 + 10);
    var vertex1 = new Vertex(0 - 5, -0.9, -32 + 10);
    var vertex2 = new Vertex(32 - 5, -0.9, -32 + 10);
    var vertex3 = new Vertex(0 - 5, -0.9, 0 + 10);
    var vertex4 = new Vertex(32 - 5, -0.9, -32 + 10);
    var vertex5 = new Vertex(32 - 5, -0.9, 0 + 10);

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 0;
    vertex0.normal.elements[1] = -0.9;
    vertex0.normal.elements[2] = 0;

    vertex1.normal.elements[0] = 0 - 0.9;
    vertex1.normal.elements[1] = -0.9;
    vertex1.normal.elements[2] = -32 - 0.9;

    vertex2.normal.elements[0] = 32 - 0.9;
    vertex2.normal.elements[1] = -0.9;
    vertex2.normal.elements[2] = -32 - 0.9;

    vertex3.normal.elements[0] = 0 - 0.9;
    vertex3.normal.elements[1] = -0.9;
    vertex3.normal.elements[2] = 0 - 0.9;

    vertex4.normal.elements[0] = 32 - 0.9;
    vertex4.normal.elements[1] = -0.9;
    vertex4.normal.elements[2] = -32 - 0.9;

    vertex5.normal.elements[0] = 32 - 0.9;
    vertex5.normal.elements[1] = -0.9;
    vertex5.normal.elements[2] = 0 - 0.9;

    vertices.push(vertex0);
    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);

    return vertices;
  }
}
