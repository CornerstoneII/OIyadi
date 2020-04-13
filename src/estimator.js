const covid19ImpactEstimator = (data) => {
  const income = data.region.avgDailyIncomeInUSD;
  const population = data.region.avgDailyIncomePopulatin;
  const hospitalBeds = data.totalHospitalsBeds * 0.35;
  if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  }
  const days = data.timeToElapse;
  const factor = Math.trunc(days / 3);
  const impact = {
    currentlyInfected: data.reportedCases * 10,
    get infectionsByRequestedTime() {
      return this.currentlyInfected * (2 ** factor);
    },
    get severCasesByRequestedTime() {
      return this.infectionsByRequestedTime * 0.15;
    },
    get hospitalBedsByRequestedTime() {
      return Math.ceil(hospitalBeds - this.severCasesByRequestedTime);
    },
    get casesForICUByRequestedTime() {
      return this.infectionsByRequestedTime * 0.05;
    },
    get casesForVentilatorsByRequestedTime() {
      return this.infectionsByRequestedTime * 0.05;
    },
    get dollarsInFlight() {
      return this.infectionsByRequestedTime * 0.05;
    }
  };
  return {
    data,
    impact,
    severImpact
  };
};

export default covid19ImpactEstimator;
