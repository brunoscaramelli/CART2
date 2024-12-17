ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Malha_CART_1 = new ol.format.GeoJSON();
var features_Malha_CART_1 = format_Malha_CART_1.readFeatures(json_Malha_CART_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Malha_CART_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malha_CART_1.addFeatures(features_Malha_CART_1);
var lyr_Malha_CART_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malha_CART_1, 
                style: style_Malha_CART_1,
                popuplayertitle: 'Malha_CART',
                interactive: true,
    title: 'Malha_CART<br />\
    <img src="styles/legend/Malha_CART_1_0.png" /> SP 225<br />\
    <img src="styles/legend/Malha_CART_1_1.png" /> SP 270<br />\
    <img src="styles/legend/Malha_CART_1_2.png" /> SP 327<br />\
    <img src="styles/legend/Malha_CART_1_3.png" /> SPA 007/327<br />\
    <img src="styles/legend/Malha_CART_1_4.png" /> SPA 026/327<br />\
    <img src="styles/legend/Malha_CART_1_5.png" /> SPA 247/225<br />\
    <img src="styles/legend/Malha_CART_1_6.png" /> SPA 277/225<br />\
    <img src="styles/legend/Malha_CART_1_7.png" /> SPA 392/270<br />\
    <img src="styles/legend/Malha_CART_1_8.png" /> SPA 424/270<br />\
    <img src="styles/legend/Malha_CART_1_9.png" /> SPA 440/270<br />\
    <img src="styles/legend/Malha_CART_1_10.png" /> SPA 441/270<br />\
    <img src="styles/legend/Malha_CART_1_11.png" /> SPA 471/270<br />\
    <img src="styles/legend/Malha_CART_1_12.png" /> SPA 552/270<br />\
    <img src="styles/legend/Malha_CART_1_13.png" /> SPA 553/270<br />\
    <img src="styles/legend/Malha_CART_1_14.png" /> SPA 576/270<br />\
    <img src="styles/legend/Malha_CART_1_15.png" /> SPA 586/270<br />\
    <img src="styles/legend/Malha_CART_1_16.png" /> SPA 597/270<br />\
    <img src="styles/legend/Malha_CART_1_17.png" /> SPA 608/270<br />\
    <img src="styles/legend/Malha_CART_1_18.png" /> SPA 619/270<br />\
    <img src="styles/legend/Malha_CART_1_19.png" /> SPA 634/270<br />\
    <img src="styles/legend/Malha_CART_1_20.png" /> SPA 637/270<br />\
    <img src="styles/legend/Malha_CART_1_21.png" /> SPA 652/270<br />'
        });
var format_km_cart_LO_2 = new ol.format.GeoJSON();
var features_km_cart_LO_2 = format_km_cart_LO_2.readFeatures(json_km_cart_LO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_km_cart_LO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_km_cart_LO_2.addFeatures(features_km_cart_LO_2);
var lyr_km_cart_LO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_km_cart_LO_2, 
                style: style_km_cart_LO_2,
                popuplayertitle: 'km_cart_LO',
                interactive: true,
                title: '<img src="styles/legend/km_cart_LO_2.png" /> km_cart_LO'
            });
var group_Rudo = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Ruído'});
var group_AIAs = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'AIAs'});
var group_InfraestruturaCompartilhada = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Infraestrutura Compartilhada'});
var group_RecursosHdricos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Recursos Hídricos'});
var group_Verso2023 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Versão 2023'});
var group_InstalaesdeApoio = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Instalações de Apoio'});
var group_reasContaminadas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Áreas Contaminadas'});
var group_FDADAAIDeAII = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'FD (ADA), AID e AII'});
var group_DivisoentrePistas = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Divisão entre Pistas'});
var group_SuscetibilidadeAmbiental = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Suscetibilidade Ambiental'});
var group_Linha = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Linha'});
var group_Pontos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Pontos'});
var group_Geografia = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Geografia'});
var group_readeProteodeManancial = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Área de Proteção de Manancial'});
var group_UCs = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'UCs'});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'sub-group1'});
var group_UsodoSoloereaUrbanizada = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Uso do Solo e Área Urbanizada'});
var group_QuilombosNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Quilombos (N há)'});
var group_CavidadesNaturaisNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Cavidades Naturais (N há)'});
var group_TerraIndgenasNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Terra Indígenas (N há)'});
var group_UGRHI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'UGRHI'});
var group_Rodovia = new ol.layer.Group({
                                layers: [lyr_Malha_CART_1,lyr_km_cart_LO_2,],
                                fold: "open",
                                title: 'Rodovia'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'BaseMaps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Malha_CART_1.setVisible(true);lyr_km_cart_LO_2.setVisible(true);
var layersList = [group_BaseMaps,group_Rodovia];
lyr_Malha_CART_1.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_km_cart_LO_2.set('fieldAliases', {'Rodovia': 'Rodovia', 'km': 'km', });
lyr_Malha_CART_1.set('fieldImages', {'Rodovia': '', });
lyr_km_cart_LO_2.set('fieldImages', {'Rodovia': '', 'km': '', });
lyr_Malha_CART_1.set('fieldLabels', {'Rodovia': 'no label', });
lyr_km_cart_LO_2.set('fieldLabels', {'Rodovia': 'no label', 'km': 'no label', });
lyr_km_cart_LO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});