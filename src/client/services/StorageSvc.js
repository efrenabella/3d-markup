
import BaseSvc from './BaseSvc'
import Lockr from 'lockr'

export default class StorageSvc extends BaseSvc {

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  constructor (config) {

    super (config)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  name() {

    return 'StorageSvc'
  }
}
