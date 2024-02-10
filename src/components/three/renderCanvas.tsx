import * as THREE from 'three';


import createParticles from './createParticles';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


// シーンの作成
const createScene = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // シーン
    const scene = new THREE.Scene();

     // パーティクルの生成
     createParticles(scene);

    // ライト
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 1, 5);
    scene.add(camera);

    // カメラコントローラーを作成
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const controls = new OrbitControls(camera, document.body);

    const size = 5;
    const axesHelper = new THREE.AxesHelper( size );
    scene.add( axesHelper );

    const divisions = 10;
    const gridHelper = new THREE.GridHelper( 10, divisions );
    scene.add( gridHelper );

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
    });
    renderer.setSize(sizes.width, sizes.height);

    return { sizes, scene, camera, renderer };
};

export default createScene;