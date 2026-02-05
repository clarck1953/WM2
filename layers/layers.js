ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:WGS84GEO").setExtent([38.107861, -26.528825, 54.664504, -11.789973]);
var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldStreetMap_1 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_NationalGeographic_2 = new ol.layer.Tile({
            'title': 'National Geographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldTopoMap_3 = new ol.layer.Tile({
            'title': 'World Topo Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_WorldTerrain_4 = new ol.layer.Tile({
            'title': 'World Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ChefLieuRegion_21_5 = new ol.format.GeoJSON();
var features_ChefLieuRegion_21_5 = format_ChefLieuRegion_21_5.readFeatures(json_ChefLieuRegion_21_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_ChefLieuRegion_21_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChefLieuRegion_21_5.addFeatures(features_ChefLieuRegion_21_5);
var lyr_ChefLieuRegion_21_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChefLieuRegion_21_5, 
                style: style_ChefLieuRegion_21_5,
                popuplayertitle: 'ChefLieuRegion_21',
                interactive: true,
                title: '<img src="styles/legend/ChefLieuRegion_21_5.png" /> ChefLieuRegion_21'
            });
var format_CapitalAntananarivo_6 = new ol.format.GeoJSON();
var features_CapitalAntananarivo_6 = format_CapitalAntananarivo_6.readFeatures(json_CapitalAntananarivo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_CapitalAntananarivo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalAntananarivo_6.addFeatures(features_CapitalAntananarivo_6);
var lyr_CapitalAntananarivo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalAntananarivo_6, 
                style: style_CapitalAntananarivo_6,
                popuplayertitle: 'Capital Antananarivo',
                interactive: true,
                title: '<img src="styles/legend/CapitalAntananarivo_6.png" /> Capital Antananarivo'
            });
var format_SynopticWeatherStation_2020_7 = new ol.format.GeoJSON();
var features_SynopticWeatherStation_2020_7 = format_SynopticWeatherStation_2020_7.readFeatures(json_SynopticWeatherStation_2020_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_SynopticWeatherStation_2020_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SynopticWeatherStation_2020_7.addFeatures(features_SynopticWeatherStation_2020_7);
var lyr_SynopticWeatherStation_2020_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SynopticWeatherStation_2020_7, 
                style: style_SynopticWeatherStation_2020_7,
                popuplayertitle: 'SynopticWeatherStation_2020',
                interactive: true,
                title: '<img src="styles/legend/SynopticWeatherStation_2020_7.png" /> SynopticWeatherStation_2020'
            });
var format_stations_list_CLIMAT_data_Madacopie_8 = new ol.format.GeoJSON();
var features_stations_list_CLIMAT_data_Madacopie_8 = format_stations_list_CLIMAT_data_Madacopie_8.readFeatures(json_stations_list_CLIMAT_data_Madacopie_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_stations_list_CLIMAT_data_Madacopie_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_list_CLIMAT_data_Madacopie_8.addFeatures(features_stations_list_CLIMAT_data_Madacopie_8);
var lyr_stations_list_CLIMAT_data_Madacopie_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stations_list_CLIMAT_data_Madacopie_8, 
                style: style_stations_list_CLIMAT_data_Madacopie_8,
                popuplayertitle: 'stations_list_CLIMAT_data_Mada copie',
                interactive: true,
    title: 'stations_list_CLIMAT_data_Mada copie<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_0.png" /> Existing synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_1.png" /> Existing UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_2.png" /> GBON Compliant-ASECNA<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_3.png" /> Planned Synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_4.png" /> Planned UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_5.png" /> Planned Regional Maintenance Center<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Madacopie_8_6.png" /> Headquarters Maintenance Center<br />' });
var format_stations_list_CLIMAT_data_Mada_9 = new ol.format.GeoJSON();
var features_stations_list_CLIMAT_data_Mada_9 = format_stations_list_CLIMAT_data_Mada_9.readFeatures(json_stations_list_CLIMAT_data_Mada_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_stations_list_CLIMAT_data_Mada_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_list_CLIMAT_data_Mada_9.addFeatures(features_stations_list_CLIMAT_data_Mada_9);
var lyr_stations_list_CLIMAT_data_Mada_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stations_list_CLIMAT_data_Mada_9, 
                style: style_stations_list_CLIMAT_data_Mada_9,
                popuplayertitle: 'stations_list_CLIMAT_data_Mada',
                interactive: true,
    title: 'stations_list_CLIMAT_data_Mada<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_0.png" /> Existing synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_1.png" /> Existing UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_2.png" /> GBON Compliant-ASECNA<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_3.png" /> Planned Synop station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_4.png" /> Planned UA station<br />\
    <img src="styles/legend/stations_list_CLIMAT_data_Mada_9_5.png" /> <br />' });
var format_StationPNUDSourceRapportcopie_10 = new ol.format.GeoJSON();
var features_StationPNUDSourceRapportcopie_10 = format_StationPNUDSourceRapportcopie_10.readFeatures(json_StationPNUDSourceRapportcopie_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_StationPNUDSourceRapportcopie_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationPNUDSourceRapportcopie_10.addFeatures(features_StationPNUDSourceRapportcopie_10);
var lyr_StationPNUDSourceRapportcopie_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationPNUDSourceRapportcopie_10, 
                style: style_StationPNUDSourceRapportcopie_10,
                popuplayertitle: 'Station-PNUD(SourceRapport) copie',
                interactive: true,
                title: '<img src="styles/legend/StationPNUDSourceRapportcopie_10.png" /> Station-PNUD(SourceRapport) copie'
            });
var format_StationPNUDSourceRapport_11 = new ol.format.GeoJSON();
var features_StationPNUDSourceRapport_11 = format_StationPNUDSourceRapport_11.readFeatures(json_StationPNUDSourceRapport_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:WGS84GEO'});
var jsonSource_StationPNUDSourceRapport_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationPNUDSourceRapport_11.addFeatures(features_StationPNUDSourceRapport_11);
var lyr_StationPNUDSourceRapport_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationPNUDSourceRapport_11, 
                style: style_StationPNUDSourceRapport_11,
                popuplayertitle: 'Station-PNUD(SourceRapport)',
                interactive: true,
                title: '<img src="styles/legend/StationPNUDSourceRapport_11.png" /> Station-PNUD(SourceRapport)'
            });

lyr_WorldImagery_0.setVisible(true);lyr_WorldStreetMap_1.setVisible(true);lyr_NationalGeographic_2.setVisible(true);lyr_WorldTopoMap_3.setVisible(true);lyr_WorldTerrain_4.setVisible(true);lyr_ChefLieuRegion_21_5.setVisible(true);lyr_CapitalAntananarivo_6.setVisible(true);lyr_SynopticWeatherStation_2020_7.setVisible(true);lyr_stations_list_CLIMAT_data_Madacopie_8.setVisible(true);lyr_stations_list_CLIMAT_data_Mada_9.setVisible(true);lyr_StationPNUDSourceRapportcopie_10.setVisible(true);lyr_StationPNUDSourceRapport_11.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_WorldStreetMap_1,lyr_NationalGeographic_2,lyr_WorldTopoMap_3,lyr_WorldTerrain_4,lyr_ChefLieuRegion_21_5,lyr_CapitalAntananarivo_6,lyr_SynopticWeatherStation_2020_7,lyr_stations_list_CLIMAT_data_Madacopie_8,lyr_stations_list_CLIMAT_data_Mada_9,lyr_StationPNUDSourceRapportcopie_10,lyr_StationPNUDSourceRapport_11];
lyr_ChefLieuRegion_21_5.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'CLA_ADM_AN': 'CLA_ADM_AN', 'CLA_ADM_NO': 'CLA_ADM_NO', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', });
lyr_CapitalAntananarivo_6.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'CLA_ADM_AN': 'CLA_ADM_AN', 'CLA_ADM_NO': 'CLA_ADM_NO', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', });
lyr_SynopticWeatherStation_2020_7.set('fieldAliases', {'Stations-': 'Stations-', 'Stations--': 'Stations--', 'Long': 'Long', 'Lat': 'Lat', 'Elevation': 'Elevation', 'WMO number': 'WMO number', 'Start': 'Start', 'End': 'End', 'Percentage': 'Percentage', 'Percenta_1': 'Percenta_1', 'Percenta_2': 'Percenta_2', });
lyr_stations_list_CLIMAT_data_Madacopie_8.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', });
lyr_stations_list_CLIMAT_data_Mada_9.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', });
lyr_StationPNUDSourceRapportcopie_10.set('fieldAliases', {'Stations-': 'Stations-', 'Stations--': 'Stations--', 'Long': 'Long', 'Lat': 'Lat', 'Elevation': 'Elevation', 'WMO number': 'WMO number', 'Start': 'Start', 'End': 'End', 'Percentage': 'Percentage', 'Percenta_1': 'Percenta_1', 'Percenta_2': 'Percenta_2', 'Obs': 'Obs', 'AlimBatt': 'AlimBatt', 'AlimRegul': 'AlimRegul', 'AlimPanSol': 'AlimPanSol', 'Capteur': 'Capteur', 'Datalogger': 'Datalogger', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_StationPNUDSourceRapport_11.set('fieldAliases', {'Stations-': 'Stations-', 'Stations--': 'Stations--', 'Long': 'Long', 'Lat': 'Lat', 'Elevation': 'Elevation', 'WMO number': 'WMO number', 'Start': 'Start', 'End': 'End', 'Percentage': 'Percentage', 'Percenta_1': 'Percenta_1', 'Percenta_2': 'Percenta_2', 'Obs': 'Obs', 'AlimBatt': 'AlimBatt', 'AlimRegul': 'AlimRegul', 'AlimPanSol': 'AlimPanSol', 'Capteur': 'Capteur', 'Datalogger': 'Datalogger', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_ChefLieuRegion_21_5.set('fieldImages', {'ID': 'Range', 'TOPONYME': 'TextEdit', 'CLA_ADM_AN': 'TextEdit', 'CLA_ADM_NO': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', });
lyr_CapitalAntananarivo_6.set('fieldImages', {'ID': '', 'TOPONYME': '', 'CLA_ADM_AN': '', 'CLA_ADM_NO': '', 'REGION': '', 'DEPARTEMEN': '', 'COMMUNE': '', 'X_COORD': '', 'Y_COORD': '', });
lyr_SynopticWeatherStation_2020_7.set('fieldImages', {'Stations-': '', 'Stations--': '', 'Long': '', 'Lat': '', 'Elevation': '', 'WMO number': '', 'Start': '', 'End': '', 'Percentage': '', 'Percenta_1': '', 'Percenta_2': '', });
lyr_stations_list_CLIMAT_data_Madacopie_8.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', });
lyr_stations_list_CLIMAT_data_Mada_9.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', });
lyr_StationPNUDSourceRapportcopie_10.set('fieldImages', {'Stations-': 'TextEdit', 'Stations--': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Elevation': 'TextEdit', 'WMO number': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Percentage': 'TextEdit', 'Percenta_1': 'TextEdit', 'Percenta_2': 'TextEdit', 'Obs': 'TextEdit', 'AlimBatt': 'TextEdit', 'AlimRegul': 'TextEdit', 'AlimPanSol': 'TextEdit', 'Capteur': 'TextEdit', 'Datalogger': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_StationPNUDSourceRapport_11.set('fieldImages', {'Stations-': 'TextEdit', 'Stations--': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'Elevation': 'TextEdit', 'WMO number': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Percentage': 'TextEdit', 'Percenta_1': 'TextEdit', 'Percenta_2': 'TextEdit', 'Obs': 'TextEdit', 'AlimBatt': 'TextEdit', 'AlimRegul': 'TextEdit', 'AlimPanSol': 'TextEdit', 'Capteur': 'TextEdit', 'Datalogger': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_ChefLieuRegion_21_5.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'CLA_ADM_AN': 'no label', 'CLA_ADM_NO': 'no label', 'REGION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', });
lyr_CapitalAntananarivo_6.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'CLA_ADM_AN': 'no label', 'CLA_ADM_NO': 'no label', 'REGION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', });
lyr_SynopticWeatherStation_2020_7.set('fieldLabels', {'Stations-': 'no label', 'Stations--': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Elevation': 'no label', 'WMO number': 'no label', 'Start': 'no label', 'End': 'no label', 'Percentage': 'no label', 'Percenta_1': 'no label', 'Percenta_2': 'no label', });
lyr_stations_list_CLIMAT_data_Madacopie_8.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', });
lyr_stations_list_CLIMAT_data_Mada_9.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', });
lyr_StationPNUDSourceRapportcopie_10.set('fieldLabels', {'Stations-': 'no label', 'Stations--': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Elevation': 'no label', 'WMO number': 'no label', 'Start': 'no label', 'End': 'no label', 'Percentage': 'no label', 'Percenta_1': 'no label', 'Percenta_2': 'no label', 'Obs': 'no label', 'AlimBatt': 'no label', 'AlimRegul': 'no label', 'AlimPanSol': 'no label', 'Capteur': 'no label', 'Datalogger': 'no label', });
lyr_StationPNUDSourceRapport_11.set('fieldLabels', {'Stations-': 'no label', 'Stations--': 'no label', 'Long': 'no label', 'Lat': 'no label', 'Elevation': 'no label', 'WMO number': 'no label', 'Start': 'no label', 'End': 'no label', 'Percentage': 'no label', 'Percenta_1': 'no label', 'Percenta_2': 'no label', 'Obs': 'no label', 'AlimBatt': 'no label', 'AlimRegul': 'no label', 'AlimPanSol': 'no label', 'Capteur': 'no label', 'Datalogger': 'no label', });
lyr_StationPNUDSourceRapport_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});