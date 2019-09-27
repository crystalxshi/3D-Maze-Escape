/**
 * Specifies a Right. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Right}
 */
class Right extends Geometry {
  /**
   * Constructor for Right.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Right} Right created
   */
  constructor(shader, image, x, y, z) {
    super(shader);

    this.vertices = this.generateRightVertices(x, y, z);
    this.faces = { 0: [0, 1, 2] };

    this.image = image;

    // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
    this.interleaveVertices();
  }

  generateRightVertices(x, y, z) {
    var vertices = [];

    var vertex0 = new Vertex(3 * 0.5 - 1 + x, 2 * 0.5 - 0.7, 2.5 + z);
    var vertex1 = new Vertex(2 * 0.5 - 1 + x, 1.5 * 0.5 - 0.7, 2.5 + z);
    var vertex2 = new Vertex(2 * 0.5 - 1 + x, 0.7 * 0.5 - 0.7, 2.5 + z);
    var vertex3 = new Vertex(2 * 0.5 - 1 + x, 0.7 * 0.5 - 0.7, 2.5 + z);
    var vertex4 = new Vertex(2 * 0.5 - 1 + x, 1.5 * 0.5 - 0.7, 2.5 + z);
    var vertex5 = new Vertex(0 * 0.5 - 1 + x, 2.5 * 0.5 - 0.7, 2.5 + z);

    vertex0.texCoord = [0.0, 0.0];
    vertex1.texCoord = [0.0, 1.0];
    vertex2.texCoord = [1.0, 1.0];
    vertex3.texCoord = [0.0, 0.0];
    vertex4.texCoord = [1.0, 1.0];
    vertex5.texCoord = [1.0, 0.0];
    // vertex0.color = [1.0, 0.0, 0.0, 1.0];
    // vertex1.color = [1.0, 0.0, 0.0, 1.0];
    // vertex2.color = [1.0, 0.0, 0.0, 1.0];
    // vertex3.color = [1.0, 0.0, 0.0, 1.0];
    // vertex4.color = [1.0, 0.0, 0.0, 1.0];
    // vertex5.color = [1.0, 0.0, 0.0, 1.0];

    vertices.push(vertex0);
    vertices.push(vertex1);
    vertices.push(vertex2);
    vertices.push(vertex3);
    vertices.push(vertex4);
    vertices.push(vertex5);

    return vertices;
  }
}
