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

    return text;
    })
}

