/**
 * DataTransfer class handles data rate-related conversions
 */
class DataTransfer {
  /**
   * @constructor
   * @param {Object} unit data unit
   * @param {Array} arr conversion rates array
   */
  constructor(unit, arr) {
    this.unit = unit;
    this.arr = arr;
  }

  getPreciseNumber(number) {
    if (number < 10e-3) {
      return number;
    }
    return Math.round(number * 1000) / 1000;
  }

  getPreciseNumber(number, precision) {
    return number.toPrecision(
      Math.min(Math.max(this.getPrecision(number), precision), 10)
    );
  }
  /**
   * @param {Number} quantity input quantity number
   * @returns number value in conversion
   */
  getStandardConversion(quantity) {
    //We use a switch case to make appropriate conversion

    switch (this.unit.toLowerCase()) {
      case "b/s":
        return quantity;
      case "kb/s":
        return quantity * 1000;
      case "mb/s":
        return quantity * 1000000;
      case "gb/s":
        return quantity * 1000000000;
      case "tb/s":
        return quantity * 1000000000000;
      default:
        return null;
    }
  }

  /**
   *
   * @param {Number} quantity input number
   * @param {Number} precision input precision digits
   * @returns value after conversion with accuracy of 10 decimal points
   */
  getAllConversions(quantity, precision) {
    let res = "";
    this.arr.forEach((u) => {
      switch (u.toLowerCase()) {
        case "b/s": {
          res += "," + this.getPreciseNumber(quantity) + " b/s";
          break;
        }
        case "kb/s": {
          let conv = quantity / 1000;
          res += "," + this.getPreciseNumber(conv) + " Kb/s";
          break;
        }
        case "mb/s": {
          let conv = quantity / 1000000;
          res += "," + this.getPreciseNumber(conv) + " Mb/s";
          break;
        }
        case "gb/s": {
          let conv = quantity / 1000000000;
          res += "," + this.getPreciseNumber(conv) + " Gb/s";
          break;
        }
        case "tb/s": {
          let conv = quantity / 1000000000000;
          res += "," + this.getPreciseNumber(conv) + " Tb/s";
          break;
        }
      }
    });
    console.log(res);
    return res;
  }
}

if (typeof module == "object") {
  module.exports = DataTransfer;
}
