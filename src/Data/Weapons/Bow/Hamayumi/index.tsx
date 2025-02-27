import { IWeaponSheet } from '../../../../Types/weapon'
import img from './Weapon_Hamayumi.png'

import data_gen from './data_gen.json'
import { WeaponData } from 'pipeline'
import { IConditionals } from '../../../../Types/IConditional'
import { TransWrapper } from '../../../../Components/Translate'
const normal_dmg_s = [16, 20, 24, 28, 32]
const charged_dmg_s = [12, 15, 18, 21, 24]
const conditionals: IConditionals = {
  e: {//100% energy
    name: <TransWrapper ns="weapon_Hamayumi" key18="ener" />,
    stats: stats => ({
      normal_dmg_: normal_dmg_s[stats.weapon.refineIndex],
      charged_dmg_: charged_dmg_s[stats.weapon.refineIndex]
    })
  }
}
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  img,
  stats: stats => ({
    normal_dmg_: normal_dmg_s[stats.weapon.refineIndex],
    charged_dmg_: charged_dmg_s[stats.weapon.refineIndex]
  }),
  conditionals,
  document: [{
    conditional: conditionals.e
  }],
}
export default weapon