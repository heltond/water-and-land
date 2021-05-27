(function () {

    const mapContainer = d3.select('#map')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", "0 0 780 408")
    .attr("preserveAspectRatio", "xMidYMid");
 
    const overlapGeoJson = d3.json('data/overlap_wria.geojson')

    Promise.all([overlapGeoJson]).then(getData);

    function getData(data) {

        drawMap('residential_pc', data)
    }

    function drawMap(landType, data) {

        const overlapData = data[0];

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

})();

(function () {

    const mapContainer = d3.select('#map2')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", "0 0 780 408")
    .attr("preserveAspectRatio", "xMidYMid");
 
    const overlapGeoJson = d3.json('data/overlap_wria.geojson')

    Promise.all([overlapGeoJson]).then(getData);

    function getData(data) {

        drawMap('production_pc', data)
    }

    function drawMap(landType, data) {

        const overlapData = data[0];

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

})();

(function () {

    const mapContainer = d3.select('#map3')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", "0 0 780 408")
    .attr("preserveAspectRatio", "xMidYMid");
 
    const overlapGeoJson = d3.json('data/overlap_wria.geojson')

    Promise.all([overlapGeoJson]).then(getData);

    function getData(data) {

        drawMap('recreational_pc', data)
    }

    function drawMap(landType, data) {

        const overlapData = data[0];

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

})();

(function () {

    const mapContainer = d3.select('#map4')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", "0 0 780 408")
    .attr("preserveAspectRatio", "xMidYMid");
 
    const overlapGeoJson = d3.json('data/overlap_wria.geojson')

    Promise.all([overlapGeoJson]).then(getData);

    function getData(data) {

        drawMap('undeveloped_pc', data)
    }

    function drawMap(landType, data) {

        const overlapData = data[0];

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

})();

(function () {

    const mapContainer = d3.selectAll('#map, #map2, #map3, #map4')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", "0 0 780 408")
    .attr("preserveAspectRatio", "xMidYMid");

    const mapUiContainer = d3.select('#map2')

    const mapUi = mapUiContainer
        .append('div')
        .attr('width', width)
        .attr('height', height)
        .classed('position-absolute', true)
        .style('top', '10px')
        .style('right', '30px');

    function drawLegend() {
        mapUi.html(`<div id='mapUi'>
       <div class="checkbox" id="checkbox-ui">
        <div><input type="checkbox" name="pollutant" id="Ammonia-N"><label>Ammonia</label></div>
        <div><input type="checkbox" name="pollutant" id="Arsenic"><label>Arsenic</label></div>
        <div><input type="checkbox" name="pollutant" id="Copper"><label>Copper</label></div>
        <div><input type="checkbox" name="pollutant" id="Polychlorinated Biphenyls (PCBs)"><label>PCBs</label></div>
        <div><input type="checkbox" name="pollutant" id="Zinc"><label>Zinc</label></div>        
      </select>
    </div>
  </div>`)
    }

    drawLegend();
 
    const pollutionGeoJson = d3.json('data/pollution.geojson')

    Promise.all([pollutionGeoJson]).then(getData);

    function getData(data) {

        const pollutionData = data[0]

        

        const setArray = []

        var ammoniaFlag = true
        var arsenicFlag = true

            d3.select('#Ammonia-N').on('change', function () {
                
                if (ammoniaFlag == true) {
                    const pollutionArray = []
                    for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Ammonia-N") {
                        setArray.push(x);
                        (pollutionArray.features) = setArray;
                    }
                }
                ammoniaFlag = !ammoniaFlag;
                drawMap(pollutionArray)
                }
                else {
                                        
                    for (let x of pollutionData.features) {
                        if (x.properties.ParameterName == "Ammonia-N") {
                            svg.select('g').remove();
                        }
                    }
                    ammoniaFlag = !ammoniaFlag;
                    (setArray.features) = setArray.filter(value => value.properties.ParameterName !== "Ammonia-N")
                            drawMap(setArray)
                }
                 
                
            });  

            d3.select('#Arsenic').on('change', function () {
                
                if (arsenicFlag == true) {
                    const pollutionArray = []
                    for (let x of pollutionData.features) {
                    if (x.properties.ParameterName == "Arsenic") {
                        setArray.push(x);
                        (pollutionArray.features) = setArray;
                    }
                }
                arsenicFlag = !arsenicFlag;
                console.log(pollutionArray)
                drawMap(pollutionArray)
                }
                else {
                    var changeArray = [];                    
                    for (let x of pollutionData.features) {
                        if (x.properties.ParameterName == "Arsenic") {
                            svg.select('g').remove();
                            
                        }
                        
                    }
                    arsenicFlag = !arsenicFlag;
                    
                    (setArray.features) = setArray.filter(value => value.properties.ParameterName !== "Arsenic");
                            drawMap(setArray)
                }
                
            });  
            
        
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

        const counties = svg.append('g')
            .selectAll('path')
            .data(pollutionData.features)
            .join('path')
            .attr('d', path)
            .attr("stroke", "black")
            .attr("fill", "blue")

    }

})();