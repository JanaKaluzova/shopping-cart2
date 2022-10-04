const CURRENCY_FORMATTER = new Intl.NumberFormat('cs-cz', {
  currency: 'CZK',
  style: 'currency',
})

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number)
}
