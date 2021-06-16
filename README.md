## How Land Development Affects Water Pollution

### I. Introduction

Pollution is an inevitable byproduct of human activity. It is with less certainty, however, that we can speak to the nature of either without understanding the specific causal relationships that govern the creation of human-produced pollution. To that end, documenting pollution can be instructive in determining where it is likely to occur, and in what form, leading into answers for greater questions about prevention and restoration. One organization of many conducting such research is the Washington State Department of Ecology, whose publicly available studies into water pollution and land use in the state of Washington have provided the bulk of the data necessary to create this map.

This project investigates the link between water pollution and land use by comparing their characteristic variables with mapping tools. By comparing different kinds of water pollution with different scales of land use, patterns and correlations emerge in the hopes of provoking further study. The extent to which certain chemical pollutants are dependent on their manmade environments informs the level of risk an area is given, warns for the emergence or growth of pollution in understudied or undeveloped sites, and can serve as a guide in the development of future projects, be they the continued expansion of modernity into natural domains or conservationist undertakings seeking to curtail further contamination of essential resources.

### II. Methodology

The data used from for this project was created and made available by [the Washington State Department of Ecology](https://ecology.wa.gov/Research-Data/Data-resources/Geographic-Information-Systems-GIS/Data). The tools used to curate and apply data were QGIS and Python, by way of Jupyter.

#### A. Data

Three datasets were employed for this project: [Current Washington Water Quality Assessment 305(b)](https://fortress.wa.gov/ecy/gispublic/DataDownload/WQ_ENV_WQAssessmentCurrent.jpg) and [Land Use 2010](https://fortress.wa.gov/ecy/gispublic/DataDownload/ECY_CAD_Landuse2010.jpg), both from the Department of Ecology, and [Washington County Boundaries](https://data-wadnr.opendata.arcgis.com/datasets/wa-county-boundaries-1) from the Washington Department of Natural Resources.

To begin, Jupyter was used to analyze the water pollution and land use data. Because the water pollution dataset contains hundreds of kinds of pollutants, with different rates of frequency, this sort of tool was needed to determine which pollutants were frequent enough, overall and in relation to one another, to allow for useful conclusions to be drawn; five chemical pollutants were selected for the project. The land use dataset was consolidated from narrow categorization of land types to more general groupings that had been suggested but not implemented by the authors. Both datasets were trimmed of extraneous and technical information that was not needed. QGIS was used to perform certain spatial analyses. By comparing the land use to the counties in which they reside, a new dataset was created that records the relative proliferation of different land use types within each county.

#### B. Medium for delivery

The map is a browser-based application that is compatible with mobile formats and best suited for desktop use. The page was built primarily with HTML, CSS, and JavaScript. Leaflet and D3 are mapping tools that interpret the data and turn it into an interactive and dynamic mapping project. Bootstrap will be used to provide the page with a visual framework.

#### C. Application layout

#### D. Thematic representation

This map uses a choropleth as a base. The choropleth colors counties by the proportional representation of selected land use types to display where land is most commonly devoted to a certain kind of land use. The color darkens as the percentage increases. Overlaid on top of the choropleth is polygonal vector data of the sites where water pollution has occurred. Thus, the audience can compare the location of the pollution site with the inclinations of the surrounding area.

#### E. User interaction

The user is provided with a menu with which to change the pollution data displayed on the map. Toggling the pollutant changes the displayed sites to match the ones where the desired pollutant was found.

A button near the top of the webpage reveals a text box that explains the purpose and use of the map. Several external links to data and code sources are also provided. The user is restricted from zooming in or out, and the map will remain within boundaries where the state remains visible.

#### F. Aesthetics and design consideration

The map has been built to have a straight-forward design that minimizes clutter and presents detailed information on the user's request. Because the focus is more on investigating relationships rather than proving or disproving a hypothesis, the map should be focused on providing the user with a way to access their desired information as simply and directly as possible. The choropleth is blue because blue is commonly associated with water, and the color does not obscure the pollutants that appear in front, which are polygonal but resemble lines and points at normal zoom levels and are therefore not stylized extensively.

#### G. Conclusion

Understanding the relationship between actions and their consequences is particuarly important when dealing with issues such as pollution, which can have sweeping and long-lasting implications on health, sustainability, and conservation. Ideally, this project helps to clarify what sorts of human development can result in pollution, which in turn allows for better-informed planning and precaution when altering or furthering the borders between the natural and built worlds.