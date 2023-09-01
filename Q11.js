//Q11Change each company name to uppercase one by one and print them out
const companiesName = [
    "Facebook",
    " Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  for (let i = 0; i < companiesName.length; i++){
  const upperCaseName = companiesName[i].toUpperCase();
  console.log(upperCaseName);
  }