export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 1);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = (data || [])?.map((item) => item[type]);
  if (type === 'type') {
    unique = data
      .map((item) => item['rooms'])
      .flat()
      .map((item) => item[type]);
  }
  return ['all', ...new Set(unique)];
};
