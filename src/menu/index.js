import { computed } from 'vue'
import starters from './starters'
import salads from './salads'
import soups from './soups'
import meat from './meat'
import seafood from './seafood'
import spageti from './spageti'
import chef from './chef'
import sale from './sale'
import pizza from './pizza'
import desserts from './desserts'
import drinks from './drinks'
import alco from './alco'
import state from '@/state'

const version = 1

const menu = computed(() => {
  let i = 0
  return [
    starters,
    salads,
    soups,
    meat,
    seafood,
    spageti,
    chef,
    sale,
    pizza,
    desserts,
    drinks,
    alco
  ].map(c => ({
    ...c,
    name: c.name[state.lang],
    divs: c.divs.map(div => ({
      name: div.name[state.lang],
      items: div.items.map(d => ({
        ...d,
        id: `${version}.${++i}`,
        name: d.name[state.lang],
        description: d.description[state.lang],
        weight: d.weight[state.lang]
      }))
    }))
  }))
})

export default menu
