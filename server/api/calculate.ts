export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { year, net, drivePlus } = body;
  const nowYear = new Date().getFullYear();

  const limitations = checkLimitations(year, nowYear, net);
  if (limitations) return { limitations };

  const factor = calculateFactor(year, nowYear, net);
  const insurancePrice = calculateInsurancePrice(net, factor, drivePlus);
  const installments = calculateInstallments(insurancePrice);

  return { insurancePrice, installments };
});

function checkLimitations(year, nowYear, net) {
  if (nowYear - year > 5)
    return "Samochodów starsze niż 5 lat nie są obsługiwane.";
  if (net > 400000)
    return "Kwota netto jest za wysoka. Potrzebne jest dokładne wyliczenie składki u ubezpieczyciela.";
}

function calculateFactor(year, nowYear, net) {
  let factor = 0;
  if (nowYear - year > 1) factor += 1;

  if (net < 40000) factor += 8;
  else if (net >= 40000 && net < 100000) factor += 5;
  else if (net >= 100000 && net < 200000) factor += 4;
  else if (net >= 200000 && net < 4000000) factor += 2;

  return factor;
}

function calculateInsurancePrice(net, factor, drivePlus) {
  let insurancePrice = (net * factor) / 100;
  if (!drivePlus) insurancePrice = insurancePrice * 1.11;
  return insurancePrice.toFixed(2);
}

function calculateInstallments(insurancePrice) {
  return [
    {
      installmentCount: 2,
      installmentPrice: ((insurancePrice * 1.02 + 200) / 2).toFixed(2),
      installmentFull: (insurancePrice * 1.02 + 200).toFixed(2),
    },
    {
      installmentCount: 4,
      installmentPrice: ((insurancePrice * 1.04 + 200) / 4).toFixed(2),
      installmentFull: (insurancePrice * 1.04 + 200).toFixed(2),
    },
  ];
}
