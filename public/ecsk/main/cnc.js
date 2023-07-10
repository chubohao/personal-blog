let timer = []


let micDom = document.getElementById('mic');
let accDom_x = document.getElementById('acc_x');
let accDom_y = document.getElementById('acc_y');
let accDom_z = document.getElementById('acc_z');
let laserDom = document.getElementById('laser');
let eyeDom = document.getElementById('eye');
let colorDom = document.getElementById('color');
let bmeDom = document.getElementById('bme');
let magDom = document.getElementById('mag');


let micChart = echarts.init(micDom, 'dark');
let accChartX = echarts.init(accDom_x, 'dark');
let accChartY = echarts.init(accDom_y, 'dark');
let accChartZ = echarts.init(accDom_z, 'dark');
let eyeChart = echarts.init(eyeDom, 'dark');
let laserChart = echarts.init(laserDom, 'dark');
let colorChart = echarts.init(colorDom, 'dark');
let bmeChart = echarts.init(bmeDom, 'dark');
let magChart = echarts.init(magDom, 'dark');


const cgrid = {
    x: 2,
    y: 2,
    x2: 2,
    y2: 2,
};
const micOption = {
    title:{
        text: "microphone",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        show: false,
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        show: false,
        type: 'category',
        data: []
    },
    grid: cgrid,
    visualMap: {
        show: false,
        type: 'continuous',
        min: -4,
        max: 6,
        calculable: true,
        realtime: false,
        opacity: 1,
        inRange: {
            color: ['#212121', '#6A1B9A', '#EE0000']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        showSymbol:false,
        data: [],
        progressive: 11000,
        progressiveThreshold: 11088,
        animation: false
    }]
};
const accOptionX = {
    title:{
        text: "accelerator-x",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        show: false,
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        show: false,
        type: 'category',
        data: []
    },
    grid: cgrid,
    visualMap: {
        show: false,
        type: 'continuous',
        min: -3,
        max: 5,
        calculable: true,
        realtime: false,
        opacity: 1,
        inRange: {
            color: ['#212121', '#6A1B9A', '#FF8C00']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        showSymbol:false,
        data: [],
        progressive: 11000,
        progressiveThreshold: 11088,
        animation: false
    }]
};
const accOptionY = {
    title:{
        text: "accelerator-y",
        left: 0,
        top: 0,
        textStyle: {
            color:'#fff',
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        show: false,
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        show: false,
        type: 'category',
        data: []
    },
    grid: cgrid,
    visualMap: {
        show: false,
        type: 'continuous',
        min: -3,
        max: 5,
        calculable: true,
        realtime: false,
        opacity: 1,
        inRange: {
            color: ['#212121', '#6A1B9A', '#FF00FF']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        showSymbol:false,
        data: [],
        progressive: 11000,
        progressiveThreshold: 11088,
        animation: false
    }]
};
const accOptionZ = {
    title:{
        text: "accelerator-z",
        left:0,
        top:0,
        textStyle:{
        color:'#fff',
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        show: false,
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        show: false,
        type: 'category',
        data: []
    },
    grid: cgrid,
    visualMap: {
        show: false,
        type: 'continuous',
        min: -3,
        max: 5,
        calculable: true,
        realtime: false,
        opacity: 1,
        inRange: {
            color: ['#212121', '#6A1B9A', '#90EE90']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        showSymbol:false,
        data: [],
        progressive: 11000,
        progressiveThreshold: 11088,
        animation: false
    }]
};
const eyeOption = {
    title:{
        text: "eye",
        left:0,
        top:0,
        textStyle:{
        color:'#fff',
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        type: 'category',
        show: false,
        data: []
    },
    yAxis: {
        splitLine: {
            show: false
        },
        show: false,
        type: 'category',
        data: []
    },
    grid: cgrid,
    visualMap: {
        show: false,
        type: 'continuous',
        min: 0,
        max: 40,
        calculable: true,
        realtime: false,
        opacity: 1,
        inRange: {
            color: ['#212121', '#6A1B9A', '#EE0000']
        }
    },
    series: [{
        name: 'Gaussian',
        type: 'heatmap',
        showSymbol:false,
        data: [],
        progressive: 11000,
        progressiveThreshold: 11088,
        animation: false
    }]
};
const laserOption = {
    title:{
        text: "laser",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    grid: cgrid,
    legend: {
        right: 0,
        data: ['DISTANCE', 'AVERAGE 10']
    },
    series: [
    {
        name: 'DISTANCE',
        data: [],
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            normal: {
                color: '#00FA9A',
                lineStyle:{
                    width:3
                }
            }
        }
    },
    {
        name: 'AVERAGE 10',
        data: [],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            normal: {
                color: '#8A2BE2',
                lineStyle:{
                    width:3
                }
            }
        }
    }
    ]
};
const colorOption = {
    title:{
        text: "color",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    legend: {
        right:0,
        data: ['RED', 'GREEN', 'BLUE']
    },
    grid: cgrid,
    xAxis: [
    {
        type: 'category',
        boundaryGap: false,
        data: []
    }
    ],
    yAxis: [
    {
        type: 'value'
    }
    ],
    series: [
    {
        name: 'BLUE',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.7,
            color: '#1E90FF'
        },
        color: '#1E90FF',
        data: []
    },
    {
        name: 'GREEN',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.7,
            color: '#00CD00'
        },
        color: '#00CD00',
        data: []
    },
    {
    name: 'RED',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
        width: 0
    },
    showSymbol: false,
    areaStyle: {
        opacity: 0.7,
        color: '#EE1289'
    },
    color:'#EE1289',
    data: []
},
    ]
};
const bmeOption = {
    title:{
        text: "bme",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    grid: cgrid,
    legend: {
        right: 0,
        data: ['TEMPERATURE °C', 'HUMIDITY %', 'PRESSURE kPa']
    },
    series: [
        {
            name: 'TEMPERATURE °C',
            data: [],
            type: 'line',
            showSymbol: false,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle:{
                        width:7
                    }
                }
            }
        },
        {
            name: 'HUMIDITY %',
            data: [],
            type: 'line',
            showSymbol: false,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle:{
                        width:7
                    }
                }
            }
        },
        {
            name: 'PRESSURE kPa',
            data: [],
            type: 'line',
            showSymbol: false,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle:{
                        width:7
                    }
                }
            }
        }
    ]
};
const magOption = {
    title:{
        text: "magnetometer",
        left:0,
        top:0,
        textStyle:{
            color:'#fff',
        }
    },
    legend: {
        right:0,
        data: ['MAG-X', 'MAG-Y', 'MAG-Z']
    },
    grid: cgrid,
    xAxis: [
    {
        type: 'category',
        boundaryGap: false,
        data: []
    }
    ],
    yAxis: [
    {
        type: 'value'
    }
    ],
    series: [
    {
        name: 'MAG-Z',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.7,
            color: '#1E90FF'
        },
        color: '#1E90FF',
        data: []
    },
    {
        name: 'MAG-Y',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
            areaStyle: {
            opacity: 0.7,
            color: '#00CD00'
        },
        color: '#00CD00',
        data: []
    },
    {
        name: 'MAG-X',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
            width: 0
        },
        showSymbol: false,
        areaStyle: {
            opacity: 0.7,
            color: '#EE1289'
        },
        color:'#EE1289',
        data: []
    }
    ]
};

// create websocket client to connect the websocket server.
let socket_client = new WebSocket('wss://bohao.de:8888');
socket_client.onopen = function () {
    console.log('datav socket client connected to the socket server (8889)');
    for (let i=0; i<72; i++) {
        for (let j=0; j < 64; j++) {
            micOption.series[0].data.push([i, j, 0]); // 0-63
            accOptionX.series[0].data.push([i, j, 0]); // 0-6.3
            accOptionY.series[0].data.push([i, j, 0]);
            accOptionZ.series[0].data.push([i, j, 0]);
        }
        laserOption.series[0].data.push([i, 2]);
        laserOption.series[1].data.push([i, 1]);

        bmeOption.series[0].data.push([i, 1]);
        bmeOption.series[1].data.push([i, 2]);
        bmeOption.series[2].data.push([i, 3]);

        colorOption.series[0].data.push([i, Math.random()]);
        colorOption.series[1].data.push([i, Math.random()]);
        colorOption.series[2].data.push([i, Math.random()]);

        magOption.series[0].data.push([i, Math.random()]);
        magOption.series[1].data.push([i, Math.random()]);
        magOption.series[2].data.push([i, Math.random()]);
    }

    for (let i=0; i<72; i++){
        for (let j=0; j < 8; j++) {
            eyeOption.series[0].data.push([i, j, j]);
        }
    }
    micOption && micChart.setOption(micOption)
    accOptionX && accChartX.setOption(accOptionX)
    accOptionY && accChartY.setOption(accOptionY)
    accOptionZ && accChartZ.setOption(accOptionZ)
    eyeOption && eyeChart.setOption(eyeOption)
    laserOption && laserChart.setOption(laserOption)
    colorOption && colorChart.setOption(colorOption)
    bmeOption && bmeChart.setOption(bmeOption)
    magOption && magChart.setOption(magOption)
};
socket_client.onmessage = function (message) {
    timer.forEach(function(element) {
        window.clearTimeout(element)
    });
    timer = [];

    let data = JSON.parse(message.data)
    let results = data.activity;
    if (results.search('on') >= 0) {
        document.getElementById('on').style.display='block';
    } else {
        document.getElementById('on').style.display='none';
    }
    if (results.search('spin') >= 0) {
        document.getElementById('spin').style.display='block';
    } else {
        document.getElementById('spin').style.display='none';
    }
    if (results.search('left') >= 0) {
        document.getElementById('left').style.display='block';
    } else {
        document.getElementById('left').style.display='none';
    }
    if (results.search('right') >= 0) {
        document.getElementById('right').style.display='block';
    } else {
        document.getElementById('right').style.display='none';
    }
    if (results.search('upward') >= 0){
        document.getElementById('upward').style.display='block';
        updown.position.y += 0.3;
    } else {
        document.getElementById('upward').style.display='none';
    }
    if (results.search('downward') >= 0) {
        document.getElementById('downward').style.display='block';
        updown.position.y -= 0.3;
    } else {
        document.getElementById('downward').style.display='none';
    }
    if (results.search('bottom') >= 0) {
        document.getElementById('bottom').style.display='block';
        bottom.position.z -= 0.3
    } else {
        document.getElementById('bottom').style.display='none';
    }

    let distance = data.laserValue;
    leftright.position.x = (distance/27)*6;
    updown.position.x = (distance/27)*6;
    render(data.micResult, data.xResult, data.yResult, data.zResult, data.laserResult, data.laserValue, data.eyeResult, data.colorResult, data.bmeResult, data.magResult)
};
socket_client.onerror = function (error) {
    console.log('WebSocket error: ' + error);
};
socket_client.addEventListener('error', (event) => {
    console.log('WebSocket error: ', event);
});


function render(micResult, xResult, yResult, zResult, laserResult, laserValue, eyeResult, colorResult, bmeResult, magResult) {
    // mic,x,y,z,laser,color,bme
    for (let indexBatch = 5; indexBatch >= 0; indexBatch--) {
        let single_batch = window.setTimeout(function () {
            let micBatch = micResult[indexBatch];
            let xBatch = xResult[indexBatch]
            let yBatch = yResult[indexBatch]
            let zBatch = zResult[indexBatch]
            let eyeBatch = eyeResult[indexBatch]
            let laserBatch = laserValue
            let colorBatch = colorResult
            let bmeBatch = bmeResult
            let magBatch = magResult
            return function () {
                single_render(micBatch, xBatch, yBatch, zBatch, eyeBatch, laserBatch, colorBatch, bmeBatch, magBatch)
            }
        }(), 0);
        timer.push(single_batch)
    }
}

function sum(arr) {
  let s = 0;
  for (let i = 0; i<arr.length; i++) {
    s += arr[i];
  }
  return s/arr.length;
}

let index = 71
let laser_past_10 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
function single_render(micBatch, xBatch, yBatch, zBatch, eyeBatch, laserBatch, colorBatch, bmeBatch, magBatch) {
    index = index + 1
    for (let j=0; j<64; j++){
        micOption.series[0].data.shift()
        accOptionX.series[0].data.shift()
        accOptionY.series[0].data.shift()
        accOptionZ.series[0].data.shift()
        micOption.series[0].data.push([index, j, micBatch[j]]);
        accOptionX.series[0].data.push([index, j,xBatch[j]]);
        accOptionY.series[0].data.push([index, j, yBatch[j]]);
        accOptionZ.series[0].data.push([index, j, zBatch[j]]);
    }
    for (let j=0; j<8; j++){
        eyeOption.series[0].data.shift()
        eyeOption.series[0].data.push([index, j, eyeBatch[j]])
    }


    laserOption.series[0].data.shift()
    let d = parseInt(laserBatch)+Math.random()*5
    laserOption.series[0].data.push([index, d])
    laser_past_10.shift()
    laser_past_10.push(d)
    let avg = sum(laser_past_10)
    laserOption.series[1].data.shift()
    laserOption.series[1].data.push([index, avg])

    colorOption.series[0].data.shift()
    let color_r = parseInt(colorBatch[0])+Math.random()*3
    colorOption.series[0].data.push([index, color_r])
    colorOption.series[1].data.shift()
    let color_g = parseInt(colorBatch[1])+Math.random()*3
    colorOption.series[1].data.push([index, color_g])
    colorOption.series[2].data.shift()
    let color_b = parseInt(colorBatch[2])+Math.random()*3
    colorOption.series[2].data.push([index, color_b])

    magOption.series[0].data.shift()
    let mag_x = parseInt(magBatch[1])+Math.random()*3
    magOption.series[0].data.push([index, mag_x])
    magOption.series[1].data.shift()
    let mag_y = parseInt(magBatch[2])+Math.random()*3
    magOption.series[1].data.push([index, mag_y])
    magOption.series[2].data.shift()
    let mag_z = parseInt(magBatch[3])+Math.random()*3
    magOption.series[2].data.push([index, mag_z])

    bmeOption.series[0].data.shift()
    let temp = parseInt(bmeBatch[0])+Math.random()*3
    bmeOption.series[0].data.push([index, temp])
    bmeOption.series[1].data.shift()
    let humi = parseInt(bmeBatch[1])+Math.random()*3
    bmeOption.series[1].data.push([index, humi])
    bmeOption.series[2].data.shift()
    let pres = parseInt(bmeBatch[2])+Math.random()*3
    bmeOption.series[2].data.push([index, pres])



    micOption && micChart.setOption(micOption)
    accOptionX && accChartX.setOption(accOptionX)
    accOptionY && accChartY.setOption(accOptionY)
    accOptionZ && accChartZ.setOption(accOptionZ)
    laserOption && laserChart.setOption(laserOption)
    eyeOption && eyeChart.setOption(eyeOption)
    colorOption && colorChart.setOption(colorOption)
    magOption && magChart.setOption(magOption)
    bmeOption && bmeChart.setOption(bmeOption)
}



import * as THREE from "three";
import {OrbitControls} from "OrbitControls";
import {OBJLoader} from "OBJLoader";
import {MTLLoader} from 'MTLLoader';
import { GUI } from 'GUI';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 500);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement );
renderer.sortObjects = true;

camera.position.set(0, 1, 10);

// 添加网格地面
const gridHelper = new THREE.GridHelper(30, 30);
gridHelper.material.opacity=0.6;
gridHelper.material.transparent=true;
gridHelper.position.y = -3;
scene.add(gridHelper);

// const axes = new THREE.AxesHelper(3)
// scene.add(axes)

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff));
var bluePoint = new THREE.PointLight(0xffffff, 2, 150);
bluePoint.position.set(3, 50, 0);
scene.add(bluePoint);

var bluePoint = new THREE.PointLight(0xffffff, 5, 150);
bluePoint.position.set(-3, -5, 0);
scene.add(bluePoint);

var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(100, 50, 0);
scene.add(dirLight);



const loader = new OBJLoader().setPath('model/cnc/');
const mtlLoader = new MTLLoader();
let bottom = {
    position: {
        x:0,
        y:0,
        z:0
    }
};

let leftright = {
    position: {
        x:0,
        y:0,
        z:0
    }
};

let updown = {
    position: {
        x:0,
        y:0,
        z:0
    }
};

mtlLoader.load('model/cnc/cnc1.mtl', function(materials) {
    materials.preload();
    loader.setMaterials(materials);
    loader.load('cnc1.obj', function(object) {
        object.scale.set(0.7, 0.7, 0.7);
        object.position.set(0, -3, 0);
        scene.add(object);
        bottom = object.children[1];
        leftright = object.children[48];
        updown = object.children[49];
        renderer.render(scene, camera);
        console.log(object)
    });
});

let control = new function () {
    this.y = 0;
};
const gui = new GUI({width: 300, closed:true});
gui.add(control, 'y', -1, 0, 0.01).name('SPIN');

function animate() {
    if (updown.position.y > 0.9){
        updown.position.y = 0.9
    } else if (updown.position.y < 0) {
        updown.position.y = 0;
    }

    if (bottom.position.z > 0){
        bottom.position.z = 0
    } else if (bottom.position.z < -2.5) {
        bottom.position.z = -2.5;
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
