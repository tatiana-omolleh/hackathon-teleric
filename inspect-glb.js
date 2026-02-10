
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'public', 'robo_face.glb');

try {
  const fd = fs.openSync(filePath, 'r');
  const header = Buffer.alloc(12);
  fs.readSync(fd, header, 0, 12, 0);

  const magic = header.readUInt32LE(0);
  if (magic !== 0x46546C67) {
    console.error('Not a valid GLB file');
    process.exit(1);
  }

  // Read first chunk header
  const chunkHeader = Buffer.alloc(8);
  fs.readSync(fd, chunkHeader, 0, 8, 12);
  const chunkLength = chunkHeader.readUInt32LE(0);
  const chunkType = chunkHeader.readUInt32LE(4);

  if (chunkType !== 0x4E4F534A) { // JSON
    console.error('First chunk is not JSON');
    process.exit(1);
  }

  const jsonBuffer = Buffer.alloc(chunkLength);
  fs.readSync(fd, jsonBuffer, 0, chunkLength, 20);
  
  const json = JSON.parse(jsonBuffer.toString('utf8'));
  
  console.log('--- GLB INSPECTION ---');
  if (json.animations) {
    console.log('Animations:', json.animations.map(a => a.name));
  } else {
    console.log('No animations found.');
  }

  if (json.nodes) {
    console.log('Nodes:', json.nodes.length);
    json.nodes.forEach((node, i) => {
        console.log(`Node ${i}: ${node.name} (Mesh: ${node.mesh !== undefined ? node.mesh : 'none'})`);
    });
  }

  if (json.meshes) {
    console.log('Meshes:', json.meshes.length);
    json.meshes.forEach((mesh, i) => {
        console.log(`Mesh ${i}: ${mesh.name}`);
        if (mesh.primitives) {
            mesh.primitives.forEach((p, pi) => {
                if (p.targets) {
                    // keys are not named in standard GLTF, they are just arrays of displacements.
                    // The names are usually in mesh.extras.targetNames (if exported by Blender)
                    // or we check 'extras'
                    console.log(`  Primitive ${pi} has ${p.targets.length} morph targets.`);
                    if (mesh.extras && mesh.extras.targetNames) {
                        console.log(`  Target Names:`, mesh.extras.targetNames);
                    }
                }
            });
        }
    });
  }
  
  if (json.skins) {
      console.log('Skins:', json.skins.length);
  }

  fs.closeSync(fd);

} catch (e) {
  console.error('Error reading GLB:', e);
}
