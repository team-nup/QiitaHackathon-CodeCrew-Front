import * as THREE from 'three';
import createText from './createText';
import Three from './three';

export default function createUserParticles(scene: THREE.Scene, count: number) {
  // 指定された数だけランダムな位置に球体を生成
  for (let i = 0; i < count; i++) {
    // ワイヤーフレームの球体の生成
    const geometry = new THREE.SphereGeometry(0.4, 20, 20);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00ffff });
    const sphere = new THREE.Mesh(geometry, material);
    
    // ランダムな位置に配置
    const posX = Math.random() * 10 - 5; // X座標を-5から5の範囲でランダムに設定
    const posY = Math.random() * 10 - 5; // Y座標を-5から5の範囲でランダムに設定
    const posZ = Math.random() * 10 - 5; // Z座標を-5から5の範囲でランダムに設定
    sphere.position.set(posX, posY, posZ);
    
    scene.add(sphere);

    let targetTextPos: THREE.Vector3 = new THREE.Vector3(sphere.position.x,sphere.position.y+1,sphere.position.z);

    createText(scene, "頑張る",  targetTextPos, false);
    //sphereと3Dtextグループ化させたい
  }
}
