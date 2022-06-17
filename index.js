function introduction(Name) {
   return (`Hi, my name is ${Name}.`);
}
function introductionWithLanguage(Name, Language ) {
   return (`Hi, my name is ${Name} and I am learning to program in ${Language}.`);
}
function introductionWithLanguageOptional(Name,  Language = "JavaScript" ) {
    return (`Hi, my name is ${Name} and I am learning to program in ${Language}.`);
}
