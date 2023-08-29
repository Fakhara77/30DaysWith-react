//Q14Filter out companies which have more than one 'o' 
const companiesName = [
    "Facebook",
    " Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  const filteredCompanies=companiesName.filter((company)=>company.includes('oo'));
  console.log(filteredCompanies);