(function () {

    const mapContainer = d3.select('#map')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const svg = mapContainer
    .append("div")
    .attr("id", "svg")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 780 408")
 
    const overlapGeoJson = d3.json('overlap_wria.geojson')

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
        .center([-0.75, 47.5])
        .rotate([120, 0])
        .scale(6000)
                .translate([width / 2, height / 2]);

        const path = d3.geoPath()
            .projection(projection);

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
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 780 408");
    
    const overlapGeoJson = d3.json('overlap_wria.geojson')

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
        .center([-0.75, 47.5])
        .rotate([120, 0])
        .scale(6000)
                .translate([width / 2, height / 2]);

        const path = d3.geoPath()
            .projection(projection);

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
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 780 408");
 
    const overlapGeoJson = d3.json('overlap_wria.geojson')

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
        .center([-0.75, 47.5])
        .rotate([120, 0])
        .scale(6000)
                .translate([width / 2, height / 2]);

        const path = d3.geoPath()
            .projection(projection);

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
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 780 408");
 
    const overlapGeoJson = d3.json('overlap_wria.geojson')

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
        .center([-0.75, 47.5])
        .rotate([120, 0])
        .scale(6000)
                .translate([width / 2, height / 2]);

        const path = d3.geoPath()
            .projection(projection);

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