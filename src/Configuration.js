import Leaflet from 'leaflet'
import { gulliesPopup, drainsPopup, culvertsPopup, trashscreensPopup, floodincidentsPopup, floodassetsPopup, waterbodiesPopup } from './Popups'
import { gulliesStyle, drainsStyle, culvertsStyle, trashscreensStyle, floodincidentsStyle, floodassetsStyle, waterbodiesStyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container',
    },
    DynamicData: 
    [
        {
            key: 'os1250_line',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        //{
            //key: 'Article 4-1 Direction',
            //url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets.vw_gullies&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            //layerOptions: {
                //onEachFeature: Article4_1_direction_Popup,
                //maxZoom: 2
                //style: Article4_1_direction_style
            //},
            //displayOverlay: true,
            //visibleByDefault: true
        //},

        {
            key: 'Gullies', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:vw_gullies&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: gulliesPopup,
                maxZoom: 2,
                style: gulliesStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        
        {
            key: 'Drains', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:drains&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: drainsPopup,
                maxZoom: 2,
                style: drainsStyle,
            },
            displayOverlay: true,
            visibleByDefault: false
        }, 
        
        {
            key: 'Culverts', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:culverts&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: culvertsPopup,
                maxZoom: 2,
                style: culvertsStyle,
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Trash Screens', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:trash_screens&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: trashscreensPopup,
                maxZoom: 2,
                style: trashscreensStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Flood Incidents', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_incidents&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: floodincidentsPopup,
                maxZoom: 2,
                style: floodincidentsStyle,
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Flood Assets', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_assets&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: floodassetsPopup,
                maxZoom: 2,
                style: floodassetsStyle,
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Waterbodies', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:waterbodies&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: waterbodiesPopup,
                maxZoom: 2,
                style: waterbodiesStyle,
            },
            displayOverlay: true,
            visibleByDefault: false
        },

    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ],
}

export default Configuration