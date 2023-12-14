import toDoStatusMapper from "@/mapper/to-do-status-mapper";
import Vue from "vue/types/umd";

export const toDOStatusFilter = Vue.filter("todoStatus", function (rawStatus) {
  return toDoStatusMapper.converRawtoLabel(rawStatus);
});
