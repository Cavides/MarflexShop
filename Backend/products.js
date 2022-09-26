const products = [
    {
        id:1,
        title: "Sofa Da Vinci",
        type: "Sofa",
        category:"Salas",
        desc:"Sofa Cama da Vinci Gris 210cm",
        descripcion: "Tapizado: Tela Microfibra Petfriendly 100% Poliester Estructura: Madera Sajo 12% Humedad. Espuma: Espuma Alta Densidad 23 Rosada.",
        price: 996900,
        medidas:"Ancho: 210 cm Alto: 93 cm Profundo: 94 cm" ,
        material:"Tela",
        garantia: "12 Meses",
        armado:"No requiere armado",
        recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664072551/Muebles/Sofa-Cama-Fusion-Da-Vinci-Microfibra-Petfriendly-Gris_FCD2402-1_540x_c0y4pp.webp"
    },

    {
        id:2,
        title: "Sofa Brooke",
        type: "Sofa",
        category:"Salas",
        desc: "Sofa Cama Brooke Gris 180cm Tarima",
        descripcion:"Sofá cama con diseño funcional, ideal para optimizar tus espacios, tapizado en tela lino, espumas de alta densidad, incluye cama adicional.",
        price: 1592900,
        medidas:"Ancho: 180 cm Alto: 90 cm Profundo: 120 cm",
        material:"Tela",
        garantia:"1 año por defectos de fabrica y/o estructura",
        armado:"No requiere armado",
        recomendaciones:"No sentarse en los brazos, no usar productos quimicos ni abrasivos para limpiar, el sofacama no reemplaza un colchón.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664073438/Muebles/Sofa-Cama-Tarima-Brooke-Tela-Gris_SC10161-1_540x_rrriqy.webp"
    },

    {
        id:3,
        title: "Sofa Mirano",
        type: "Sofa",
        category:"Salas",
        desc: "Sofa Cama Mirano Gris 190 cm",
        descripcion:"Sofácama con diseño funcional,tapizado en tela lino de excelente durabilidad, brazos laterales reforzados para mayor estabilidad, espumas de alta densidad.",
        price: 1734900,
        medidas:"Ancho: 190 cm Alto: 95 cm Profundo: 90 cm",
        material:"Tela",
        garantia:"1 año por defectos de fabrica y/o estructura",
        armado:"No Requiere Armado",
        recomendaciones:"No sentarse en los brazos, no usar productos quimicos ni abrasivos para limpiar, el sofacama no reemplaza un colchón.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664074457/Muebles/Sofacama-Mirano-Multifuncional-con-Pillow-Gris_SC10131-2_540x_thljle.webp"
    },

    {
        id:4,
        title: "Sofa Paris",
        type: "Sofa",
        category:"Salas",
        desc: "Sofa Cama Paris Camel 67 cm con Baúl",
        descripcion:"Sofa Cama Baul, tapizada en tela aquafobiak , con patas en madera color natural. Con espacio de almacenaje, opcion de brazo a lado izquierdo o derecho, 3 posiciones de inlcinacion.",
        price: 1706900,
        medidas:"Ancho (cm): 64 Alto (cm): 164 Profundo (cm): 60",
        material:"Tela Aquafobiak",
        garantia:"90 dias",
        armado:"No requiere el armado",
        recomendaciones:"Limpiar el mueble con trapo seco con el fin de mantenerlo libre del mugre general, no usar detergentes o sustancias que puedan desgastar el color de la tela del mueble. Si el mueble tiene brazos o espaldar no se siente en ellos.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664074835/Muebles/Sofa-Cama-Baul-Paris-Camel_DKSOFACB0251-1_540x_om3njx.webp"
    },

    {
        id:5,
        title: "Sofa Sweet",
        type: "Sofa",
        category:"Salas",
        desc: "Sofa Sweet Palo de Rosa 140 cm",
        descripcion:"Sala moderna tapizada en tela aquafobiak. practico para cualquier espacio y decorativo. Da un toque de diseño y decoración a sus ambientes de hogar y oficina. Hecho en Colombia",
        price: 1645900,
        medidas:"Ancho: 140 cm Alto: 70 cm Profundo: 73 cm",
        material:"tapizado en tela aquafobiak amigable con las mascotas, estructura en madera natural, espuma de alta densidad, con patas en madera color natural.",
        garantia:"12 meses",
        armado:"No requiere",
        recomendaciones:"Limpiar el mueble con trapo seco con el fin de mantenerlo libre del mugre general, no usar detergentes o sustancias que puedan desgastar el color de la tela del mueble. Si el mueble tiene brazos o espaldar no se siente en ellos.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664075783/Muebles/Sofa-Palo-Rosa-Sweet_DKSOFNEU0302-1_540x_yvgl3d.webp"
    },

    {
        id:6,
        title: "Sofa Start",
        type: "Sofa",
        category:"Salas",
        desc: "Sofa Stars Gris 163 cm",
        descripcion:"Chaise Long, tapizada en tela aquafobiak , con patas en madera color natural. Da un toque de diseño y decoración a sus ambientes de hogar y oficina. Hecho en Colombia",
        price:1387900 ,
        medidas:"Ancho (cm): 65 Alto (cm): 164 Profundo (cm): 65",
	    material:"Estructura en madera, espuma de alta calidad y tapizado con tela antifluido.",
        garantia:"90 dias",
        armado:"No requiere el armado",
	    recomendaciones:"Limpiar el mueble con trapo seco con el fin de mantenerlo libre del mugre general, no usar detergentes o sustancias que puedan desgastar el color de la tela del mueble. Si el mueble tiene brazos o espaldar no se siente en ellos.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664075428/Muebles/Sofa-Chaise-Long-Gris_DKCHL0271-3_540x_gwwche.webp"
    },

    {
        id:7,
        title: "Banqueta Colors",
        type: "Sofa",
        category:"Salas",
        desc: "Banqueta Colors 105 cm",
        descripcion:"Banqueta madera , tapizada en tela colors rombos, con patas en madera color natural. Da un toque de diseño y decoración a sus ambientes de hogar y oficina. Hecho en Colombia.",
        price: 512900,
        medidas:"Ancho: 105cm Alto: 46cm Profundo: 42cm",
	    material:"Banqueta estructura en madera pino provenientes de bosques cultivados, tapizada en tela Gobelino, espuma Naranja, patas en madera",
        garantia:"90 dias",
        armado:"No requiere el armado",
	    recomendaciones:"Limpiar el mueble con trapo seco con el fin de mantenerlo libre del mugre general, no usar detergentes o sustancias que puedan desgastar el color de la tela del mueble. Si el mueble tiene brazos o espaldar no se siente en ellos.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664155011/Muebles/Banqueta-Colors_BANQ-0700-2_540x_etzr80.webp"
    },

    {
        id:8,
        title: "Sala Turquía",
	    type:"Sofa",
        category: "Salas",
        desc: "Sala Turquía Gris 190 cm",
        descripcion:"Tapizado: Tela Lona Texturizada 100% Poliéster. Estructura: Madera Sajo 12% Humedad Espuma: Espuma Alta Densidad 23 Rosada Dimensiones: (Ancho X Largo X Alto) Cm 190 X 150 X 85 Patas: Madera Pino Seco 10Cm De Altura Funciones: Ideal Para Espacios Reducidos, Espaldares En Algodón Siliconado",
        price: 1137900 ,
        medidas:"Ancho: 200 cm Alto: 85 cm Profundo: 155 cm",
	    material:"Tela Lona Texturizada",
        garantia:"12 Meses",
        armado:"No Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664155337/Muebles/Sala-Cama-Fusion-Premium-Lona-Gris_STP0102-1_540x_i07lhg.webp"
    },

    
    {
        id:9,
        title: "Sofa Mónaco",
	    type:"Sofa",
        category: "Salas",
        desc: "Sofa Mónaco Gris 220 cm",
        descripcion:"Tapizado: Tela Lona Texturizada 100% Poliester Estructura: Mader Sajo 12% Humedad Espuma: Espuma Alta Densidad 26 Penthalmohada. Dimensiones (Ancho X Largo X Alto)Cm: 220 X 220 X 70 Patas:Madera Flormorado 10Cm De Altura Funciones: Ideal Para Espacios De Reducidos Incluye: Sofa + 1 Puff",
        price: 2251900,
        medidas:"Ancho: 220 cm Alto: 70 cm Profundo: 220 cm",
	    material:"Tela Lona Texturizada",
        garantia:"12 Meses",
        armado:"No Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664155773/Muebles/Sala-Fusion-Monaco-Lona-Gris_SM2003-1_540x_uldguy.webp"
    },

    {
        id:10,
        title: "Sofa Fenix",
	    type:"Sofa",
        category: "Salas",
        desc: "Sofa Cama Fenix Plata 170 cm",
        descripcion:"Tapizado: Tela Microfibra 100% Poliester. Estructura: Madera Sajo 12% Humedad Espuma: Espuma Alta Densidad 23 Rosada Dimensiones: (Ancho X Largo X Alto) Cm 170 X 80 X 78 Patas: Metalicas De 5Cm De Altura Funciones: Ideal Para Espacios Reducidos, Cuenta Con 3 Posiciones Y Baul En El Sentadero. Los Brazos Son Removibles.",
        price: 1027500,
        medidas:"Ancho: 170 cm Alto: 98 cm Profundo: 90 cm",
	    material:"Tela Microfibra",
        garantia:"12 Meses",
        armado:"No Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664156216/Muebles/Sofa-Cama-Fusion-Fenix-Microfibra-Plata_SCFX2302-1_540x_ivmue8.webp"
    },

    {
        id:11,
        title: "Comedor Nórdico",
	    type:"Mesa",
        category: "Comedores",
        desc: "Comedor Nórdico Blanco 110 cm ",
        descripcion:"Estructura: Madera Flor Morado Seco, Tapa Mdf 12Cm Estructura: Silla Madera Flor Morado Pintura Y Color: Brillante Blanco Natural Bastidor: Espuma Alta Densidad 23 Rosada, Calibre 4Cm, Tela Lona 100% Poliester Dimensiones: (Ancho X Largo X Alto) Cm Mesa: 110 X 78 X 75 Silla: 50 X 50 X 80 Butaca: 50 X 50 X 80 Puestos: 5",
        price: 1137900,
        medidas:"Ancho: 140 cm Alto: 79 cm Profundo: 110 cm",
	    material:"Madera Flor Morado Seco",
        garantia:"12 Meses",
        armado:"Sí Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664156428/Muebles/Comedor-Fusion-Nordico-5-Puestos-Lona-Palo-De-Rosa-Decorativo_CNB12901-1_540x_q5nmfe.webp"
    },

    
    {
        id:12,
        title: "Comedor Bikini",
	    type:"Mesa",
        category: "Comedores",
        desc: "Comedor Bikini Cafe 120 cm de Cuatro Puestos",
        descripcion:"El comedor Bikini cuatro puestos te brinda la posibilidad de compartir las comidas con las personas que más aprecias. Su mesa tiene una superficie plana y rectangular que facilita la interacción entre los comensales",
        price: 1267900,
        medidas:"Ancho: 120 cm Alto: 73 cm Profundo: 75 cm",
	    material:"Madera aglomerada 15 mm",
        garantia:"1 año en estructura y 1 año en mandera",
        armado:"Sí Require Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664156885/Muebles/Comedor-Bikini-Mesa-Merlyn_HO101-1_540x_mijwwi.webp"
    },

    {
        id:13,
        title: "Comedor Brooklyn",
	    type:"Mesa",
        category: "Comedor",
        desc: "Comedor Tierra Brooklyn Oak 120 cm",
        descripcion:"El comedor terra cuatro puestos es el mueble que le hace falta a tu hogar. Es un espacio ideal para compartir una cena, almuerzo o desayuno con tu familia o amigos. Su material es resistente a la intemperie y de excelente calidad. Lo puedes ubicar en interiores o exteriores.",
        price: 533900,
        medidas:"Ancho: 120 cm Alto: 75 cm Profundo: 75 cm",
	    material:"Madera aglomerada 15 mm",
        garantia:"1 año en estructura y 1 año en mandera",
        armado:"Sí Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664157054/Muebles/Mesa-Comedor-Terra-Desarmable-Blanco-BrooKlyn-Oak_HO093-1_540x_a9ic9t.webp"
    },

    
    {
        id:14,
        title: "Comedor Dalí",
	    type:"Mesa",
        category: "Comedores",
        desc: "Comedor Dalí Cafe y Blanco 120 cm",
        descripcion:"El comedor Dali resalta además de su comodidad, por su mesa Terra que cuenta con un diseño fenomenal para complementarlo. Este es de cuatro puestos para que puedas compartir las tres comidas con tus amigos o familliares. Se puede ubicar en interiores o exteriores",
        price: 1425900,
        medidas:"Ancho: 120 cm Alto: 73 cm Profundo: 75 cm",
	    material:"Madera aglomerada 15 mm",
        garantia:"1 año en estructura y 1 año en mandera",
        armado:"Sí Requiere Armado",
	    recomendaciones:"La madera es suceptible a rallarse, en este caso, si es entregado los productos en perfectas condiciones, los rallones presentados posteriormente no contaran con el servicio de garantía. No es recomendable mojar la madera, puede presentar hongos y pudrimiento. Los vidrios se deben limpiar con materiales en algodón 100%, de lo contrario puede presentar rallones. Las telas no se deben exponer al sol. Las telas se deben limpiar con shampoo especial para sofás. No es recomendable sentarse en los brazos de las salas.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664157299/Muebles/Comedor-Dali-Mesa-Terra_HO105-1_540x_kglafw.webp"
    },

    {
        id:15,
        title: "Biblioteca Praga",
	    type:"Biblioteca",
        category: "Salas",
        desc: "Biblioteca Escalera Praga Rovere 162 cm",
        descripcion:"Biblioteca moderna con amplios espacios para ubicar objetos decorativos y darle vida a tus espacios.",
        price: 343900,
        medidas:"Ancho: 162 cm Alto: 167 cm Profundo: 30 cm",
	    material:"Tablero aglomerado de 15 mm",
        garantia:"5 años en la madera y de 1 año para los herrajes.",
        armado:"Sí Requiere Armado",
	    recomendaciones:"No poner el producto en contacto con el agua, para limpiarlo utiliza un trapo humedecido con agua. No utilices objetos afilados en las superficies del producto porque lo pueden rayar. No dejes caer o golpear el producto y no superes la carga especificada por el fabricante.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664157571/Muebles/BLR3750-1_540x_pqvqef.webp"
    },

    {
        id:16,
        title: "Biblioteca Eco",
	    type:"Biblioteca",
        category: "Salas",
        desc: "Biblioteca Eco 1.20 Wengue 62 cm",
        descripcion:"Esta práctica biblioteca es ideal para tu hogar gracias a su diseño moderno y multi funcional, sus amplios espacios son ideales para ubicar decoraciones, libros, revistas, es importante tener comodidad y orden en el hogar, esta biblioteca cumple con esas necesidades, y su color claro le da un toque innovador y llamativo a la habitación.",
        price: 155900 ,
        medidas:"Ancho: 62.9 cm Alto: 120 cm Profundo: 30 cm",
	    material:"Tablero aglomerado de 15 mm",
        garantia:"5 años en la madera y de 1 año para los herrajes.",
        armado:"S Requiere Armado",
	    recomendaciones:"No poner el producto en contacto con el agua, para limpiarlo utiliza un trapo humedecido con agua. No utilices objetos afilados en las superficies del producto porque lo pueden rayar. No dejes caer o golpear el producto y no superes la carga especificada por el fabricante.",
        image: "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1664157878/Muebles/BLW921-1_540x_ryu3w0.webp"
    },


];

module.exports = products;