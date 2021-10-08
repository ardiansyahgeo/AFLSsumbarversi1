var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KOTA_PADANG_2 = new ol.format.GeoJSON();
var features_KOTA_PADANG_2 = format_KOTA_PADANG_2.readFeatures(json_KOTA_PADANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTA_PADANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTA_PADANG_2.addFeatures(features_KOTA_PADANG_2);
var lyr_KOTA_PADANG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KOTA_PADANG_2, 
                style: style_KOTA_PADANG_2,
                interactive: true,
    title: 'KOTA_PADANG<br />\
    <img src="styles/legend/KOTA_PADANG_2_0.png" /> Kr/Ks-Nr/Ns<br />\
    <img src="styles/legend/KOTA_PADANG_2_1.png" /> Kr/Ks-Nt<br />\
    <img src="styles/legend/KOTA_PADANG_2_2.png" /> Kt-Nr/Ns<br />\
    <img src="styles/legend/KOTA_PADANG_2_3.png" /> Kt-Nt<br />'
        });
var format_BATAS_ADMIN_KABUPATEN_3 = new ol.format.GeoJSON();
var features_BATAS_ADMIN_KABUPATEN_3 = format_BATAS_ADMIN_KABUPATEN_3.readFeatures(json_BATAS_ADMIN_KABUPATEN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMIN_KABUPATEN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMIN_KABUPATEN_3.addFeatures(features_BATAS_ADMIN_KABUPATEN_3);
var lyr_BATAS_ADMIN_KABUPATEN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_ADMIN_KABUPATEN_3, 
                style: style_BATAS_ADMIN_KABUPATEN_3,
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMIN_KABUPATEN_3.png" /> BATAS_ADMIN_KABUPATEN'
            });
var format_BATAS_ADMIN_KECAMATAN_4 = new ol.format.GeoJSON();
var features_BATAS_ADMIN_KECAMATAN_4 = format_BATAS_ADMIN_KECAMATAN_4.readFeatures(json_BATAS_ADMIN_KECAMATAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMIN_KECAMATAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMIN_KECAMATAN_4.addFeatures(features_BATAS_ADMIN_KECAMATAN_4);
var lyr_BATAS_ADMIN_KECAMATAN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_ADMIN_KECAMATAN_4, 
                style: style_BATAS_ADMIN_KECAMATAN_4,
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMIN_KECAMATAN_4.png" /> BATAS_ADMIN_KECAMATAN'
            });

lyr_google_0.setVisible(true);lyr_google_1.setVisible(true);lyr_KOTA_PADANG_2.setVisible(true);lyr_BATAS_ADMIN_KABUPATEN_3.setVisible(true);lyr_BATAS_ADMIN_KECAMATAN_4.setVisible(true);
var layersList = [lyr_google_0,lyr_google_1,lyr_KOTA_PADANG_2,lyr_BATAS_ADMIN_KABUPATEN_3,lyr_BATAS_ADMIN_KECAMATAN_4];
lyr_KOTA_PADANG_2.set('fieldAliases', {'LSD': 'LSD', 'provinsi': 'provinsi', 'kabkot': 'kabkot', 'kecamatan': 'kecamatan', 'desa': 'desa', 'kode_sawah': 'kode_sawah', 'Persen_LT': 'Persen_LT', 'Alihfungsi': 'Alihfungsi', 'D_IRIGASI': 'D_IRIGASI', 'PRODUKTVS': 'PRODUKTVS', 'RTR_SESUAI': 'RTR_SESUAI', 'Irigasi_09': 'Irigasi_09', 'TIPOL_INT': 'TIPOL_INT', 'Prsn_pmuki': 'Prsn_pmuki', 'T_KETERANC': 'T_KETERANC', 'LERENG': 'LERENG', 'KESUBURAN': 'KESUBURAN', 'KET_CH': 'KET_CH', 'BANJIR': 'BANJIR', 'LONGSOR': 'LONGSOR', 'KEKERINGAN': 'KEKERINGAN', 'KLS_PROD': 'KLS_PROD', 'KLS_LERENG': 'KLS_LERENG', 'NT_FISIK': 'NT_FISIK', 'JML_BANTU': 'JML_BANTU', 'TK_TANI': 'TK_TANI', 'L_LSD_HA': 'L_LSD_HA', 'TANI_LSD': 'TANI_LSD', 'POKTAN': 'POKTAN', 'PENGHASILN': 'PENGHASILN', 'BANTUAN': 'BANTUAN', 'KLS_TANI': 'KLS_TANI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NT_SOSIAL': 'NT_SOSIAL', 'SKOR_NT': 'SKOR_NT', 'OUTPUT_NT': 'OUTPUT_NT', 'NOTASI_INS': 'NOTASI_INS', 'KESULITAN': 'KESULITAN', 'bth_pengen': 'bth_pengen', 'luas_ha': 'luas_ha', 'ANCAM_TOL': 'ANCAM_TOL', 'AUDIT_TR': 'AUDIT_TR', 'PNERTIBN': 'PNERTIBN', 'PK_RTR': 'PK_RTR', 'REV_RTR': 'REV_RTR', 'INFORMT': 'INFORMT', 'PERATUR_Z': 'PERATUR_Z', 'D_INSENTI': 'D_INSENTI', 'INSENTIF': 'INSENTIF', 'PURCHAS_L': 'PURCHAS_L', 'PURCHAS_D': 'PURCHAS_D', 'COOPERT': 'COOPERT', 'SUBSIDI': 'SUBSIDI', 'PT_INFRA': 'PT_INFRA', 'PL_FUNGSI': 'PL_FUNGSI', 'PT_SARPRAS': 'PT_SARPRAS', 'PT_KAPAST': 'PT_KAPAST', });
lyr_BATAS_ADMIN_KABUPATEN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATAS_ADMIN_KECAMATAN_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', });
lyr_KOTA_PADANG_2.set('fieldImages', {'LSD': 'TextEdit', 'provinsi': 'TextEdit', 'kabkot': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'kode_sawah': 'TextEdit', 'Persen_LT': 'TextEdit', 'Alihfungsi': 'TextEdit', 'D_IRIGASI': 'TextEdit', 'PRODUKTVS': 'TextEdit', 'RTR_SESUAI': 'TextEdit', 'Irigasi_09': 'TextEdit', 'TIPOL_INT': 'TextEdit', 'Prsn_pmuki': 'TextEdit', 'T_KETERANC': 'TextEdit', 'LERENG': 'TextEdit', 'KESUBURAN': 'TextEdit', 'KET_CH': 'TextEdit', 'BANJIR': 'TextEdit', 'LONGSOR': 'TextEdit', 'KEKERINGAN': 'TextEdit', 'KLS_PROD': 'TextEdit', 'KLS_LERENG': 'TextEdit', 'NT_FISIK': 'TextEdit', 'JML_BANTU': 'TextEdit', 'TK_TANI': 'TextEdit', 'L_LSD_HA': 'TextEdit', 'TANI_LSD': 'TextEdit', 'POKTAN': 'TextEdit', 'PENGHASILN': 'TextEdit', 'BANTUAN': 'TextEdit', 'KLS_TANI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NT_SOSIAL': 'TextEdit', 'SKOR_NT': 'TextEdit', 'OUTPUT_NT': 'TextEdit', 'NOTASI_INS': 'TextEdit', 'KESULITAN': 'TextEdit', 'bth_pengen': 'TextEdit', 'luas_ha': 'TextEdit', 'ANCAM_TOL': 'TextEdit', 'AUDIT_TR': 'TextEdit', 'PNERTIBN': 'TextEdit', 'PK_RTR': 'TextEdit', 'REV_RTR': 'TextEdit', 'INFORMT': 'TextEdit', 'PERATUR_Z': 'TextEdit', 'D_INSENTI': 'TextEdit', 'INSENTIF': 'TextEdit', 'PURCHAS_L': 'TextEdit', 'PURCHAS_D': 'TextEdit', 'COOPERT': 'TextEdit', 'SUBSIDI': 'TextEdit', 'PT_INFRA': 'TextEdit', 'PL_FUNGSI': 'TextEdit', 'PT_SARPRAS': 'TextEdit', 'PT_KAPAST': 'TextEdit', });
lyr_BATAS_ADMIN_KABUPATEN_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BATAS_ADMIN_KECAMATAN_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_KOTA_PADANG_2.set('fieldLabels', {'LSD': 'inline label', 'provinsi': 'inline label', 'kabkot': 'inline label', 'kecamatan': 'inline label', 'desa': 'inline label', 'kode_sawah': 'inline label', 'Persen_LT': 'inline label', 'Alihfungsi': 'inline label', 'D_IRIGASI': 'inline label', 'PRODUKTVS': 'inline label', 'RTR_SESUAI': 'inline label', 'Irigasi_09': 'inline label', 'TIPOL_INT': 'inline label', 'Prsn_pmuki': 'inline label', 'T_KETERANC': 'inline label', 'LERENG': 'inline label', 'KESUBURAN': 'inline label', 'KET_CH': 'inline label', 'BANJIR': 'inline label', 'LONGSOR': 'inline label', 'KEKERINGAN': 'inline label', 'KLS_PROD': 'inline label', 'KLS_LERENG': 'inline label', 'NT_FISIK': 'inline label', 'JML_BANTU': 'inline label', 'TK_TANI': 'inline label', 'L_LSD_HA': 'inline label', 'TANI_LSD': 'inline label', 'POKTAN': 'inline label', 'PENGHASILN': 'inline label', 'BANTUAN': 'inline label', 'KLS_TANI': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'NT_SOSIAL': 'inline label', 'SKOR_NT': 'inline label', 'OUTPUT_NT': 'inline label', 'NOTASI_INS': 'inline label', 'KESULITAN': 'inline label', 'bth_pengen': 'inline label', 'luas_ha': 'inline label', 'ANCAM_TOL': 'inline label', 'AUDIT_TR': 'inline label', 'PNERTIBN': 'inline label', 'PK_RTR': 'inline label', 'REV_RTR': 'inline label', 'INFORMT': 'inline label', 'PERATUR_Z': 'inline label', 'D_INSENTI': 'inline label', 'INSENTIF': 'inline label', 'PURCHAS_L': 'inline label', 'PURCHAS_D': 'inline label', 'COOPERT': 'inline label', 'SUBSIDI': 'inline label', 'PT_INFRA': 'inline label', 'PL_FUNGSI': 'inline label', 'PT_SARPRAS': 'inline label', 'PT_KAPAST': 'inline label', });
lyr_BATAS_ADMIN_KABUPATEN_3.set('fieldLabels', {'OBJECTID': 'inline label', 'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_BATAS_ADMIN_KECAMATAN_4.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKK': 'no label', });
lyr_BATAS_ADMIN_KECAMATAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});