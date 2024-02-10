import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import createScene from './renderCanvas';

import './canvasContaier.css'

interface ChildProps {
  userName: string;
  chatMessages: string[];
}


export default function Three(props:ChildProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  console.log(props);

  useEffect(() => {
    // シーンの作成
    const { scene, camera, renderer } = createScene(canvasRef);

    // モデルの読み込み
    let model: THREE.Object3D;
    const loader = new GLTFLoader();
    loader.load('assets/earth.glb', (gltf) => {
      model = gltf.scene;
      scene.add(model);

      // カメラの位置を設定
      camera.position.set(0, 1, 5);
      camera.lookAt(0, 3, 0);

      // レンダリングループ
      const animate = () => {
        requestAnimationFrame(animate);
        // モデルの回転
        if (model) {
          model.rotation.y += 0.001;
        }
        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  return <canvas ref={canvasRef} className='canvasContaier'/>;
}
