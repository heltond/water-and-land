(function () {

    var centerCoords = [0, 48]
    var mapScale = 5250
    var xChange = [0, 0, 780, 408]

    var zoomFlag = true

    const overlapGeoJson = d3.json('data/overlap_wria.geojson')
    const pollutionGeoJson = d3.json('data/pollution.geojson')

    const mapContainer = d3.select('#map')
    const mapContainer2 = d3.select('#map2')
    const mapContainer3 = d3.select('#map3')
    const mapContainer4 = d3.select('#map4')
    const mapContainer5 = d3.selectAll('#map, #map2, #map3, #map4')
    const mapUiContainer = d3.select('body')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    var projection = d3.geoAlbers()
        .center(centerCoords)
        .rotate([120, 0])
        .scale(mapScale)

    var path = d3.geoPath()
        .projection(projection);

    var t = [408, height / (780 / 408)];

    projection
        .translate(t);

    function checkMaps() {
        mapContainer.selectAll('svg').remove()
        mapContainer2.selectAll('svg').remove()
        mapContainer3.selectAll('svg').remove()
        mapContainer4.selectAll('svg').remove()
    }

    function createMaps() {

        Promise.all([overlapGeoJson]).then(residential);

        Promise.all([overlapGeoJson]).then(production);

        Promise.all([overlapGeoJson]).then(recreational);

        Promise.all([overlapGeoJson]).then(undeveloped);

    }

    function polData() {

        Promise.all([pollutionGeoJson]).then(getData);

    }

    createMaps()

    function residential(data) {

        console.log("done1")

        const svg = mapContainer
            .append("div")
            .attr("id", "svg")
            .append("svg")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", xChange[0] + " " + xChange[1] + " " + xChange[2] + " " + xChange[3])
            .attr("preserveAspectRatio", "xMidYMid")
            .attr("z-index", "1")
        mapData = data[0]
        getData(mapData);

        function getData(data) {

            drawMap('residential_pc', data)
        }

        function drawMap(landType, data) {

            const overlapData = data;

            const myArray = []
            for (let x of overlapData.features) {
                if (x.properties[landType] > 0) {
                    myArray.push(+x.properties[landType])
                }
            }

            const wheel = ['#ffffff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            svg.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("stroke-width", d => {
                    if (zoomFlag == true) {
                        return 1;
                    }
                    else {
                        return 0.5;
                    }
                })
                .attr("fill", d => {
                    if (d.properties[landType] > 0) {
                        return color(d.properties[landType]);
                    }
                    else if (d.properties[landType] == -1) {
                        return 'yellow';
                    }
                    else if (d.properties[landType] == -2) {
                        return 'orange';
                    }
                    else if (d.properties[landType] == -3) {
                        return 'blue';
                    }
                })
                .style("opacity", d => {
                    if (d.properties[landType] > 0) {
                        return 1;
                    }
                    else if (d.properties[landType] == -1) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -2) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -3) {
                        return 0.2;
                    }
                });

        }

    };

    function production(data) {

        console.log("done2")

        const svg2 = mapContainer2
            .append("div")
            .attr("id", "svg")
            .append("svg")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", xChange[0] + " " + xChange[1] + " " + xChange[2] + " " + xChange[3])
            .attr("preserveAspectRatio", "xMidYMid");
        mapData = data[0]
        getData(mapData);

        function getData(data) {

            drawMap('production_pc', data)
        }

        function drawMap(landType, data) {

            const overlapData = data;

            const myArray = []
            for (let x of overlapData.features) {
                if (x.properties[landType] > 0) {
                    myArray.push(+x.properties[landType])
                }
            }

            const wheel = ['#ffffff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            svg2.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("stroke-width", d => {
                    if (zoomFlag == true) {
                        return 1;
                    }
                    else {
                        return 0.5;
                    }
                })
                .attr("fill", d => {
                    if (d.properties[landType] > 0) {
                        return color(d.properties[landType]);
                    }
                    else if (d.properties[landType] == -1) {
                        return 'yellow';
                    }
                    else if (d.properties[landType] == -2) {
                        return 'orange';
                    }
                    else if (d.properties[landType] == -3) {
                        return 'blue';
                    }
                })
                .style("opacity", d => {
                    if (d.properties[landType] > 0) {
                        return 1;
                    }
                    else if (d.properties[landType] == -1) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -2) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -3) {
                        return 0.2;
                    }
                });

        }

    };

    function recreational(data) {

        console.log("done3")

        const svg3 = mapContainer3
            .append("div")
            .attr("id", "svg")
            .append("svg")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", xChange[0] + " " + xChange[1] + " " + xChange[2] + " " + xChange[3])
            .attr("preserveAspectRatio", "xMidYMid");
        mapData = data[0]
        getData(mapData);

        function getData(data) {

            drawMap('recreational_pc', data)
        }

        function drawMap(landType, data) {

            const overlapData = data;

            const myArray = []
            for (let x of overlapData.features) {
                if (x.properties[landType] > 0) {
                    myArray.push(+x.properties[landType])
                }
            }

            const wheel = ['#ffffff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            svg3.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("stroke-width", d => {
                    if (zoomFlag == true) {
                        return 1;
                    }
                    else {
                        return 0.5;
                    }
                })
                .attr("fill", d => {
                    if (d.properties[landType] > 0) {
                        return color(d.properties[landType]);
                    }
                    else if (d.properties[landType] == -1) {
                        return 'yellow';
                    }
                    else if (d.properties[landType] == -2) {
                        return 'orange';
                    }
                    else if (d.properties[landType] == -3) {
                        return 'blue';
                    }
                })
                .style("opacity", d => {
                    if (d.properties[landType] > 0) {
                        return 1;
                    }
                    else if (d.properties[landType] == -1) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -2) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -3) {
                        return 0.2;
                    }
                });

        }

    };

    function undeveloped(data) {

        console.log("done4")

        const svg4 = mapContainer4
            .append("div")
            .attr("id", "svg")
            .append("svg")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", xChange[0] + " " + xChange[1] + " " + xChange[2] + " " + xChange[3])
            .attr("preserveAspectRatio", "xMidYMid");
        mapData = data[0]
        getData(mapData);

        function getData(data) {

            drawMap('undeveloped_pc', data)
        }

        function drawMap(landType, data) {

            const overlapData = data;

            const myArray = []
            for (let x of overlapData.features) {
                if (x.properties[landType] > 0) {
                    myArray.push(+x.properties[landType])
                }
            }

            const wheel = ['#ffffff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            svg4.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("stroke-width", d => {
                    if (zoomFlag == true) {
                        return 1;
                    }
                    else {
                        return 0.5;
                    }
                })
                .attr("fill", d => {
                    if (d.properties[landType] > 0) {
                        return color(d.properties[landType]);
                    }
                    else if (d.properties[landType] == -1) {
                        return 'yellow';
                    }
                    else if (d.properties[landType] == -2) {
                        return 'orange';
                    }
                    else if (d.properties[landType] == -3) {
                        return 'blue';
                    }
                })
                .style("opacity", d => {
                    if (d.properties[landType] > 0) {
                        return 1;
                    }
                    else if (d.properties[landType] == -1) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -2) {
                        return 0.2;
                    }
                    else if (d.properties[landType] == -3) {
                        return 0.2;
                    }
                });

        }

        polData();

    };




    function getData(data) {

        console.log("done5")

        const svg5 = mapContainer5
            .append("div")
            .attr("id", "svg")
            .append("svg")
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("viewBox", xChange[0] + " " + xChange[1] + " " + xChange[2] + " " + xChange[3])
            .attr("preserveAspectRatio", "xMidYMid")
            .attr("z-index", "2")
            .on("click", function () {
                mapUi.remove()
                checkMaps()
                var abc = d3.mouse(this)
                if (zoomFlag == true) {
                    if (abc[0] < 370 && abc[1] < 220) {
                        xChange = [150, 95, 200, 150]
                        createMaps()
                    }
                    else if (abc[0] < 370 && abc[1] > 220) {
                        xChange = [150, 265, 200, 150]
                        createMaps()
                    }
                    else if (abc[0] > 370 && abc[1] < 220) {
                        xChange = [375, 95, 200, 150]
                        createMaps()
                    }
                    else {
                        xChange = [375, 265, 200, 150]
                        createMaps()
                    }
                }
                else {
                    xChange = [0, 0, 780, 408]

                    createMaps()
                }
                zoomFlag = !zoomFlag
            });

        const mapUi = mapUiContainer
            .append('div')
            .attr('width', width)
            .attr('height', height)
            .classed('position-absolute', true)
            .style('top', '10px')
            .style('right', '30px')
            .style('border', '5px');

        function drawLegend() {
            mapUi.html(`<div id='mapUi'>
       <div class="checkbox" id="checkbox-ui">
        <div><input type="checkbox" name="pollutant" id="Ammonia-N"><label>Ammonia</label></div>
        <div><input type="checkbox" name="pollutant" id="Arsenic"><label>Arsenic</label></div>
        <div><input type="checkbox" name="pollutant" id="Copper"><label>Copper</label></div>
        <div><input type="checkbox" name="pollutant" id="PCBs"><label>PCBs</label></div>
        <div><input type="checkbox" name="pollutant" id="Zinc"><label>Zinc</label></div>        
      </select>
    </div>
  </div>`)
        }

        drawLegend();

        const pollutionData = data[0]

        var ammoniaFlag = false
        var arsenicFlag = false
        var copperFlag = false
        var pcbFlag = false
        var zincFlag = false

        d3.select('#Ammonia-N').on('change', function () {
            ammoniaFlag = !ammoniaFlag;
            createArray();
        });

        d3.select('#Arsenic').on('change', function () {
            arsenicFlag = !arsenicFlag;
            createArray();
        });

        d3.select('#Copper').on('change', function () {
            copperFlag = !copperFlag;
            createArray();
        });

        d3.select('#PCBs').on('change', function () {
            pcbFlag = !pcbFlag;
            createArray();
        });

        d3.select('#Zinc').on('change', function () {
            zincFlag = !zincFlag;
            createArray();
        });

        function createArray() {
            svg5.select('g').remove();
            const pollutionArray = []
            if (ammoniaFlag == true) {

                for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Ammonia-N") {
                        pollutionArray.push(x);

                    }
                }
            }

            if (arsenicFlag == true) {

                for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Arsenic") {
                        pollutionArray.push(x);

                    }
                }
            }

            if (copperFlag == true) {

                for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Copper") {
                        pollutionArray.push(x);

                    }
                }
            }

            if (pcbFlag == true) {

                for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Polychlorinated Biphenyls (PCBs)") {
                        pollutionArray.push(x);

                    }
                }
            }

            if (zincFlag == true) {

                for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Zinc") {
                        pollutionArray.push(x);

                    }
                }
            }
            drawMap(pollutionArray)
        }


        function drawMap(data) {

            const pollutionData = data;

            svg5.append('g')
                .selectAll('path')
                .data(pollutionData)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("stroke-width", d => {
                    if (zoomFlag == true) {
                        return 1;
                    }
                    else {
                        return 0.5;
                    }
                })
                .attr("fill", "blue")

        }
    }

}

)();