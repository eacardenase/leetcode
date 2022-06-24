/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};
    const firstStr = s.toLowerCase();
    const secondStr = t.toLowerCase();

    for (let i = 0; i < firstStr.length; i++) {
        if (/[a-z]/.test(firstStr[i])) {
            obj1[firstStr[i]] = ++obj1[firstStr[i]] || 1;
            obj2[secondStr[i]] = ++obj2[secondStr[i]] || 1;
        }
    }

    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('anagram', 'nagaram'));
