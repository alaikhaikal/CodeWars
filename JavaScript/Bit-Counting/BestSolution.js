var countBits = (n) => {
    n.toString(2).split('0').join('').length;
};

countBits(12345)