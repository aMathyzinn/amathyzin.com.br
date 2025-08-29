// Minimal shim that exports a default factory compatible with troika-three-text usage
module.exports = function createSDFGenerator() {
  return {
    // troika expects an object with a `generate` method; provide a noop that throws
    generate: function() {
      throw new Error('webgl-sdf-generator is not available in this environment (shim)')
    }
  }
}


