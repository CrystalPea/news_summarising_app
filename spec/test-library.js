var assert = {
  isTrue: function(assertionToCheck, functionName) {
    if (!assertionToCheck) {
      throw new Error(functionName+ " failed:" + assertionToCheck + " is not truthy (ಠ_ಠ)");
    } else {
      return console.log(functionName + " is green and happy (ﾉ◕ヮ◕)ﾉ")
    }
  }
};
