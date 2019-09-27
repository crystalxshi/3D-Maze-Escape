/**
 * Specifies a Sky. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Sky}
 */
class Sky extends Geometry {
  /**
   * Constructor for Sky.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Sky} Sky created
   */
  constructor(shader, image) {
    super(shader);

    this.vertices = this.generateSkyVertices();
    this.faces = { 0: [0, 1, 1] };

    this.image = image;

    // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
    this.interleaveVertices();
  }

  generateSkyVertices() {
    var vertices = [];

    // front
    var vertex0 = new Vertex(0 - 5, 0 - 0.9, 0 + 10); // I
    var vertex1 = new Vertex(0 - 5, 32 - 0.9, 0 + 10); // R
    var vertex2 = new Vertex(32 - 5, 32 - 0.9, 0 + 10); // Q

    var vertex3 = new Vertex(0 - 5, 0 - 0.9, 0 + 10); // I
    var vertex4 = new Vertex(32 - 5, 32 - 0.9, 0 + 10); // Q
    var vertex5 = new Vertex(32 - 5, 0 - 0.9, 0 + 10); // L

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 0;
    vertex0.normal.elements[1] = 0;
    vertex0.normal.elements[2] = 0;

    vertex1.normal.elements[0] = 0;
    vertex1.normal.elements[1] = 32;
    vertex1.normal.elements[2] = 0;

    vertex2.normal.elements[0] = 32;
    vertex2.normal.elements[1] = 32;
    vertex2.normal.elements[2] = 0;

    vertex3.normal.elements[0] = 0;
    vertex3.normal.elements[1] = 0;
    vertex3.normal.elements[2] = 0;

    vertex4.normal.elements[0] = 32;
    vertex4.normal.elements[1] = 32;
    vertex4.normal.elements[2] = 0;

    vertex5.normal.elements[0] = 32;
    vertex5.normal.elements[1] = 0;
    vertex5.normal.elements[2] = 0;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // left
    var vertex0 = new Vertex(0 - 5, 0 - 0.9, -32 + 10); // J
    var vertex1 = new Vertex(0 - 5, 32 - 0.9, -32 + 10); // N
    var vertex2 = new Vertex(0 - 5, 32 - 0.9, 0 + 10); // R

    var vertex3 = new Vertex(0 - 5, 0 - 0.9, -32 + 10); // J
    var vertex4 = new Vertex(0 - 5, 32 - 0.9, 0 + 10); // R
    var vertex5 = new Vertex(0 - 5, 0 - 0.9, 0 + 10); // I

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 0;
    vertex0.normal.elements[1] = 0;
    vertex0.normal.elements[2] = -32;

    vertex1.normal.elements[0] = 0;
    vertex1.normal.elements[1] = 32;
    vertex1.normal.elements[2] = -32;

    vertex2.normal.elements[0] = 0;
    vertex2.normal.elements[1] = 32;
    vertex2.normal.elements[2] = -32;

    vertex3.normal.elements[0] = 0;
    vertex3.normal.elements[1] = 0;
    vertex3.normal.elements[2] = -32;

    vertex4.normal.elements[0] = 0;
    vertex4.normal.elements[1] = 32;
    vertex4.normal.elements[2] = 0;

    vertex5.normal.elements[0] = 0;
    vertex5.normal.elements[1] = 0;
    vertex5.normal.elements[2] = 0;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    //back
    var vertex0 = new Vertex(32 - 5, 0 - 0.9, -32 + 10); // K
    var vertex1 = new Vertex(32 - 5, 32 - 0.9, -32 + 10); // M
    var vertex2 = new Vertex(0 - 5, 32 - 0.9, -32 + 10); // N

    var vertex3 = new Vertex(32 - 5, 0 - 0.9, -32 + 10); // K
    var vertex4 = new Vertex(0 - 5, 32 - 0.9, -32 + 10); // N
    var vertex5 = new Vertex(0 - 5, 0 - 0.9, -32 + 10); // J

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 32;
    vertex0.normal.elements[1] = 0;
    vertex0.normal.elements[2] = -32;

    vertex1.normal.elements[0] = 32;
    vertex1.normal.elements[1] = 32;
    vertex1.normal.elements[2] = -32;

    vertex2.normal.elements[0] = 0;
    vertex2.normal.elements[1] = 32;
    vertex2.normal.elements[2] = -32;

    vertex3.normal.elements[0] = 32;
    vertex3.normal.elements[1] = 0;
    vertex3.normal.elements[2] = -32;

    vertex4.normal.elements[0] = 0;
    vertex4.normal.elements[1] = 32;
    vertex4.normal.elements[2] = -32;

    vertex5.normal.elements[0] = 0;
    vertex5.normal.elements[1] = 0;
    vertex5.normal.elements[2] = -32;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // right
    var vertex0 = new Vertex(32 - 5, 0 - 0.9, 0 + 10); // L
    var vertex1 = new Vertex(32 - 5, 32 - 0.9, 0 + 10); // Q
    var vertex2 = new Vertex(32 - 5, 32 - 0.9, -32 + 10); // M

    var vertex3 = new Vertex(32 - 5, 0 - 0.9, 0 + 10); // L
    var vertex4 = new Vertex(32 - 5, 32 - 0.9, -32 + 10); // M
    var vertex5 = new Vertex(32 - 5, 0 - 0.9, -32 + 10); // K

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 32;
    vertex0.normal.elements[1] = 0;
    vertex0.normal.elements[2] = 0;

    vertex1.normal.elements[0] = 32;
    vertex1.normal.elements[1] = 32;
    vertex1.normal.elements[2] = 0;

    vertex2.normal.elements[0] = 32;
    vertex2.normal.elements[1] = 32;
    vertex2.normal.elements[2] = -32;

    vertex3.normal.elements[0] = 32;
    vertex3.normal.elements[1] = 0;
    vertex3.normal.elements[2] = 0;

    vertex4.normal.elements[0] = 32;
    vertex4.normal.elements[1] = 32;
    vertex4.normal.elements[2] = -32;

    vertex5.normal.elements[0] = 32;
    vertex5.normal.elements[1] = 0;
    vertex5.normal.elements[2] = -32;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // up
    var vertex0 = new Vertex(0 - 5, 32 - 0.9, 0 + 10); // R
    var vertex1 = new Vertex(32 - 5, 32 - 0.9, 0 + 10); // Q
    var vertex2 = new Vertex(32 - 5, 32 - 0.9, -32 + 10); // M

    var vertex3 = new Vertex(0 - 5, 32 - 0.9, 0 + 10); // R
    var vertex4 = new Vertex(32 - 5, 32 - 0.9, -32 + 10); // Q
    var vertex5 = new Vertex(0 - 5, 32 - 0.9, -32 + 10); // N

    vertex0.normal.elements[0] = 0;
    vertex0.normal.elements[1] = 32;
    vertex0.normal.elements[2] = 0;

    vertex1.normal.elements[0] = 32;
    vertex1.normal.elements[1] = 32;
    vertex1.normal.elements[2] = 0;

    vertex2.normal.elements[0] = 32;
    vertex2.normal.elements[1] = 32;
    vertex2.normal.elements[2] = -32;

    vertex3.normal.elements[0] = 0;
    vertex3.normal.elements[1] = 32;
    vertex3.normal.elements[2] = 0;

    vertex4.normal.elements[0] = 32;
    vertex4.normal.elements[1] = 32;
    vertex4.normal.elements[2] = -32;

    vertex5.normal.elements[0] = 0;
    vertex5.normal.elements[1] = 32;
    vertex5.normal.elements[2] = -32;

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    return vertices;
  }
}
