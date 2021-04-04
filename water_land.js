(function () {

    const mapContainer = d3.select('#map')

    const width = mapContainer.node().offsetWidth - 60;
    const height = mapContainer.node().offsetHeight - 60;

    const legendContainer = d3.select('#map')

    const svgLegend = legendContainer
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .classed('position-absolute', true)
    .style('top', '10px')
    .style('left', '30px');

    const svg = mapContainer
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    const mapUiContainer = d3.select('#map')

    const mapUi = mapUiContainer
        .append('div')
        .attr('width', width)
        .attr('height', height)
        .classed('position-absolute', true)
        .style('top', '10px')
        .style('right', '30px');

    function drawLegend() {
        mapUi.html(`<div id='mapUi'>
       <div class="form-group mr-3 mt-3" id="dropdown-ui">
      <select class="form-control bg-primary text-white">
        <option value="manufacturing_pc" selected>Manufacturing</option>
        <option value="production_pc">Production</option>
        <option value="recreational_pc">Recreational</option>
        <option value="residential_pc">Residential</option>
        <option value="service_pc">Service</option>
        <option value="trade_pc">Trade</option>
        <option value="transportation_pc">Transportation</option>
        <option value="undeveloped_pc">Undeveloped</option>
      </select>
    </div>
  </div>`)
    }

    drawLegend();

    

    const overlapGeoJson = d3.json('overlap_wria.geojson')



    Promise.all([overlapGeoJson]).then(getData);

    var retain = '';

    function getData(data) {

        if (retain == '') {

            d3.select('#dropdown-ui select').on('change', function () {
                svg.selectAll('*').remove()
                svgLegend.selectAll('*').remove()
                drawMap(this.value, data)
            });

        }

        else {
            drawMap(this.value, data)
        }

        drawMap('manufacturing_pc', data)
    }

    window.addEventListener('resize', () => {
        var retain = this.value;
        getData(retain, data)

        svg.selectAll("*").remove();

        Promise.all([overlapGeoJson])
            .then(getData)
            .catch(error => {
                console.log(error)
            });
    });


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
        .scale(11000)
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