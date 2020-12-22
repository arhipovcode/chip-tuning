let selectAutos = document.querySelectorAll('select[name="auto"]');
let selectModels = document.querySelectorAll('select[name="model"]');
let inputsFuel = document.querySelectorAll('select[name="fuel"]');

const avtoObj = {
  audi: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'TT'],
  bmw: ['1er', '2er', '4er', '5er', '6er', '7er', 'X1', 'X3', 'X5', 'X6', 'Z3', 'Z4'],
  cadillac: ['BLS', 'CTS', 'Escalade', 'SRX', 'STS'],
  chery: ['Amulet', 'Bonus', 'CrossEastar', 'IndiS', 'Kimo', 'M11', 'QQ', 'Tiggo', 'Very'],
  chevrolet: ['Avalanche', 'Aveo', 'Camaro', 'Captiva', 'Cobalt', 'Cruze', 'Epica', 'Equinox', 'Lacetti', 'Malibu', 'Niva', 'Orlando', 'Rezzo', 'Spark', 'Tahoe', 'Trail Blazer'],
  citroen: ['Berlingo', 'C2', 'C3', 'C3 Picasso', 'C4', 'C4 Aircross', 'C4 Picasso', 'C5', 'C-Crosser', 'C-Elysee', 'DS3', 'DS4', 'DS5', 'Space Tourer'],
  daewoo: ['Gentra', 'Matiz', 'Nexia', 'Winstorm', 'Ravon R4'],
  dodge: ['Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Durango', 'Journey', 'Nitro', 'RAM', 'Stratus'],
  fiat: ['500', 'Albea', 'Bravo', 'Doblo', 'Fullback', 'Linea', 'Punto'],
  ford: ['C-MAX', 'Eco Sport', 'Edge', 'Explorer', 'Fiesta', 'Focus', 'Galaxy', 'Kuga', 'Mondeo', 'Mustang', 'Ranger', 'S-MAX'],
  gelly: ['Atlas', 'CK Otaka', 'Emgrand EC7', 'Emgrand X7', 'GC6', 'MK', 'MK Cross'],
  greatewall: ['Hover H2', 'Hover H3', 'Hover H5', 'Hover H6', 'Hover M2', 'Hover M4', 'Safe', 'Sailor', 'Wingle'],
  honda: ['Accord', 'Civic', 'CR-V', 'Crosstour', 'Element', 'Fit', 'Freed', 'Insight', 'Jazz', 'Legend', 'Odyssey', 'Pilot', 'Ridgeline', 'Step WGN'],
  hyundai: ['Accent', 'Avante', 'Coupe (Tiburon)', 'Creta', 'Elantra', 'Equus', 'Genesis', 'Genesis Coupe', 'Getz', 'Grandeur', 'i20', 'i30', 'i40', 'ix35', 'ix55', 'Matrix', 'Santa Fe', 'Solaris', 'Sonata', 'Starex H-1', 'Trajet', 'Tucson', 'Veloster', 'Verna'],
  infinity: ['EX', 'FX', 'G', 'JX', 'M', 'Q50', 'Q70', 'QX50', 'QX56', 'QX60', 'QX70', 'QX80'],
  jaguar: ['F-Pace', 'S-Type', 'XE', 'XF', 'XJ', 'X-Type'],
  jeep: ['Cherokee', 'Commander', 'Compass', 'Grand Cherokee', 'Liberty (Patriot)', 'Wrangler'],
  kia: ['Carens', 'Carnival', 'Ceed', 'Cerato', 'Mangentis', 'Mohave', 'Opirus', 'Optima', 'Picanto', 'Quoris', 'Rio', 'Sorento', 'Soul', 'Spectra', 'Sportage', 'Venga'],
  landrover: ['Defender', 'Discovery', 'Discovery Sport', 'Freelander', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport'],
  lexus: ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'NX', 'RX'],
  lifan: ['Breez', 'Cebrium', 'Smily', 'Solano', 'X50', 'X60'],
  mazda: ['2', '3', '5', '6', 'BT-50', 'CX-5', 'CX-7', 'CX-9', 'Demio', 'MPV', 'MX-5', 'RX-8', 'Tribute'],
  mercedesbenz: ['A-Class', 'B-Class', 'C-Class', 'CL-Class', 'CLA-Class', 'CLC-Class', 'CLK-Class', 'CLS-Class', 'E-Class', 'G-Class', 'GL-Class', 'GLA-Class', 'GLC-Class', 'GLE-Class', 'GLK-Class', 'GLS-Class', 'M-Class', 'R-Class', 'S-Class', 'SL-Class', 'SLK-Class', 'Viano'],
  mini: ['Clubman', 'Counteryman', 'Coupe', 'Hatch'],
  mitsubishi: ['ASX', 'Carisma', 'Colt', 'Delica D:5', 'Eclips', 'Galant', 'Grandis', 'L200', 'Lancer', 'Outlander', 'Pajero', 'Pajero Pinin', 'Pajero Sport'],
  nissan: ['350Z', 'Almera', 'Cube', 'Elgrand', 'Juke', 'Maxima', 'Micra', 'Murano', 'Navara', 'Note', 'NP 300', 'Patrol', 'Primera', 'Qashqai', 'Quest', 'Sentra', 'Serena', 'Skyline', 'Teana', 'Terrano', 'Tiida', 'Titan', 'Wingroad', 'X-Trail'],
  opel: ['Antara', 'Astra', 'Corsa', 'Insignia', 'Meriva', 'Mokka', 'Vectra', 'Vivaro', 'Zafira'],
  peugeot: ['107', '206', '207', '208', '3008', '301', '307', '308', '4007', '407', '408', '5008', '508', '607', 'Partner', 'RCZ'],
  porshe: ['911', 'Boxter', 'Cayenne', 'Cayman', 'Macan', 'Panamera'],
  renault: ['Clio', 'Duster', 'Espace', 'Fluence', 'Kangoo', 'Kaptur', 'Koleos', 'Laguna', 'Latitude', 'Logan', 'Megane', 'Sandero', 'Scenic', 'Symbol', 'Vel Satis'],
  saab: ['9-3', '9-5'],
  seat: ['Altea', 'Ibiza', 'Leon', 'Toledo'],
  skoda: ['Fabia', 'Octavia', 'Rapid', 'Roomster', 'Superb', 'Yeti'],
  ssangyong: ['Actyon', 'Actyon Sports', 'Kyron', 'Rexton', 'Rodius', 'Stavic'],
  subaru: ['BRZ', 'Forester', 'Impreza', 'Legacy', 'Outback', 'Tribeca', 'XV'],
  suzuki: ['Grant Vitara', 'Jimmy', 'Kizashi', 'Liana', 'Splash', 'Swift', 'SX4'],
  toyota: ['4Runner', 'Auris', 'Alphard', 'Avalon', 'Avensis', 'Camry', 'Corolla', 'FJ Cruiser', 'Fortuner', 'HiAce', 'Highlander', 'Hilux', 'Land Cruiser 200', 'Land Cruiser Prado', 'Prius', 'Rav 4', 'Sequoia', 'Sienna', 'Tundra', 'Yaris'],
  volkswagen: ['Amarok', 'Beetle', 'Bora', 'Caddy', 'Golf', 'Jetta', 'Passat', 'Passat CC', 'Phaeton', 'Polo', 'Scirocco', 'Sharan', 'Tiguan', 'Touareg', 'Touran', 'T5', 'T6'],
  volvo: ['C30', 'S40', 'S60', 'S80', 'V40', 'V50', 'V60', 'V70', 'XC60', 'XC70', 'XC90'],
  other: [],
};

for(let i = 0; i < selectAutos.length; i++) {
  selectAutos[i].addEventListener('change', (e) => {
    let target = e.target;
    if(target === selectAutos[i]) {
      selectModels[i].removeAttribute("disabled");
      getModel(selectAutos[i].value.toLowerCase().replace(/\s+/g, ''), selectModels[i]);
    }
  });
}

function getModel(auto, blockModel) {

  if(blockModel.length > 1) {
    for(let i = 1; i < blockModel.length;) {
      blockModel[1].remove();
    }
  }
  for(let i = 0; i < avtoObj[auto].length; i++) {
    let option = document.createElement('option');
    option.value = avtoObj[auto][i];
    option.textContent = avtoObj[auto][i];
    blockModel.appendChild(option);
  }
}


// Маска для телефона
let inputsPhone = document.querySelectorAll('input[name="phone"]');
$(inputsPhone).mask("+7 (999) 99-99-999");

// Кнопка отправки формы
let btnsSubmit = document.querySelectorAll('.form-btn');
let forms = document.querySelectorAll('form');

for(let i = 0; i < btnsSubmit.length; i++) {
  btnsSubmit[i].addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if(target == btnsSubmit[i]) {
      let inputs = forms[i].querySelectorAll('.sel');
      let formInp = forms[i].querySelector('input[name="phone"]');
      let errorBlocks = forms[i].querySelectorAll('.error-block');

      if(formInp.value == '') {
        errorBlocks[3].classList.add('error-active');
        setTimeout(() => {
          errorBlocks[3].classList.remove('error-active');
          errorBlocks[3].classList.add('error-out');
        }, 1500);
        setTimeout(() => {
          errorBlocks[3].classList.remove('error-out');
        }, 2700);
      }

      for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == inputs[i][0].value) {
          errorBlocks[i].classList.add('error-active');
          setTimeout(() => {
            errorBlocks[i].classList.remove('error-active');
            errorBlocks[i].classList.add('error-out');
          }, 1500);
          setTimeout(() => {
            errorBlocks[i].classList.remove('error-out');
          }, 2700);
        }
      }
    }
  });
}