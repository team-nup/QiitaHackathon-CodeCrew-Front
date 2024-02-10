import * as THREE from 'three';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";


export default function createText(scene: THREE.Scene, text3d: String, position: THREE.Vector3):any {

    const fontLoader = new FontLoader()
    fontLoader.load('assets/Rounded_Mplus_1c_Medium_Regular.json', (font) => {
    console.log("loaded font!!")

    const textGeometry = new TextGeometry(`${text3d}`, {
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    })
    textGeometry.center()

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffee58 }); 
    const text = new THREE.Mesh(textGeometry, textMaterial)
    text.castShadow = true;
    text.position.copy(position); 
    scene.add(text)
  
      const targetPosition = position.clone().add(new THREE.Vector3(20, 0, 0));
      const duration = 5000; 
      const startTime = performance.now();

      function updatePosition() {
          const currentTime = performance.now();
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); 
          const newPosition = position.clone().lerp(targetPosition, progress);
          text.position.copy(newPosition);

          if (progress < 1) {
              requestAnimationFrame(updatePosition); 
          }
          else{
            scene.remove(text);
          }
      }

      updatePosition();
    })
}

