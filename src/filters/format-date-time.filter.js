import format from "date-fns/fp/format/index.js";
import Vue from "vue";

export const Filter = Vue.filter(
  "formatDateTime",
  function functionName(rawDateTime, dateTimeFormat) {
    if (rawDateTime.length === 0) return "N/A";
    const date = new Date(rawDateTime);
    return format(date, dateTimeFormat);
  }
);
