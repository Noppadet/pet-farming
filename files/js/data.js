/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '1.0.0',
  unitList: [
    { name: 'Elf Sage', qtyOwned: 1, optimalQty: 15, special: '', img: 185, farm: false, index: 99, honor: 11, defaultTier: 3 },
    { name: 'Sword Dancer', qtyOwned: 1, optimalQty: 10, special: '', img: 145, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Forest Guardian', qtyOwned: 1, optimalQty: 1, special: '', img: 113, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Unicorn Knight', qtyOwned: 1, optimalQty: 1, special: '', img: 38, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Windwalker', qtyOwned: 1, optimalQty: 30, special: 'core', img: 177, farm: false, index: 1, honor: 10 , defaultTier: 3 },
    { name: 'Sylphid', qtyOwned: 1, optimalQty: 10, special: '', img: 137, farm: true, index: 11, honor: 0, defaultTier: 3 },
    { name: 'Druid', qtyOwned: 1, optimalQty: 1, special: 'SH', img: 107, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Elementalist', qtyOwned: 1, optimalQty: 27, special: '', img: 169, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Alchemist', qtyOwned: 1, optimalQty: 5, special: '', img: 127, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Goku', qtyOwned: 1, optimalQty: 5, special: 'instructor', img: 119, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Ent', qtyOwned: 1, optimalQty: 1, special: '', img: 34, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Wolf Warrior', qtyOwned: 1, optimalQty: 1, special: '', img: 36, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Fairy', qtyOwned: 1, optimalQty: 14, special: 'core, support', img: 97, farm: true, index: 5, honor: 1, defaultTier: 1 },
    { name: 'Hippogriff', qtyOwned: 1, optimalQty: 20, special: 'core, support', img: 161, farm: true, index: 2, honor: 8 , defaultTier: 1 },
    
    { name: 'Musketress', qtyOwned: 1, optimalQty: 15, special: '', img: 183, farm: false, index: 99, honor: 11, defaultTier: 3 },
    { name: 'Valkyrie', qtyOwned: 1, optimalQty: 10, special: '', img: 143, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Griffin Rider', qtyOwned: 1, optimalQty: 1, special: '', img: 111, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Gunner', qtyOwned: 1, optimalQty: 1, special: '', img: 18, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Winged Knight', qtyOwned: 1, optimalQty: 30, special: '', img: 175, farm: false, index: 1, honor: 10 , defaultTier: 3 },
    { name: 'Steam Punk', qtyOwned: 1, optimalQty: 10, special: '', img: 135, farm: true, index: 11, honor: 0, defaultTier: 3 },
    { name: 'Aladdin', qtyOwned: 1, optimalQty: 18, special: '', img: 105, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Cleric', qtyOwned: 1, optimalQty: 17, special: '', img: 167, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Pilot', qtyOwned: 1, optimalQty: 5, special: '', img: 125, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Priest', qtyOwned: 1, optimalQty: 12, special: '', img: 95, farm: false, index: 99, honor: 0, defaultTier: 1 },
    { name: 'Flame Spirit', qtyOwned: 1, optimalQty: 27, special: '', img: 159, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Hot-Blooded Xuanzang', qtyOwned: 1, optimalQty: 5, special: 'instructor', img: 117, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Golem', qtyOwned: 1, optimalQty: 1, special: 'ToT', img: 14, farm: true, index: 5, honor: 1, defaultTier: 4 },
    { name: 'Fire Mage', qtyOwned: 1, optimalQty: 1, special: '', img: 16, farm: true, index: 2, honor: 8 , defaultTier: 4 },

    { name: 'Crow Knight', qtyOwned: 1, optimalQty: 20, special: '', img: 187, farm: false, index: 99, honor: 11, defaultTier: 3 },
    { name: 'Incubus', qtyOwned: 1, optimalQty: 10, special: '', img: 147, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Succubus', qtyOwned: 1, optimalQty: 1, special: 'Raid', img: 115, farm: false, index: 99, honor: 0, defaultTier: 4 },
    { name: 'Death Knight', qtyOwned: 1, optimalQty: 1, special: '', img: 58, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Abyss Mage', qtyOwned: 1, optimalQty: 30, special: '', img: 179, farm: false, index: 1, honor: 10 , defaultTier: 3 },
    { name: 'Medusa', qtyOwned: 1, optimalQty: 10, special: '', img: 139, farm: true, index: 11, honor: 0, defaultTier: 3 },
    { name: 'Dark Ninja', qtyOwned: 1, optimalQty: 1, special: 'ToT', img: 109, farm: false, index: 99, honor: 0, defaultTier: 4 },
    { name: 'Dark Elf', qtyOwned: 1, optimalQty: 15, special: '', img: 169, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Lich', qtyOwned: 1, optimalQty: 5, special: '', img: 129, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Dark Archer', qtyOwned: 1, optimalQty: 24, special: '', img: 99, farm: false, index: 99, honor: 0, defaultTier: 1 },
    { name: 'Dark Spirit', qtyOwned: 1, optimalQty: 20, special: '', img: 163, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Dark Admiral', qtyOwned: 1, optimalQty: 5, special: 'instructor', img: 121, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Hands of Death', qtyOwned: 1, optimalQty: 1, special: '', img: 54, farm: true, index: 99, honor: 1, defaultTier: 4 },
    { name: 'Bomb Unit', qtyOwned: 1, optimalQty: 1, special: '', img: 56, farm: true, index: 99, honor: 8 , defaultTier: 99 },

    { name: 'Rangda', qtyOwned: 1, optimalQty: 15, special: '', img: 189, farm: false, index: 99, honor: 11, defaultTier: 3 },
    { name: 'Ice Spirit', qtyOwned: 1, optimalQty: 10, special: '', img: 149, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Sorcerer', qtyOwned: 1, optimalQty: 24, special: '', img: 101, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Siren', qtyOwned: 1, optimalQty: 30, special: '', img: 181, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Naga', qtyOwned: 1, optimalQty: 10, special: '', img: 141, farm: false, index: 1, honor: 10 , defaultTier: 2 },
    { name: 'Battle Drummer', qtyOwned: 1, optimalQty: 750, special: '', img: 103, farm: true, index: 11, honor: 0, defaultTier: 1 },
    { name: 'Frost Demon', qtyOwned: 1, optimalQty: 24, special: '', img: 173, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Wyvern Rider', qtyOwned: 1, optimalQty: 5, special: '', img: 131, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Big Foot', qtyOwned: 1, optimalQty: 1, special: '', img: 74, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Ice Wizard', qtyOwned: 1, optimalQty: 1, special: '', img: 76, farm: false, index: 99, honor: 0, defaultTier: 99 },
    { name: 'Blade Master', qtyOwned: 1, optimalQty: 20, special: '', img: 165, farm: false, index: 99, honor: 0, defaultTier: 3 },
    { name: 'Raptor Rider', qtyOwned: 1, optimalQty: 5, special: 'instructor', img: 123, farm: false, index: 99, honor: 0, defaultTier: 2 },
    { name: 'Wolf Rider', qtyOwned: 1, optimalQty: 1, special: '', img: 78, farm: true, index: 5, honor: 1, defaultTier: 99 },
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
