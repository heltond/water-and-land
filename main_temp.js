(function () {

    var centerCoords = [0, 47.5]
    var mapScale = 5250
    var xChange = [780, 408]

    const overlapGeoJson = d3.json('data/overlap_wria.geojson')
    const pollutionGeoJson = d3.json('data/pollution.geojson')

    const mapContainer = d3.select('#map')
    const mapContainer2 = d3.select('#map2')
    const mapContainer3 = d3.select('#map3')
    const mapContainer4 = d3.select('#map4')
    const mapContainer5 = d3.selectAll('#map, #map2, #map3, #map4')
    const mapContainer6 = d3.selectAll('#map, #map2, #map3, #map4')
    const mapUiContainer = d3.select('#map2')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    var projection = d3.geoAlbers()
        .center(centerCoords)
        .rotate([120, 0])
        .scale(mapScale)

    var path = d3.geoPath()
        .projection(projection);

    var b = path.bounds(overlapGeoJson),
        t = [408, height / (780 / 408)];

    projection
        .translate(t);

    const svg = mapContainer
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 " + xChange[0] + " " + xChange[1])
        .attr("preserveAspectRatio", "xMidYMid");

    const svg2 = mapContainer2
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 780 408")
        .attr("preserveAspectRatio", "xMidYMid");

    const svg3 = mapContainer3
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 780 408")
        .attr("preserveAspectRatio", "xMidYMid");

    const svg4 = mapContainer4
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 780 408")
        .attr("preserveAspectRatio", "xMidYMid");

    const svg5 = mapContainer5
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 780 408")
        .attr("preserveAspectRatio", "xMidYMid");

    const svg6 = mapContainer6
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 780 408")
        .attr("preserveAspectRatio", "xMidYMid")
        .on("click", function () {
            var abc = d3.mouse(this)
            xChange = [900, 200]
            svg.remove()

            createMaps()
            
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

    function createMaps() {

    Promise.all([overlapGeoJson]).then(residential);

    Promise.all([overlapGeoJson]).then(production);

    Promise.all([overlapGeoJson]).then(recreational);

    Promise.all([overlapGeoJson]).then(undeveloped);

    Promise.all([pollutionGeoJson]).then(getData);
console.log('ffff')
    }

createMaps()

    function residential(data) {
        const svg = mapContainer
        .append("div")
        .attr("id", "svg")
        .append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", "0 0 " + xChange[0] + " " + xChange[1])
        .attr("preserveAspectRatio", "xMidYMid")
        .on("click", function () {
            var abc = d3.mouse(this)
            xChange = [900, 200]
            svg.remove()

            createMaps()
            
        });
        
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

            const wheel = ['#f7fbff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            const counties = svg.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("fill", d => {
                    return color(d.properties[landType]);
                }
                )

        }

    };

    function production(data) {

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

            const wheel = ['#f7fbff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            const projection = d3.geoAlbers()
                .center([0, 47.5])
                .rotate([120, 0])
                .scale(5250)

            const path = d3.geoPath()
                .projection(projection);

            var b = path.bounds(overlapData),
                t = [408, height / (780 / 408)];

            projection
                .translate(t);

            const counties = svg2.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("fill", d => {
                    return color(d.properties[landType]);
                }
                )

        }

    };

    function recreational(data) {

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

            const wheel = ['#f7fbff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            const projection = d3.geoAlbers()
                .center([0, 47.5])
                .rotate([120, 0])
                .scale(5250)

            const path = d3.geoPath()
                .projection(projection);

            var b = path.bounds(overlapData),
                t = [408, height / (780 / 408)];

            projection
                .translate(t);

            const counties = svg3.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("fill", d => {
                    return color(d.properties[landType]);
                }
                )

        }

    };

    function undeveloped(data) {

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

            const wheel = ['#f7fbff', '#c8ddf0', '#73b3d8', '#2879b9', '#08306b']

            const color = d3.scaleQuantile().domain(myArray).range(wheel)

            const projection = d3.geoAlbers()
                .center([0, 47.5])
                .rotate([120, 0])
                .scale(5250)

            const path = d3.geoPath()
                .projection(projection);

            var b = path.bounds(overlapData),
                t = [408, height / (780 / 408)];

            projection
                .translate(t);

            const counties = svg4.append('g')
                .selectAll('path')
                .data(overlapData.features)
                .join('path')
                .attr('d', path)
                .attr("stroke", "black")
                .attr("fill", d => {
                    return color(d.properties[landType]);
                }
                )

        }

    };




    function getData(data) {

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

    }

    function drawMap(data) {

        const pollutionData = data;

        const projection = d3.geoAlbers()
            .center([0, 47.5])
            .rotate([120, 0])
            .scale(5250)

        const path = d3.geoPath()
            .projection(projection);

        var b = path.bounds(pollutionData),
            t = [408, height / (780 / 408)];

        projection
            .translate(t);

        const counties = svg5.append('g')
            .selectAll('path')
            .data(pollutionData)
            .join('path')
            .attr('d', path)
            .attr("stroke", "black")
            .attr("fill", "blue")

    }
}

)();