import { ServiceContext } from '@vtex/api'

export const CPF_LENGTH = 11

const unmaskCPF = (value: string) => value.replace(/\D/g, '')

export const validateCPF = (value: string) => {
  const unmaskedValue = unmaskCPF(value)

  if (unmaskedValue.length !== CPF_LENGTH) {
    return false
  }

  if (unmaskedValue.split('').every((digit) => digit === unmaskedValue[0])) {
    return false
  }

  let [secondDigit, firstDigit, ...digits] = unmaskedValue
    .split('')
    .map((digit) => parseInt(digit, 10))
    .reverse()

  digits = digits.reverse()

  const firstDigitSum = digits.reduce(
    (acc, digit, index) => acc + digit * (10 - index),
    0
  )
  const firstDigitRemainder = ((firstDigitSum * 10) % 11) % 10

  if (firstDigitRemainder !== firstDigit) return false

  const secondDigitSum = digits
    .concat([firstDigit])
    .reduce((acc, digit, index) => acc + digit * (11 - index), 0)
  const secondDigitRemainder = ((secondDigitSum * 10) % 11) % 10

  if (secondDigitRemainder !== secondDigit) return false

  return true
}

export default async function validateDocument(ctx: ServiceContext) {
  const { document } = ctx.vtex.route.params

  ctx.set('cache-control', `public, max-age=${60 * 60 * 24 * 360}`)

  ctx.body = validateCPF(document as string)
}
