let maskEmail = (email) => {
    let atSymboleIndex = email.indexOf("@");
    let userName = email.slice(0, atSymboleIndex);
    let domain = email.slice(atSymboleIndex);
    let firstLetter = userName[0];
    let lastLetter = userName[userName.length - 1];
    let stars = "*".repeat(atSymboleIndex - 2);

    return firstLetter + stars + lastLetter + domain;
}

console.log(maskEmail("dev.ashwanitiwari@gmail.com"));

// result
// [Running] node "d:\Projects\Github\JavaScript-Master-Handbook\question-practice\ques-1-Basic_Email_mask.js"
// d***************i@gmail.com