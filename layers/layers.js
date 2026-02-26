ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32640").setExtent([428404.102350, 6423099.402945, 448353.950588, 6433792.943541]);
var wms_layers = [];


        var lyr_KapOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Kapта OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_KapESRIGraylight_1 = new ol.layer.Tile({
            'title': 'Kapта ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Pb_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pb, кратность ПДК<br />\
    <img src="styles/legend/Pb_2_0.png" /> 0-0,5 ПДК<br />\
    <img src="styles/legend/Pb_2_1.png" /> 0,5-1 ПДК<br />\
    <img src="styles/legend/Pb_2_2.png" /> > 1 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pb_2.png",
            attributions: ' ',
            projection: 'EPSG:32640',
            alwaysInRange: true,
            imageExtent: [433505.835900, 6423355.835400, 443250.835900, 6433535.835400]
        })
    });
var lyr_Zn_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Zn, кратность ПДК<br />\
    <img src="styles/legend/Zn_3_0.png" /> 0-0,5 ПДК<br />\
    <img src="styles/legend/Zn_3_1.png" /> 0,5-1 ПДК<br />\
    <img src="styles/legend/Zn_3_2.png" /> > 1 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Zn_3.png",
            attributions: ' ',
            projection: 'EPSG:32640',
            alwaysInRange: true,
            imageExtent: [433505.835900, 6423355.835400, 443250.835900, 6433535.835400]
        })
    });
var lyr_Cu_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cu, кратность ПДК<br />\
    <img src="styles/legend/Cu_4_0.png" /> 0-0,5 ПДК<br />\
    <img src="styles/legend/Cu_4_1.png" /> 0,5-1 ПДК<br />\
    <img src="styles/legend/Cu_4_2.png" /> > 1 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cu_4.png",
            attributions: ' ',
            projection: 'EPSG:32640',
            alwaysInRange: true,
            imageExtent: [433505.835900, 6423355.835400, 443250.835900, 6433535.835400]
        })
    });
var lyr_Ni_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ni, кратность ПДК<br />\
    <img src="styles/legend/Ni_5_0.png" /> 0-1 ПДК<br />\
    <img src="styles/legend/Ni_5_1.png" /> 1-2 ПДК<br />\
    <img src="styles/legend/Ni_5_2.png" /> > 2 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ni_5.png",
            attributions: ' ',
            projection: 'EPSG:32640',
            alwaysInRange: true,
            imageExtent: [433505.835900, 6423355.835400, 443250.835900, 6433535.835400]
        })
    });
var lyr_OMB_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OMB<br />\
    <img src="styles/legend/OMB_6_0.png" /> Низкая<br />\
    <img src="styles/legend/OMB_6_1.png" /> Средняя<br />\
    <img src="styles/legend/OMB_6_2.png" /> Повышенная<br />\
    <img src="styles/legend/OMB_6_3.png" /> Высокая<br />\
    <img src="styles/legend/OMB_6_4.png" /> Очень высокая<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OMB_6.png",
            attributions: ' ',
            projection: 'EPSG:32640',
            alwaysInRange: true,
            imageExtent: [433505.835900, 6423355.835400, 443250.835900, 6433535.835400]
        })
    });
var format_TM_7 = new ol.format.GeoJSON();
var features_TM_7 = format_TM_7.readFeatures(json_TM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_TM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_7.addFeatures(features_TM_7);
var lyr_TM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TM_7, 
                style: style_TM_7,
                popuplayertitle: 'TM, точки',
                interactive: true,
                title: '<img src="styles/legend/TM_7.png" /> TM, точки'
            });
var format_OMB_8 = new ol.format.GeoJSON();
var features_OMB_8 = format_OMB_8.readFeatures(json_OMB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_OMB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OMB_8.addFeatures(features_OMB_8);
var lyr_OMB_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OMB_8, 
                style: style_OMB_8,
                popuplayertitle: 'OMB, точки',
                interactive: true,
                title: '<img src="styles/legend/OMB_8.png" /> OMB, точки'
            });
var format_M_9 = new ol.format.GeoJSON();
var features_M_9 = format_M_9.readFeatures(json_M_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_M_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_9.addFeatures(features_M_9);
var lyr_M_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M_9, 
                style: style_M_9,
                popuplayertitle: 'Mногоэтажная застройка',
                interactive: false,
                title: '<img src="styles/legend/M_9.png" /> Mногоэтажная застройка'
            });
var format_K_10 = new ol.format.GeoJSON();
var features_K_10 = format_K_10.readFeatures(json_K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_10.addFeatures(features_K_10);
var lyr_K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_10, 
                style: style_K_10,
                popuplayertitle: 'Kировский район Перми',
                interactive: false,
                title: '<img src="styles/legend/K_10.png" /> Kировский район Перми'
            });

lyr_KapOpenStreetMap_0.setVisible(true);lyr_KapESRIGraylight_1.setVisible(true);lyr_Pb_2.setVisible(false);lyr_Zn_3.setVisible(false);lyr_Cu_4.setVisible(false);lyr_Ni_5.setVisible(false);lyr_OMB_6.setVisible(true);lyr_TM_7.setVisible(true);lyr_OMB_8.setVisible(false);lyr_M_9.setVisible(true);lyr_K_10.setVisible(true);
var layersList = [lyr_KapOpenStreetMap_0,lyr_KapESRIGraylight_1,lyr_Pb_2,lyr_Zn_3,lyr_Cu_4,lyr_Ni_5,lyr_OMB_6,lyr_TM_7,lyr_OMB_8,lyr_M_9,lyr_K_10];
lyr_TM_7.set('fieldAliases', {'id': 'номер пробы', 'ms': 'ОМВ, &aelig;&times;10<sup>-3</sup>СИ', 'Ni': 'Ni, мг/кг', 'Cu': 'Cu, мг/кг', 'Zn': 'Zn, мг/кг', 'Pb': 'Pb, мг/кг', 'Sr': 'Sr, мг/кг', 'As': 'As, мг/кг', 'Co': 'Co, мг/кг', });
lyr_OMB_8.set('fieldAliases', {'id': 'номер пробы', 'ms': 'ОМВ, &aelig;&times;10<sup>-3</sup>СИ', });
lyr_M_9.set('fieldAliases', {'id': 'id', });
lyr_K_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'osm_versio': 'osm_versio', 'osm_timest': 'osm_timest', 'osm_uid': 'osm_uid', 'osm_user': 'osm_user', 'osm_change': 'osm_change', 'boundary': 'boundary', 'name_right': 'name_right', 'name_left': 'name_left', 'descriptio': 'descriptio', 'name_war': 'name_war', 'name_vi': 'name_vi', 'name_sco': 'name_sco', 'name_sah': 'name_sah', 'name_no': 'name_no', 'name_mdf': 'name_mdf', 'name_ky': 'name_ky', 'name_hsb': 'name_hsb', 'name_cv': 'name_cv', 'name_ceb': 'name_ceb', 'name_xal': 'name_xal', 'name_vep': 'name_vep', 'name_uz': 'name_uz', 'name_udm': 'name_udm', 'name_tr': 'name_tr', 'name_tg': 'name_tg', 'name_pt': 'name_pt', 'name_pnb': 'name_pnb', 'name_os': 'name_os', 'name_nl': 'name_nl', 'name_mhr': 'name_mhr', 'name_ka': 'name_ka', 'name_da': 'name_da', 'name_crh': 'name_crh', 'name_bg': 'name_bg', 'name_azb': 'name_azb', 'gns_ufi': 'gns_ufi', 'addr_city': 'addr_city', 'old_name_r': 'old_name_r', 'old_name_e': 'old_name_e', 'loc_name': 'loc_name', 'full_name': 'full_name', 'name_hy': 'name_hy', 'name_ce': 'name_ce', 'is_in_subd': 'is_in_subd', 'is_in_regi': 'is_in_regi', 'is_in_dist': 'is_in_dist', 'is_in_coun': 'is_in_coun', 'website': 'website', 'name_tl': 'name_tl', 'name_nn': 'name_nn', 'name_fi': 'name_fi', 'name_fa': 'name_fa', 'name_eo': 'name_eo', 'fias_code': 'fias_code', 'alt_name_e': 'alt_name_e', 'name_uk': 'name_uk', 'name_sr': 'name_sr', 'name_ko': 'name_ko', 'name_kk': 'name_kk', 'name_it': 'name_it', 'name_et': 'name_et', 'name_be': 'name_be', 'name_ba': 'name_ba', 'name_az': 'name_az', 'border_typ': 'border_typ', 'postal_cod': 'postal_cod', 'int_name': 'int_name', 'old_oktmo_': 'old_oktmo_', 'abandoned_': 'abandoned_', 'contact_we': 'contact_we', 'okato_user': 'okato_user', 'landuse': 'landuse', 'place': 'place', 'addr_postc': 'addr_postc', 'official_n': 'official_n', 'addr_distr': 'addr_distr', 'start_date': 'start_date', 'alt_name': 'alt_name', 'old_name': 'old_name', 'official_s': 'official_s', 'addr_regio': 'addr_regio', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'timezone': 'timezone', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'oktmo_user': 'oktmo_user', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_zh': 'name_zh', 'name_tt': 'name_tt', 'name_tk': 'name_tk', 'name_sv': 'name_sv', 'name_sk': 'name_sk', 'name_ru': 'name_ru', 'name_ro': 'name_ro', 'name_pl': 'name_pl', 'name_lt': 'name_lt', 'name_ja': 'name_ja', 'name_hu': 'name_hu', 'name_hr': 'name_hr', 'name_fr': 'name_fr', 'name_es': 'name_es', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name_ca': 'name_ca', 'name_ar': 'name_ar', 'name': 'name', 'int_ref': 'int_ref', 'gost_7.67-': 'gost_7.67-', 'admin_leve': 'admin_leve', 'addr_count': 'addr_count', 'ISO3166-2': 'ISO3166-2', });
lyr_TM_7.set('fieldImages', {'id': 'TextEdit', 'ms': '', 'Ni': 'TextEdit', 'Cu': 'TextEdit', 'Zn': '', 'Pb': 'TextEdit', 'Sr': '', 'As': '', 'Co': '', });
lyr_OMB_8.set('fieldImages', {'id': '', 'ms': 'TextEdit', });
lyr_M_9.set('fieldImages', {'id': 'TextEdit', });
lyr_K_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'osm_versio': 'TextEdit', 'osm_timest': 'TextEdit', 'osm_uid': 'TextEdit', 'osm_user': 'TextEdit', 'osm_change': 'TextEdit', 'boundary': 'TextEdit', 'name_right': 'TextEdit', 'name_left': 'TextEdit', 'descriptio': 'TextEdit', 'name_war': 'TextEdit', 'name_vi': 'TextEdit', 'name_sco': 'TextEdit', 'name_sah': 'TextEdit', 'name_no': 'TextEdit', 'name_mdf': 'TextEdit', 'name_ky': 'TextEdit', 'name_hsb': 'TextEdit', 'name_cv': 'TextEdit', 'name_ceb': 'TextEdit', 'name_xal': 'TextEdit', 'name_vep': 'TextEdit', 'name_uz': 'TextEdit', 'name_udm': 'TextEdit', 'name_tr': 'TextEdit', 'name_tg': 'TextEdit', 'name_pt': 'TextEdit', 'name_pnb': 'TextEdit', 'name_os': 'TextEdit', 'name_nl': 'TextEdit', 'name_mhr': 'TextEdit', 'name_ka': 'TextEdit', 'name_da': 'TextEdit', 'name_crh': 'TextEdit', 'name_bg': 'TextEdit', 'name_azb': 'TextEdit', 'gns_ufi': 'TextEdit', 'addr_city': 'TextEdit', 'old_name_r': 'TextEdit', 'old_name_e': 'TextEdit', 'loc_name': 'TextEdit', 'full_name': 'TextEdit', 'name_hy': 'TextEdit', 'name_ce': 'TextEdit', 'is_in_subd': 'TextEdit', 'is_in_regi': 'TextEdit', 'is_in_dist': 'TextEdit', 'is_in_coun': 'TextEdit', 'website': 'TextEdit', 'name_tl': 'TextEdit', 'name_nn': 'TextEdit', 'name_fi': 'TextEdit', 'name_fa': 'TextEdit', 'name_eo': 'TextEdit', 'fias_code': 'TextEdit', 'alt_name_e': 'TextEdit', 'name_uk': 'TextEdit', 'name_sr': 'TextEdit', 'name_ko': 'TextEdit', 'name_kk': 'TextEdit', 'name_it': 'TextEdit', 'name_et': 'TextEdit', 'name_be': 'TextEdit', 'name_ba': 'TextEdit', 'name_az': 'TextEdit', 'border_typ': 'TextEdit', 'postal_cod': 'TextEdit', 'int_name': 'TextEdit', 'old_oktmo_': 'TextEdit', 'abandoned_': 'TextEdit', 'contact_we': 'TextEdit', 'okato_user': 'TextEdit', 'landuse': 'TextEdit', 'place': 'TextEdit', 'addr_postc': 'TextEdit', 'official_n': 'TextEdit', 'addr_distr': 'TextEdit', 'start_date': 'TextEdit', 'alt_name': 'TextEdit', 'old_name': 'TextEdit', 'official_s': 'TextEdit', 'addr_regio': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'timezone': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'oktmo_user': 'TextEdit', 'name_zh-Ha': 'TextEdit', 'name_zh-_1': 'TextEdit', 'name_zh': 'TextEdit', 'name_tt': 'TextEdit', 'name_tk': 'TextEdit', 'name_sv': 'TextEdit', 'name_sk': 'TextEdit', 'name_ru': 'TextEdit', 'name_ro': 'TextEdit', 'name_pl': 'TextEdit', 'name_lt': 'TextEdit', 'name_ja': 'TextEdit', 'name_hu': 'TextEdit', 'name_hr': 'TextEdit', 'name_fr': 'TextEdit', 'name_es': 'TextEdit', 'name_en': 'TextEdit', 'name_de': 'TextEdit', 'name_cs': 'TextEdit', 'name_ca': 'TextEdit', 'name_ar': 'TextEdit', 'name': 'TextEdit', 'int_ref': 'TextEdit', 'gost_7.67-': 'TextEdit', 'admin_leve': 'TextEdit', 'addr_count': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_TM_7.set('fieldLabels', {'id': 'inline label - always visible', 'ms': 'inline label - always visible', 'Ni': 'inline label - always visible', 'Cu': 'inline label - always visible', 'Zn': 'inline label - always visible', 'Pb': 'inline label - always visible', 'Sr': 'inline label - always visible', 'As': 'inline label - always visible', 'Co': 'inline label - always visible', });
lyr_OMB_8.set('fieldLabels', {'id': 'inline label - always visible', 'ms': 'inline label - always visible', });
lyr_M_9.set('fieldLabels', {'id': 'no label', });
lyr_K_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'osm_versio': 'no label', 'osm_timest': 'no label', 'osm_uid': 'no label', 'osm_user': 'no label', 'osm_change': 'no label', 'boundary': 'no label', 'name_right': 'no label', 'name_left': 'no label', 'descriptio': 'no label', 'name_war': 'no label', 'name_vi': 'no label', 'name_sco': 'no label', 'name_sah': 'no label', 'name_no': 'no label', 'name_mdf': 'no label', 'name_ky': 'no label', 'name_hsb': 'no label', 'name_cv': 'no label', 'name_ceb': 'no label', 'name_xal': 'no label', 'name_vep': 'no label', 'name_uz': 'no label', 'name_udm': 'no label', 'name_tr': 'no label', 'name_tg': 'no label', 'name_pt': 'no label', 'name_pnb': 'no label', 'name_os': 'no label', 'name_nl': 'no label', 'name_mhr': 'no label', 'name_ka': 'no label', 'name_da': 'no label', 'name_crh': 'no label', 'name_bg': 'no label', 'name_azb': 'no label', 'gns_ufi': 'no label', 'addr_city': 'no label', 'old_name_r': 'no label', 'old_name_e': 'no label', 'loc_name': 'no label', 'full_name': 'no label', 'name_hy': 'no label', 'name_ce': 'no label', 'is_in_subd': 'no label', 'is_in_regi': 'no label', 'is_in_dist': 'no label', 'is_in_coun': 'no label', 'website': 'no label', 'name_tl': 'no label', 'name_nn': 'no label', 'name_fi': 'no label', 'name_fa': 'no label', 'name_eo': 'no label', 'fias_code': 'no label', 'alt_name_e': 'no label', 'name_uk': 'no label', 'name_sr': 'no label', 'name_ko': 'no label', 'name_kk': 'no label', 'name_it': 'no label', 'name_et': 'no label', 'name_be': 'no label', 'name_ba': 'no label', 'name_az': 'no label', 'border_typ': 'no label', 'postal_cod': 'no label', 'int_name': 'no label', 'old_oktmo_': 'no label', 'abandoned_': 'no label', 'contact_we': 'no label', 'okato_user': 'no label', 'landuse': 'no label', 'place': 'no label', 'addr_postc': 'no label', 'official_n': 'no label', 'addr_distr': 'no label', 'start_date': 'no label', 'alt_name': 'no label', 'old_name': 'no label', 'official_s': 'no label', 'addr_regio': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'timezone': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'oktmo_user': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_zh': 'no label', 'name_tt': 'no label', 'name_tk': 'no label', 'name_sv': 'no label', 'name_sk': 'no label', 'name_ru': 'no label', 'name_ro': 'no label', 'name_pl': 'no label', 'name_lt': 'no label', 'name_ja': 'no label', 'name_hu': 'no label', 'name_hr': 'no label', 'name_fr': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name_ca': 'no label', 'name_ar': 'no label', 'name': 'no label', 'int_ref': 'no label', 'gost_7.67-': 'no label', 'admin_leve': 'no label', 'addr_count': 'no label', 'ISO3166-2': 'no label', });
lyr_K_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});