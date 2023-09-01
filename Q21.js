//Remove the middle IT company or companies from the array
const companiesName = [
    "Facebook",
    " Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  const middleIndex=Math.floor(companiesName.length/2);
  companiesName.splice(middleIndex,1);
  console.log(companiesName);