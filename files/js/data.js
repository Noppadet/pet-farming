/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '1.0.0',
  unitList: [
    { name: 'Elf Sage', qtyOwned: 1, optimalQty: 15, special: '', img: 185, farm: false, index: 99, honor: 11, defaultTier: 1 },
    { name: 'Sword Dancer', qtyOwned: 1, optimalQty: 10, special: '', img: 145, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Forest Guardian', qtyOwned: 1, optimalQty: 0, special: '', img: 113, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Unicorn Knight', qtyOwned: 1, optimalQty: 0, special: '', img: 38, farm: false, index: 99, honor: 0, defaultTier: 4 },
    { name: 'Windwalker', qtyOwned: 1, optimalQty: 30, special: 'core', img: 177, farm: false, index: 1, honor: 10 , defaultTier: 5 },
    { name: 'Sylphid', qtyOwned: 1, optimalQty: 20, special: '', img: 137, farm: true, index: 11, honor: 0, defaultTier: 6 },
    { name: 'Druid', qtyOwned: 1, optimalQty: 0, special: '', img: 107, farm: false, index: 99, honor: 0, defaultTier: 7 },
    { name: 'Elementalist', qtyOwned: 1, optimalQty: 27, special: '', img: 169, farm: false, index: 99, honor: 0, defaultTier: 8 },
    { name: 'Alchemist', qtyOwned: 1, optimalQty: 0, special: '', img: 127, farm: false, index: 99, honor: 0, defaultTier: 9 },
    { name: 'Goku', qtyOwned: 1, optimalQty: 5, special: 'instructor', img: 119, farm: false, index: 99, honor: 0, defaultTier: 10 },
    { name: 'Ent', qtyOwned: 1, optimalQty: 0, special: '', img: 34, farm: false, index: 99, honor: 0, defaultTier: 11 },
    { name: 'Wolf Warrior', qtyOwned: 1, optimalQty: 0, special: '', img: 36, farm: false, index: 99, honor: 0, defaultTier: 12 },
    { name: 'Fairy', qtyOwned: 1, optimalQty: 13, special: 'core, support', img: 97, farm: true, index: 5, honor: 1, defaultTier: 13 },
    { name: 'Hippogriff', qtyOwned: 1, optimalQty: 20, special: 'core, support', img: 161, farm: true, index: 2, honor: 8 , defaultTier: 14 },
    // { name: 'Athos', qtyOwned: 1, optimalQty: 0, special: '', img: 201, farm: true, index: 51, honor: 0, defaultTier: 16 },
    // { name: 'Grizzle', qtyOwned: 1, optimalQty: 0, special: '', img: 202, farm: true, index: 52, honor: 0, defaultTier: 17 },
    // { name: 'Raven', qtyOwned: 1, optimalQty: 0, special: '', img: 203, farm: true, index: 53, honor: 0, defaultTier: 18 },
    // { name: 'Leyak', qtyOwned: 1, optimalQty: 0, special: '', img: 204, farm: true, index: 54, honor: 0, defaultTier: 19 },
    // { name: 'Osma', qtyOwned: 1, optimalQty: 0, special: '', img: 95, farm: true, index: 41, honor: 0, defaultTier: 20 },
    // { name: 'Saul', qtyOwned: 1, optimalQty: 0, special: '', img: 96, farm: true, index: 42, honor: 0, defaultTier: 21 },
    // { name: 'Rena', qtyOwned: 1, optimalQty: 0, special: '', img: 93, farm: true, index: 39, honor: 0, defaultTier: 22 },
    // { name: 'Bernard', qtyOwned: 1, optimalQty: 0, special: '', img: 112, farm: true, index: 43, honor: 0, defaultTier: 23 },
    // { name: 'ChiChi', qtyOwned: 1, optimalQty: 0, special: '', img: 113, farm: true, index: 44, honor: 0, defaultTier: 24 },
    // { name: 'Mori', qtyOwned: 1, optimalQty: 0, special: '', img: 137, farm: true, index: 48, honor: 0, defaultTier: 25 },
    // { name: 'Mambo', qtyOwned: 1, optimalQty: 0, special: '', img: 1, farm: true, index: 0, honor: 0, defaultTier: 26 },
    // { name: 'Totem', qtyOwned: 1, optimalQty: 0, special: '', img: 16, farm: true, index: 15, honor: 0, defaultTier: 27 },
    // { name: 'Lamp', qtyOwned: 1, optimalQty: 0, special: '', img: 13, farm: true, index: 12, honor: 0, defaultTier: 28 },
    // { name: 'Sleepy', qtyOwned: 1, optimalQty: 0, special: '', img: 15, farm: true, index: 14, honor: 0, defaultTier: 29 },
    // { name: 'Jingger', qtyOwned: 1, optimalQty: 0, special: '', img: 38, farm: true, index: 25, honor: 0, defaultTier: 30 },
    // { name: 'Oscar', qtyOwned: 1, optimalQty: 0, special: '', img: 56, farm: true, index: 36, honor: 0, defaultTier: 31 },
    // { name: 'Nimbus', qtyOwned: 1, optimalQty: 0, special: '', img: 37, farm: true, index: 24, honor: 0, defaultTier: 32 },
    // { name: 'Mir', qtyOwned: 1, optimalQty: 0, special: '', img: 36, farm: true, index: 23, honor: 0, defaultTier: 33 },
    // { name: 'Squirrel', qtyOwned: 1, optimalQty: 0, special: '', img: 18, farm: true, index: 17, honor: 0, defaultTier: 34 },
    // { name: 'Phoenic', qtyOwned: 1, optimalQty: 0, special: '', img: 9, farm: true, index: 8, honor: 0, defaultTier: 35 },
    // { name: 'Devil', qtyOwned: 1, optimalQty: 0, special: '', img: 27, farm: true, index: 21, honor: 0, defaultTier: 36 },
    // { name: 'Chesher', qtyOwned: 1, optimalQty: 0, special: '', img: 114, farm: true, index: 45, honor: 0, defaultTier: 37 },
    // { name: 'Winky', qtyOwned: 1, optimalQty: 0, special: '', img: 40, farm: true, index: 27, honor: 0, defaultTier: 38 },
    // { name: 'Cora', qtyOwned: 1, optimalQty: 0, special: '', img: 42, farm: true, index: 29, honor: 0, defaultTier: 39 },
    // { name: 'Bunny', qtyOwned: 1, optimalQty: 0, special: '', img: 41, farm: true, index: 28, honor: 0, defaultTier: 40 },
    // { name: 'Indy', qtyOwned: 1, optimalQty: 0, special: '', img: 10, farm: true, index: 9, honor: 0, defaultTier: 41 },
    // { name: 'Snork', qtyOwned: 1, optimalQty: 0, special: '', img: 8, farm: true, index: 7, honor: 0, defaultTier: 42 },
    // { name: 'Piggy', qtyOwned: 1, optimalQty: 0, special: '', img: 4, farm: true, index: 3, honor: 0, defaultTier: 43 },
    // { name: 'Rapty', qtyOwned: 1, optimalQty: 0, special: '', img: 39, farm: true, index: 26, honor: 0, defaultTier: 44 },
    // { name: 'Black', qtyOwned: 1, optimalQty: 0, special: '', img: 57, farm: true, index: 37, honor: 0, defaultTier: 45 },
    // { name: 'Juda', qtyOwned: 1, optimalQty: 0, special: '', img: 58, farm: true, index: 38, honor: 0, defaultTier: 46 },
    // { name: 'Joe', qtyOwned: 1, optimalQty: 0, special: '', img: 2, farm: false, index: 1, honor: 0, defaultTier: 47 },
    // { name: 'Mummy', qtyOwned: 1, optimalQty: 0, special: '', img: 3, farm: false, index: 2, honor: 0, defaultTier: 48 },
    // { name: 'Potang', qtyOwned: 1, optimalQty: 0, special: '', img: 5, farm: false, index: 4, honor: 0, defaultTier: 49 },
    // { name: 'Uni', qtyOwned: 1, optimalQty: 0, special: '', img: 14, farm: false, index: 5, honor: 0, defaultTier: 50 },
    // { name: 'Joker', qtyOwned: 1, optimalQty: 0, special: '', img: 7, farm: false, index: 6, honor: 0, defaultTier: 51 },
    // { name: 'Grim', qtyOwned: 1, optimalQty: 0, special: '', img: 11, farm: false, index: 10, honor: 0, defaultTier: 52 },
    // { name: 'Woola', qtyOwned: 1, optimalQty: 0, special: '', img: 12, farm: false, index: 11, honor: 0, defaultTier: 53 },
    // { name: 'Leo', qtyOwned: 1, optimalQty: 0, special: '', img: 26, farm: false, index: 20, honor: 0, defaultTier: 54 },
    // { name: 'Griffy', qtyOwned: 1, optimalQty: 0, special: '', img: 29, farm: false, index: 22, honor: 0, defaultTier: 55 },
  ],
  meta: ['pre-elf-core', 'elf-core', 'tinkey+icy 5* elf', 'T2 blunt elf', 'orc'],
  farmList: [],
};

// Load saved data if it exists
const savedData = JSON.parse(localStorage.getItem('data')) || false;
let data;
if (savedData) {
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    // Do something if data versions are different
  }
} else {
  data = _.cloneDeep(originalData);
}

const orderedUnitList = _.orderBy(data.unitList, 'index');

const vm = new Vue({
  el: '#app',
  data,
  created() {
    this.updateFarmList();
  },
  watch: {
    unitList: {
      handler(val) {
        this.updateFarmList();
      },
    },
    entries() {
      this.updateFarmList();
    },
    refills() {
      this.updateFarmList();
    },
  },
  computed: {
    orderedUnitList() {
      return _.orderBy(data.unitList, 'index');
    },
  },
  methods: {
    getUnit(unitName) {
      let unit = data.unitList[0];
      for (let i = 1; i < data.unitList.length; i++) {
        if (data.unitList[i].name === unitName) {
          unit = data.unitList[i];
          
          break;
        }
      }
      return unit;
    },
    reorderUnitList({ oldIndex, newIndex }) {
      const movedItem = data.unitList.splice(oldIndex, 1)[0];
      data.unitList.splice(newIndex, 0, movedItem);
    },
    resetTierList() {
      data.unitList = _.orderBy(data.unitList, 'defaultTier');
    },
    updateFarmList() {
      _.forEach(data.unitList, (obj) => {
        _.set(obj, 'numberLeftToFarm', 0);
      });

      // Save data
      localStorage.setItem('data', JSON.stringify(data));

      for (let i = 0; i < data.unitList.length; i++) {
        data.unitList[i].numberLeftToFarm = data.unitList[i].optimalQty - data.unitList[i].qtyOwned;
      }
      
      data.farmList = _.filter(data.unitList, obj => obj.qtyOwned < obj.optimalQty && obj.farm);
    },
  },
});
