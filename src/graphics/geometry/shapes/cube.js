/**
pecifies a Cube. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Cube}
 */
class Cube extends Geometry {
  /**
   * Constructor for Cube.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Cube} Cube created
   */
  constructor(shader, image, x, y, z, s) {
    super(shader);

    this.vertices = this.generateCubeVertices(x, y, z, s);
    this.faces = { 0: [0, 1, 1] };

    this.image = image;

    // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
    this.interleaveVertices();
  }

  generateCubeVertices(x, y, z, s) {
    var vertices = [];

    // front
    var vertex0 = new Vertex(0 - 5 + x, 0 + y, 0 + 10 + z); // E
    var vertex1 = new Vertex(0 - 5 + x, 1 + y, 0 + 10 + z); // H
    var vertex2 = new Vertex(1 - 5 + x, 1 + y, 0 + 10 + z); // G

    var vertex3 = new Vertex(0 - 5 + x, 0 + y, 0 + 10 + z); // E
    var vertex4 = new Vertex(1 - 5 + x, 1 + y, 0 + 10 + z); // G
    var vertex5 = new Vertex(1 - 5 + x, 0 + y, 0 + 10 + z); // F
    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 0 - 5 + x;
    vertex0.normal.elements[1] = 0 + y;
    vertex0.normal.elements[2] = 0 + 10 + z;

    vertex1.normal.elements[0] = 0 - 5 + x;
    vertex1.normal.elements[1] = 1 + y;
    vertex1.normal.elements[2] = 0 + 10 + z;

    vertex2.normal.elements[0] = 1 - 5 + x;
    vertex2.normal.elements[1] = 1 + y;
    vertex2.normal.elements[2] = 0 + 10 + z;

    vertex3.normal.elements[0] = 0 - 5 + x;
    vertex3.normal.elements[1] = 0 + y;
    vertex3.normal.elements[2] = 0 + 10 + z;

    vertex4.normal.elements[0] = 1 - 5 + x;
    vertex4.normal.elements[1] = 1 + y;
    vertex4.normal.elements[2] = 0 + 10 + z;

    vertex5.normal.elements[0] = 1 - 5 + x;
    vertex5.normal.elements[1] = 0 + y;
    vertex5.normal.elements[2] = 0 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    //left
    var vertex0 = new Vertex(0 - 5 + x, 0 + y, -1 + 10 + z); // A
    var vertex1 = new Vertex(0 - 5 + x, 1 + y, -1 + 10 + z); // D
    var vertex2 = new Vertex(0 - 5 + x, 1 + y, 0 + 10 + z); // H

    var vertex3 = new Vertex(0 - 5 + x, 0 + y, -1 + 10 + z); // A
    var vertex4 = new Vertex(0 - 5 + x, 1 + y, 0 + 10 + z); // H
    var vertex5 = new Vertex(0 - 5 + x, 0 + y, 0 + 10 + z); // E

    vertex0.texCoord = [0.0, 0.5];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.5];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.5];

    vertex0.normal.elements[0] = 0 - 5 + x;
    vertex0.normal.elements[1] = 0 + y;
    vertex0.normal.elements[2] = -1 + 10 + z;

    vertex1.normal.elements[0] = 0 - 5 + x;
    vertex1.normal.elements[1] = 1 + y;
    vertex1.normal.elements[2] = -1 + 10 + z;

    vertex2.normal.elements[0] = 0 - 5 + x;
    vertex2.normal.elements[1] = 1 + y;
    vertex2.normal.elements[2] = -1 + 10 + z;

    vertex3.normal.elements[0] = 0 - 5 + x;
    vertex3.normal.elements[1] = 0 + y;
    vertex3.normal.elements[2] = -1 + 10 + z;

    vertex4.normal.elements[0] = 0 - 5 + x;
    vertex4.normal.elements[1] = 1 + y;
    vertex4.normal.elements[2] = 0 + 10 + z;

    vertex5.normal.elements[0] = 0 - 5 + x;
    vertex5.normal.elements[1] = 0 + y;
    vertex5.normal.elements[2] = 0 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // back
    var vertex0 = new Vertex(1 - 5 + x, 0 + y, -1 + 10 + z); // B
    var vertex1 = new Vertex(1 - 5 + x, 1 + y, -1 + 10 + z); // C
    var vertex2 = new Vertex(0 - 5 + x, 1 + y, -1 + 10 + z); // D

    var vertex3 = new Vertex(1 - 5 + x, 0 + y, -1 + 10 + z); // B
    var vertex4 = new Vertex(0 - 5 + x, 1 + y, -1 + 10 + z); // D
    var vertex5 = new Vertex(0 - 5 + x, 0 + y, -1 + 10 + z); // A

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 0.5];
    vertex2.texCoord = [1.0, 0.5];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 0.5];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 1 - 5 + x;
    vertex0.normal.elements[1] = 0 + y;
    vertex0.normal.elements[2] = -1 + 10 + z;

    vertex1.normal.elements[0] = 1 - 5 + x;
    vertex1.normal.elements[1] = 1 + y;
    vertex1.normal.elements[2] = -1 + 10 + z;

    vertex2.normal.elements[0] = 0 - 5 + x;
    vertex2.normal.elements[1] = 1 + y;
    vertex2.normal.elements[2] = -1 + 10 + z;

    vertex3.normal.elements[0] = 1 - 5 + x;
    vertex3.normal.elements[1] = 0 + y;
    vertex3.normal.elements[2] = -1 + 10 + z;

    vertex4.normal.elements[0] = 0 - 5 + x;
    vertex4.normal.elements[1] = 1 + y;
    vertex4.normal.elements[2] = -1 + 10 + z;

    vertex5.normal.elements[0] = 0 - 5 + x;
    vertex5.normal.elements[1] = 0 + y;
    vertex5.normal.elements[2] = -1 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // right
    var vertex0 = new Vertex(1 - 5 + x, 0 + y, 0 + 10 + z); // F
    var vertex1 = new Vertex(1 - 5 + x, 1 + y, 0 + 10 + z); // G
    var vertex2 = new Vertex(1 - 5 + x, 1 + y, -1 + 10 + z); // C

    var vertex3 = new Vertex(1 - 5 + x, 0 + y, 0 + 10 + z); // F
    var vertex4 = new Vertex(1 - 5 + x, 1 + y, -1 + 10 + z); // C
    var vertex5 = new Vertex(1 - 5 + x, 0 + y, -1 + 10 + z); // B

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];

    vertex0.normal.elements[0] = 1 - 5 + x;
    vertex0.normal.elements[1] = 0 + y;
    vertex0.normal.elements[2] = 0 + 10 + z;

    vertex1.normal.elements[0] = 1 - 5 + x;
    vertex1.normal.elements[1] = 1 + y;
    vertex1.normal.elements[2] = 0 + 10 + z;

    vertex2.normal.elements[0] = 1 - 5 + x;
    vertex2.normal.elements[1] = 1 + y;
    vertex2.normal.elements[2] = -1 + 10 + z;

    vertex3.normal.elements[0] = 1 - 5 + x;
    vertex3.normal.elements[1] = 0 + y;
    vertex3.normal.elements[2] = 0 + 10 + z;

    vertex4.normal.elements[0] = 1 - 5 + x;
    vertex4.normal.elements[1] = 1 + y;
    vertex4.normal.elements[2] = -1 + 10 + z;

    vertex5.normal.elements[0] = 1 - 5 + x;
    vertex5.normal.elements[1] = 0 + y;
    vertex5.normal.elements[2] = -1 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // up
    var vertex0 = new Vertex(0 - 5 + x, 1 + y, 0 + 10 + z); // H
    var vertex1 = new Vertex(0 - 5 + x, 1 + y, -1 + 10 + z); // D
    var vertex2 = new Vertex(1 - 5 + x, 1 + y, -1 + 10 + z); // C

    var vertex3 = new Vertex(0 - 5 + x, 1 + y, 0 + 10 + z); // H
    var vertex4 = new Vertex(1 - 5 + x, 1 + y, -1 + 10 + z); // C
    var vertex5 = new Vertex(1 - 5 + x, 1 + y, 0 + 10 + z); // G

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 3.0];
    vertex2.texCoord = [3.0, 3.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [3.0, 3.0];
    vertex5.texCoord = [3.0, 0.0];

    vertex0.normal.elements[0] = 0 - 5 + x;
    vertex0.normal.elements[1] = 1 + y;
    vertex0.normal.elements[2] = 0 + 10 + z;

    vertex1.normal.elements[0] = 0 - 5 + x;
    vertex1.normal.elements[1] = 1 + y;
    vertex1.normal.elements[2] = -1 + 10 + z;

    vertex2.normal.elements[0] = 1 - 5 + x;
    vertex2.normal.elements[1] = 1 + y;
    vertex2.normal.elements[2] = -1 + 10 + z;

    vertex3.normal.elements[0] = 0 - 5 + x;
    vertex3.normal.elements[1] = 1 + y;
    vertex3.normal.elements[2] = 0 + 10 + z;

    vertex4.normal.elements[0] = 1 - 5 + x;
    vertex4.normal.elements[1] = 1 + y;
    vertex4.normal.elements[2] = -1 + 10 + z;

    vertex5.normal.elements[0] = 1 - 5 + x;
    vertex5.normal.elements[1] = 1 + y;
    vertex5.normal.elements[2] = 0 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1

    // down
    var vertex0 = new Vertex(0 - 5 + x, 0 + y, -1 + 10 + z); // A
    var vertex1 = new Vertex(0 - 5 + x, 0 + y, 0 + 10 + z); // E
    var vertex2 = new Vertex(1 - 5 + x, 0 + y, 0 + 10 + z); // F

    var vertex3 = new Vertex(0 - 5 + x, 0 + y, -1 + 10 + z); // A
    var vertex4 = new Vertex(1 - 5 + x, 0 + y, 0 + 10 + z); // F
    var vertex5 = new Vertex(1 - 5 + x, 0 + y, -1 + 10 + z); // B

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [2.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [2.0, 1.0];
    vertex5.texCoord = [2.0, 0.0];

    vertex0.normal.elements[0] = 0 - 5 + x;
    vertex0.normal.elements[1] = 0 + y;
    vertex0.normal.elements[2] = -1 + 10 + z;

    vertex1.normal.elements[0] = 0 - 5 + x;
    vertex1.normal.elements[1] = 0 + y;
    vertex1.normal.elements[2] = 0 + 10 + z;

    vertex2.normal.elements[0] = 1 - 5 + x;
    vertex2.normal.elements[1] = 0 + y;
    vertex2.normal.elements[2] = 0 + 10 + z;

    vertex3.normal.elements[0] = 0 - 5 + x;
    vertex3.normal.elements[1] = 0 + y;
    vertex3.normal.elements[2] = -1 + 10 + z;

    vertex4.normal.elements[0] = 1 - 5 + x;
    vertex4.normal.elements[1] = 0 + y;
    vertex4.normal.elements[2] = 0 + 10 + z;

    vertex5.normal.elements[0] = 1 - 5 + x;
    vertex5.normal.elements[1] = 0 + y;
    vertex5.normal.elements[2] = -1 + 10 + z;

    vertices.push(vertex0); // Vertex0
    vertices.push(vertex1); // Vertex1
    vertices.push(vertex2); // Vertex1
    vertices.push(vertex3); // Vertex0
    vertices.push(vertex4); // Vertex1
    vertices.push(vertex5); // Vertex1
    // } else {
    //   console.log("test");

    // }

    return vertices;
  }
}
