//Q13Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companiesName = [
    "Facebook",
    " Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
const Index=companiesName.indexOf('Apple')
if(Index != -1){
    console.log('this companyName does exist in this array')
}else{
    console.log('this companyName does not exist this array') 
};
