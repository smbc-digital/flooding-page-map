const gulliesStyle = {
    radius: 4,
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#fb9a99',
    fillOpacity: 0.75
}

function getColor_drains(d) {
    switch  (d) {   case 'Gully Lead'    :
                        return '#a6cee3'    
                    case 'Highway Drain'    :
                        return '#cab2d6'
                    case 'Other'    :
                        return '#fdbf6f'
                    case null    :
                        return '#b15928'        
                }
    }

function drainsStyle (feature) {
    return {
        color: getColor_drains (feature.properties.type),
        weight: 4,
        opacity: 1,
        fillColor: getColor_drains (feature.properties.type),
        fillOpacity: 1
        }
    }

const culvertsStyle = {
    radius: 4,
    color: '#1f78b4',
    weight: 4,
    opacity: 1,
    fillColor: '#1f78b4',
    fillOpacity: 0.75
}

const trashscreensStyle = {
    radius: 6,
    color: '#252525',
    weight: 2,
    opacity: 1,
    fillColor: '#ffed6f',
    fillOpacity: 0.75
}

const floodincidentsStyle = {
    radius: 6,
    color: '#a50f15',
    weight: 2,
    opacity: 1,
    fillColor: '#cb181d',
    fillOpacity: 0.5
}

const floodassetsStyle = {
    radius: 6,
    color: '#41ab5d',
    weight: 2,
    opacity: 1,
    fillColor: '#41ab5d',
    fillOpacity: 0.5
}

const waterbodiesStyle = {
    radius: 6,
    color: '#807dba',
    weight: 2,
    opacity: 1,
    fillColor: '#807dba',
    fillOpacity: 0.5
}

export {
gulliesStyle,
drainsStyle,
culvertsStyle,
trashscreensStyle,
floodincidentsStyle,
floodassetsStyle,
waterbodiesStyle
}