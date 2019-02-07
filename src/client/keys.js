import bip39 from 'bip39'

const createMnemonic = () =>
  Promise.resolve(bip39.generateMnemonic())

const isValidMnemonic = mnemonic =>
  bip39.validateMnemonic(mnemonic)

const mnemonicToSeedHex = mnemonic =>
  bip39.mnemonicToSeedHex(mnemonic).toString('hex')

export default {
  createMnemonic,
  isValidMnemonic,
  mnemonicToSeedHex
}
