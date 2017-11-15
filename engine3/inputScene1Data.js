var objects = { 

"type": "node",
"name": "rootNode",

"children":
[
	// CAMERA
	{
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 18],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},

	// LIGHTS
	{
		"type": "directionalLight",
		"name": "dlight1",
		"color": [1, 1, 0.5],
		"position": [1, 2, 1]
	},
	{
		"type": "directionalLight",
		"name": "dlight2",
		"color": [0.1, 0.1, 0.3],
		"position": [-1, 0.1, 0.5]
	},
	{
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": 1.0
	},

	// text
	{
		"type": "text",
		"font": "optimer_regular",
		"name": "text1",
		"text": "Rotation",
		"size": 1.5,
		"userData": 
		{ 
			"scripts": ["rotate"]
		},
		"material":
		{
			"type": "pointsMaterial",
			"name": "sm2",
			"size": 0.2,
			"transparent": true,
			"color": [0, 0.5, 0.1]
		}
	},
	{
		// "SPHERE --------------------------------------------------------",
		"type": "mesh",
		"name": "sphere",
		"scale": [0.5, 0.5, 0.5],
		"translate": [-2, -2, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 32,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 0, 0],
			"specularColor": [0.04, 0.04, 0.04],
			"shininess": 100
		}
	},

	{
		// "CONE --------------------------------------------------------",
		"type": "mesh",
		"name": "cone",
		"scale": [0.5, 0.5, 0.5],
		"translate": [2, -2, 0],
		"geometry": "cone",
		"radius": 0.75,
		"height": 2.0,
		"radiusSegments": 16,
		"heightSegments": 4,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0.5, 0, 0.5],
			"specularColor": [0.04, 0.04, 0.04],
			"shininess": 100
		}
	},

	{
		// "CYLINDER --------------------------------------------------------",
		"type": "mesh",
		"name": "cylinder",
		"scale": [0.5, 0.5, 0.5],
		"translate": [-2, 2, 0],
		"geometry": "cylinder",
		"radiusTop": 0.75,
		"radiusBottom": 0.5,
		"height": 2.0,
		"radiusSegments": 16,
		"heightSegments": 4,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0, 1, 0],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},

	{
		// "TORUS --------------------------------------------------------",
		"type": "mesh",
		"name": "torus",
		"scale": [0.5, 0.5, 0.5],
		"translate": [0, -2, 0],
		"geometry": "torus",
		"radius": 1.0,
		"tube": 0.25,
		"radialSegments": 10,
		"tubularSegments": 28,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0, 0, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},

	{
		// "CUBE --------------------------------------------------------",
		"type": "mesh",
		"name": "cube",
		"scale": [0.3, 0.5, 0.3],
		"translate": [2, 2, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0, 0.7, 0.7],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		// "FLOOR --------------------------------------------------------",
		"type": "mesh",
		"name": "floor",
		"translate": [0, -3.5, 0],
		"geometry": "plane",
		"width": 8,
		"height": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	},
	
	{
		"type": "sprite",
		"name": "sprite",
		"scale": [2, 3, 1],
		"translate": [0, -3.0, 0],
		"material":
		{
			"type": "spriteMaterial",
			"name": "smat1",
			"color": [1.0, 0.5, 0.5],
			"map": "robotImage.png",
		}
	}
]
}