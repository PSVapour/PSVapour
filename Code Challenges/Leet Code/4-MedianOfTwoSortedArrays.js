var findMedianSortedArrays = function(nums1, nums2) {
    for (var i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }

    function compare(val1, val2) {
        return val1 - val2;
    };
    nums1.sort(compare);
    if (nums1.length % 2 == 0) {
        return (nums1[Math.ceil(nums1.length / 2) - 1] + nums1[Math.ceil(nums1.length / 2)]) / 2;
    } else {
        return nums1[Math.ceil(nums1.length / 2) - 1];
    }
};

/*
  https://leetcode.com/problems/median-of-two-sorted-arrays/

  There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/
