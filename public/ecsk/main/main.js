import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import {OrbitControls} from "OrbitControls";
import {OBJLoader} from "OBJLoader";
import { MTLLoader } from 'https://unpkg.com/three@0.138.0/examples/jsm/loaders/MTLLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.2, 500 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set(0,4,8);

// 添加网格地面
const gridHelper = new THREE.GridHelper(20, 20);
gridHelper.material.opacity=0.2;
gridHelper.material.transparent=true;
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(100);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

var bluePoint = new THREE.PointLight(0xffffff, 3, 150);
bluePoint.position.set( 70, 5, 70 );
scene.add(bluePoint);
scene.add(new THREE.PointLightHelper(bluePoint, 3));

var bluePoint = new THREE.PointLight(0xffffff, 3, 150);
bluePoint.position.set( 0, 15, 0);
scene.add(bluePoint);
scene.add(new THREE.PointLightHelper(bluePoint, 3));

var bluePoint = new THREE.PointLight(0xffffff, 3, 150);
bluePoint.position.set( 0, 0, -20);
scene.add(bluePoint);
scene.add(new THREE.PointLightHelper(bluePoint, 3));


const loader = new OBJLoader().setPath('model/cnc/');
const mtlLoader = new MTLLoader();
let tb ={position:{
    x:0
}};

let lr ={position:{
    x:0
}};

mtlLoader.load('model/cnc/machine.mtl', function(materials) {
    materials.preload();
    loader.setMaterials(materials);
    loader.load('machine.obj', function(object){
        //设置模型缩放比例
        object.scale.set(1.5, 1.5, 1.5);
        //设置模型的坐标
        object.position.set(0, 0, 0);
        scene.add(object);
        renderer.render( scene, camera );
        tb = object.children[3];
        lr = object.children[2];
        console.log(object);

        renderer.render( scene, camera );
    });
    
});


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};


var socket = new WebSocket('wss://bohao.de:8888');
socket.onopen = function () {
    console.log('connected');
    socket.send('from client');
};

socket.onmessage = function (message) {
    if(message.data == 'R'){
        tb.position.x += 0.05;
        lr.position.x += 0.05;
    } else {
        let a = message.data;
        tb.position.x = (a-16)/10;
        lr.position.x = (a-16)/10;
    }
    renderer.render( scene, camera );
};

socket.onerror = function (error) {
    console.log('WebSocket error: ' + error);
};

socket.addEventListener('error', (event) => {
    console.log('WebSocket error: ', event);
});


animate();
