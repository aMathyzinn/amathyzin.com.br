// Minimal shim that exports a default factory compatible with troika-three-text usage
module.exports = function bidiFactory() {
  return {
    // troika may call this to handle bidi; provide simple passthrough
    getParagraphDirection: function() { return 'ltr' }
  }
}


