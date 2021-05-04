const gulliesPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Gullies</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${feature.properties.central_asset_id}</p>
    </div></div>`
  layer.bindPopup(content)
}

const drainsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Drains</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${feature.properties.structure_number_section_id}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>Diameter (mm): ${feature.properties.diameter_mm}</p>
    </div></div>`
  layer.bindPopup(content)
}

const culvertsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Culverts</span>
  </div>
  <div class="smbc-map__item__body">
    <p>ID: ${feature.properties.structure_number_section_id}</p>
    <p>Name: ${feature.properties.structure_name}</p>
    <p>Culvert Class: ${feature.properties.watercourse_class}</p>
    </div></div>`
  layer.bindPopup(content)
}

const trashscreensPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Trash Screens</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Screen Number: ${feature.properties.screen_number}</p>
    <p>Location: ${feature.properties.location}</p>
    <p>Watercourse Class: ${feature.properties.watercourse_class}</p>
    <p>Ownership: ${feature.properties.ownership}</p>
    </div></div>`
  layer.bindPopup(content)
}

const floodincidentsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Flood Incidents</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Incident Date: ${feature.properties.incident_date}</p>
    <p>Details: ${feature.properties.details}</p>
    </div></div>`
  layer.bindPopup(content)
}

const floodassetsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Flood Assets</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Description: ${feature.properties.description}</p>
    <p>Owner: ${feature.properties.owner}</p>
    </div></div>`
  layer.bindPopup(content)
}

const waterbodiesPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Waterbodies</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Location: ${feature.properties.location}</p>
    <p>Waterbody: ${feature.properties.waterbody}</p>
    </div></div>`
  layer.bindPopup(content)
}

export {
  gulliesPopup,
  drainsPopup,
  culvertsPopup,
  trashscreensPopup,
  floodincidentsPopup,
  floodassetsPopup,
  waterbodiesPopup
}