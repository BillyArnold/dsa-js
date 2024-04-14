const twoPointer = (arr) => {
  let left = 0,
    ans = 0,
    right = arr.length - 1;

  while (left < right) {
    //left and right logic
    if (CONDITION) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

//two pointers with 2 inputs

const twoInputs = (arr1, arr2) => {
  let i = 0,
    j = 0,
    ans = 0;

  while (i < arr1.length && j < arr2.length) {
    if (CONDITION) {
      i++;
    } else {
      j++;
    }
  }

  while (i < arr1.length) {
    i++;
  }

  while (j < arr2.length) {
    j++;
  }

  return ans;
};
