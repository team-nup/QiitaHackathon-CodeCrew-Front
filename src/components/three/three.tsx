import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Three() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      camera.position.z = 5;

      // レンダリングループ
      const animate = () => {
        requestAnimationFrame(animate);
        // モデルの回転
        if (model) {
          model.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  // シーンの作成
  const createScene = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // シーン
    const scene = new THREE.Scene();

    // ライト
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
    });
    renderer.setSize(sizes.width, sizes.height);

    return { sizes, scene, camera, renderer };
  };

  return <canvas ref={canvasRef} />;
}
